import axios from 'axios';

class OrderService {
  postOrder(name: string, quantity: string, cost: string) {
    return axios.post(`http://localhost:8080/api/orders`, {
      name,
      quantity,
      cost
    });
  }
  getOrder() {
    return axios.get(`http://localhost:8080/api/orders`, {});
  }
}

export default new OrderService();
