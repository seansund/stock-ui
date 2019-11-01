const superagent = require('superagent');

export class StockService {
  async listStockItems() {
    return superagent
      .get('/api/stock-service')
      .set('accept', 'application/json')
      .then(res => {
        console.log('Got response: ', res);
        return res.body;
      });
  }
}
