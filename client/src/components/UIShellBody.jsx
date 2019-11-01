import React from 'react';
import "./patterns.scss";
import StockItemList from "./StockItemList";

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
        <PatternName />
      </div>
    );
  }
}
export default UIShellBody;
