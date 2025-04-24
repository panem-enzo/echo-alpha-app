type MessageHandler = (message: MessageEvent) => void;

class WebSocketManager {
  private socket: WebSocket | null = null;
  private url: string;
  private onMessage?: MessageHandler;

  constructor(url: string) {
    this.url = url;
  }

  connect(): void {
    this.socket = new WebSocket(this.url);

    this.socket.onopen = () => {
      console.log("WebSocket connected to", this.url);
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

  close(): void {
    this.socket?.close();
  }
}

const wsManager = new WebSocketManager(`ws://${window.location.hostname}/ws`);
export default wsManager;