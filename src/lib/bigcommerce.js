import axios from 'axios';

class BigCommerceAPI {
  constructor() {
    this.storeHash = process.env.BIGCOMMERCE_STORE_HASH;
    this.accessToken = process.env.BIGCOMMERCE_ACCESS_TOKEN;
    this.baseURL = `https://api.bigcommerce.com/stores/${this.storeHash}/v3`;
    
    this.client = axios.create({
      baseURL: this.baseURL,
      headers: {
        'X-Auth-Token': this.accessToken,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });
  }

  // Get all products
  async getProducts() {
    try {
      const response = await this.client.get('/catalog/products?include=images,variants');
      return response.data;
    } catch (error) {
      console.error('Error fetching products:', error);
      return { data: [] };
    }
  }

  // Get single product
  async getProduct(id) {
    try {
      const response = await this.client.get(`/catalog/products/${id}?include=images,variants`);
      return response.data;
    } catch (error) {
      console.error('Error fetching product:', error);
      return null;
    }
  }

  // Create cart
  async createCart(lineItems) {
    try {
      const response = await this.client.post('/carts', {
        line_items: lineItems,
        channel_id: 1
      });
      return response.data;
    } catch (error) {
      console.error('Error creating cart:', error);
      return null;
    }
  }

  // Get cart
  async getCart(cartId) {
    try {
      const response = await this.client.get(`/carts/${cartId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching cart:', error);
      return null;
    }
  }
}

export default new BigCommerceAPI();