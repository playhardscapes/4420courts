declare global {
  interface Window {
    addToCart: (product: any) => void;
  }
}

export {};