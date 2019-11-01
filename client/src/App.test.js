import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {StockServiceMock} from "./services/stock-service-mock";

it('renders without crashing', () => {
  const stockService = new StockServiceMock();

  const div = document.createElement('div');
  ReactDOM.render(<App stockService={stockService}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
