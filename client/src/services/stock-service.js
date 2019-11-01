const superagent = require('superagent');

export class StockService {
  async listStockItems() {
    return superagent
      .get('/api/stock-service')
      .set('accept', 'json');
  }
}
