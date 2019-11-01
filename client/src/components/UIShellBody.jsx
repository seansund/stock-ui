import React from 'react';
import "./patterns.scss";
import StockItemList from "./StockItemList";
import {StockService} from "../services/stock-service";

class UIShellBody extends React.Component {
  components = {
    "Stock Items": StockItemList,
  };
  render() {
// eslint-disable-next-line
    const PatternName = this.components[
      this.props.patternName || "Stock Items"
    ];
    return (
      <div className="pattern-container">
        <PatternName stockService={new StockService()}/>
      </div>
    );
  }
}
export default UIShellBody;
