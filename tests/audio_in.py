import asyncio
import websockets
import pyaudio

# ====== Configuration ======
SAMPLE_RATE = 16000        # ESP32-matching sample rate
CHANNELS = 1               # Mono audio
FORMAT = pyaudio.paInt16   # 16-bit PCM
CHUNK_SIZE = 1024          # Number of samples per buffer

# ====== Audio Output Setup ======
audio = pyaudio.PyAudio()
stream = audio.open(
    format=FORMAT,
    channels=CHANNELS,
    rate=SAMPLE_RATE,
    output=True,
    frames_per_buffer=CHUNK_SIZE
)

# ====== Async WebSocket Listener ======
async def audio_receiver(uri: str):
    print(f"Connecting to WebSocket: {uri}")
    try:
        async with websockets.connect(uri) as websocket:
            print("Connected. Streaming audio...")
            while True:
                data = await websocket.recv()
                if isinstance(data, bytes):
                    print(f"🔈 Received {len(data)} bytes")
                    print(f"First 10 bytes: {list(data[:10])}")
                    stream.write(data)
    except websockets.ConnectionClosed:
        print("WebSocket connection closed.")
    except Exception as e:
        print(f"Error: {e}")
    finally:
        print("Stopping audio...")
        stream.stop_stream()
        stream.close()
        audio.terminate()

# ====== Entry Point ======
if __name__ == "__main__":
    # Example: 192.168.4.1 for ESP32, or localhost
    hostname = input("Enter WebSocket server address (e.g., 192.168.4.1): ").strip()
    ws_url = f"ws://{hostname}/ws"
    asyncio.run(audio_receiver(ws_url))
