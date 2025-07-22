declare global {
  interface Window {
    addToCart: (product: {
      id: string;
      name: string;
      description?: string;
      price: string;
      images?: Array<{ url_standard: string }>;
      inventory_level?: number;
    }) => void;
  }
}

export {};