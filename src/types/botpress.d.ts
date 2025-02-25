declare global {
    interface Window {
      botpressWebChat: {
        init: (config: Record<string, unknown>) => void;
        onEvent: (callback: (event: any) => void) => void;
        sendEvent: (event: { type: string }) => void;
      };
    }
  }
  
  export {};