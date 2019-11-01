
export class StockServiceMock {
  async listStockItems() {
    await timer(1000);

    return [
      {
        name: "Lin",
        description: "123 Main Street",
        stock: "Austin",
        unitPrice: "TX",
        picture: "12345",
        manufacturer: "United States"
      },
      {
        name: "Mak",
        description: "45 2nd Street",
        stock: "Austin",
        unitPrice: "TX",
        picture: "78766",
        manufacturer: "United States"
      },
      {
        name: "Joe",
        description: "40 Down Street",
        stock: "San Francisco",
        unitPrice: "CA",
        picture: "90706",
        manufacturer: "United States"
      }
    ];
  }
}

async function timer(time) {
  return new Promise(resolve => {
    setTimeout(resolve, time)
  });
}
