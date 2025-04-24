let audioContext: AudioContext | null = null;
let micStream: MediaStreamAudioSourceNode | null = null;
let processor: ScriptProcessorNode | null = null;
let ws: WebSocket;

export async function startMicStream(): Promise<void> {
  try {
    const stream: MediaStream = await navigator.mediaDevices.getUserMedia({ audio: true });
    audioContext = new AudioContext({ sampleRate: 16000 });

    micStream = audioContext.createMediaStreamSource(stream);
    processor = audioContext.createScriptProcessor(1024, 1, 1);

    micStream.connect(processor);
    processor.connect(audioContext.destination);

    processor.onaudioprocess = (event: AudioProcessingEvent): void => {
      const pcmData: Float32Array = event.inputBuffer.getChannelData(0);
      const int16Data: Int16Array = float32ToInt16(pcmData);
      sendAudio(int16Data);
    };
  } catch (err) {
    console.error("Error accessing microphone:", err);
  }
}

function float32ToInt16(float32Array: Float32Array): Int16Array {
  const int16Array = new Int16Array(float32Array.length);
  for (let i = 0; i < float32Array.length; i++) {
    const sample = Math.max(-1, Math.min(1, float32Array[i]));
    int16Array[i] = sample < 0 ? sample * 0x8000 : sample * 0x7FFF;
  }
  return int16Array;
}

function sendAudio(int16Array: Int16Array): void {
  if (ws && ws.readyState === WebSocket.OPEN) {
    ws.send(int16Array.buffer);
  }
}

// Websocket connection
export function setWebSocket(socket: WebSocket): void {
  ws = socket;
}