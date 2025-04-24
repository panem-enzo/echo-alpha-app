let audioContext;
let micStream;
let processor;

async function startMicStream() {
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  audioContext = new AudioContext({ sampleRate: 16000 }); // Match ESP32 config
  micStream = audioContext.createMediaStreamSource(stream);

  processor = audioContext.createScriptProcessor(1024, 1, 1);
  micStream.connect(processor);
  processor.connect(audioContext.destination);

  processor.onaudioprocess = (event) => {
    const pcmData = event.inputBuffer.getChannelData(0); // Float32Array
    const int16Data = float32ToInt16(pcmData);
    sendAudio(int16Data); // Send via WebSocket
  };
}

function float32ToInt16(float32Array) {
  const int16Array = new Int16Array(float32Array.length);
  for (let i = 0; i < float32Array.length; i++) {
    let s = Math.max(-1, Math.min(1, float32Array[i]));
    int16Array[i] = s < 0 ? s * 0x8000 : s * 0x7FFF;
  }
  return int16Array;
}

function sendAudio(int16Array) {
  if (ws.readyState === WebSocket.OPEN) {
    ws.send(int16Array.buffer); // Send raw PCM
  }
}