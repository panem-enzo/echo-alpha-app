import wsManager from "../utils/wsManager";

let audioContext: AudioContext | null = null;
let micStream: MediaStreamAudioSourceNode | null = null;
let processor: ScriptProcessorNode | null = null;

export async function startMicStream(): Promise<void> {
  try {
    console.log("Mic started");
    const stream: MediaStream = await navigator.mediaDevices.getUserMedia({
      audio: true,
    });
    audioContext = new AudioContext({ sampleRate: 16000 });

    micStream = audioContext.createMediaStreamSource(stream);
    processor = audioContext.createScriptProcessor(1024, 1, 1);

    micStream.connect(processor);
    processor.connect(audioContext.destination);

    processor.onaudioprocess = (event: AudioProcessingEvent): void => {
      const pcmData: Float32Array = event.inputBuffer.getChannelData(0);
      const uint8Data: Uint8Array = float32ToUint8(pcmData);
      wsManager.send(uint8Data.buffer);
      console.log("Sending PCM chunk:", uint8Data.length, "samples");
    };
  } catch (err) {
    console.error("Error accessing microphone:", err);
  }
}

function float32ToUint8(float32Array: Float32Array): Uint8Array {
  const uint8Array = new Uint8Array(float32Array.length);
  for (let i = 0; i < float32Array.length; i++) {
    // Clamp the float to -1..1 then map to 0..255
    const clamped = Math.max(-1, Math.min(1, float32Array[i]));
    uint8Array[i] = (clamped * 127 + 128) & 0xff;
  }
  return uint8Array;
}
