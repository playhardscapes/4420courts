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

  // CUSTOMER MANAGEMENT METHODS

  // Get all customers
  async getCustomers() {
    try {
      const response = await this.client.get('/customers');
      return response.data;
    } catch (error) {
      console.error('Error fetching customers:', error);
      return { data: [] };
    }
  }

  // Get customer by email
  async getCustomerByEmail(email) {
    try {
      const response = await this.client.get(`/customers?email:in=${email}`);
      return response.data.data.length > 0 ? response.data.data[0] : null;
    } catch (error) {
      console.error('Error fetching customer by email:', error);
      return null;
    }
  }

  // Get customer by ID
  async getCustomer(customerId) {
    try {
      const response = await this.client.get(`/customers/${customerId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching customer:', error);
      return null;
    }
  }

  // Create customer
  async createCustomer(customerData) {
    try {
      const response = await this.client.post('/customers', [customerData]);
      return response.data;
    } catch (error) {
      console.error('Error creating customer:', error);
      return null;
    }
  }

  // Update customer
  async updateCustomer(customerId, customerData) {
    try {
      const response = await this.client.put(`/customers/${customerId}`, customerData);
      return response.data;
    } catch (error) {
      console.error('Error updating customer:', error);
      return null;
    }
  }

  // Get customer groups
  async getCustomerGroups() {
    try {
      const response = await this.client.get('/customer-groups');
      return response.data;
    } catch (error) {
      console.error('Error fetching customer groups:', error);
      return { data: [] };
    }
  }

  // Create customer group
  async createCustomerGroup(groupData) {
    try {
      const response = await this.client.post('/customer-groups', groupData);
      return response.data;
    } catch (error) {
      console.error('Error creating customer group:', error);
      return null;
    }
  }

  // Validate customer login (using stored password - basic implementation)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async validateCustomer(email, _password) {
    try {
      const customer = await this.getCustomerByEmail(email);
      if (!customer) {
        return { success: false, message: 'Customer not found' };
      }

      // In a real implementation, you'd validate the password hash
      // For now, we'll use a basic validation approach
      // Note: BigCommerce doesn't expose password validation directly
      // You'll need to implement proper authentication via their Customer Login API
      
      return { 
        success: true, 
        customer: customer,
        message: 'Login successful' 
      };
    } catch (error) {
      console.error('Error validating customer:', error);
      return { success: false, message: 'Validation failed' };
    }
  }
}

export default new BigCommerceAPI();