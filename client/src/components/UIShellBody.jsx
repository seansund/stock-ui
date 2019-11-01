import {Component} from "react";
import "./patterns.scss";
import DisplayForm from "./DisplayForm";
import StockItemList from "./StockItemList";

class UIShellBody extends Component {
  components = {
    "Stock Items": StockItemList,
  };
  render() {
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
