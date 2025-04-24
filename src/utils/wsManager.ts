import { startMicStream } from "../audio/mic-audio-stream";

type MessageHandler = (message: MessageEvent) => void;

class WebSocketManager {
  private socket: WebSocket | null = null;
  private url: string;
  private onMessage?: MessageHandler;

  constructor() {
    this.url = this.resolveUrl();
  }

  private resolveUrl(): string {
    const hostname = window.location.hostname;
    const port = window.location.port;

    // Local dev (Vite)
    if (hostname === "localhost" || hostname === "127.0.0.1") {
      return `ws://${hostname}:${port || 5173}/ws`;
    }

    // Production / ESP32 mode (serving frontend from ESP32 itself)
    return `ws://${hostname}/ws`;
  }

  connect(): void {
    this.socket = new WebSocket(this.url);

    this.socket.onopen = () => {
      console.log("WebSocket connected to", this.url);
      startMicStream();
    };

    this.socket.onclose = () => {
      console.log("WebSocket disconnected");
    };

    this.socket.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    this.socket.onmessage = (message) => {
      this.onMessage?.(message);
    };
  }

  send(data: string | ArrayBufferLike): void {
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(data);
    }
  }

  setMessageHandler(handler: MessageHandler): void {
    this.onMessage = handler;
  }

  getSocket(): WebSocket | null {
    return this.socket;
  }

  isOpen(): boolean {
    return this.socket?.readyState === WebSocket.OPEN;
  }

  close(): void {
    this.socket?.close();
  }
}

const wsManager = new WebSocketManager();
export default wsManager;