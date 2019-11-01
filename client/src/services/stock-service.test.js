import {StockService} from "./stock-service";

describe('stock-service.test', () => {
  test('canary verifies test infrastructure', () => {
     expect(true).toEqual(true);
  });

  let classUnderTest;
  beforeEach(() => {
    classUnderTest = new StockService();
  });

  describe('given listStockItems()', () => {
    describe('when call is successful', () => {
      test('then return an array of StockItem values', async () => {
        expect(await classUnderTest.listStockItems()).not.toBeUndefined();
      });
    });
  });
});
