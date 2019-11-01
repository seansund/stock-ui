import React, { Component } from "react";
import {
  StructuredListWrapper,
  StructuredListRow,
  StructuredListCell,
  StructuredListHead,
  StructuredListBody,
  StructuredListInput,
  Icon
} from "carbon-components-react";
import { iconCheckmarkSolid } from "carbon-icons";
import Header from "./Header";
import "./patterns.scss";

class StockItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      selectedRow: 0
    };
  }

  componentDidMount() {
    const data = [
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

    this.setState(Object.assign(
      {},
      this.state,
      {
        data
      }
    ))
  }

  onRowClick = id => {
    this.setState({ selectedRow: id });
  };

  renderRow = (row, id) => {
    return (
      <StructuredListRow key={id} onClick={() => this.onRowClick(id)}>
        <div>
          <StructuredListInput
            id={`row-${id}`}
            value="row-0"
            title="row-0"
            name="row-0"
            //defaultChecked={this.state.selectedRow === id}
            checked={this.state.selectedRow === id}
          />
          <StructuredListCell>
            <Icon
              className="bx--structured-list-svg"
              icon={iconCheckmarkSolid}
            />
          </StructuredListCell>
        </div>
        {Object.keys(row).map(col => {
          return (
            <StructuredListCell key={col} className="simple-list-row">
              {row[col]}
            </StructuredListCell>
          );
        })}
      </StructuredListRow>
    );
  };

  render() {
    const data = this.state.data;
    const columns = [
      "name",
      "description",
      "stock",
      "unitPrice",
      "picture",
      "manufacturer",
    ];

    return (
      <div className="bx--grid pattern-container">
        <Header
          title="Table List"
          subtitle="This pattern will display and array of model objects in a multi column grid/table."
        />
        <div className="bx--row">
          <div className="bx--col-xs-12">
            <StructuredListWrapper selection border>
              <StructuredListHead>
                <StructuredListRow head>
                  <StructuredListCell head />
                  {columns.map(key => {
                    return (
                      <StructuredListCell head key={key}>
                        {key.charAt(0).toUpperCase() +
                          key.slice(1).replace(/([A-Z])/g, " $1")}
                      </StructuredListCell>
                    );
                  })}
                </StructuredListRow>
              </StructuredListHead>

              <StructuredListBody>
                {data.map((row, i) => {
                  return this.renderRow(row, i);
                })}
              </StructuredListBody>
            </StructuredListWrapper>
          </div>
        </div>
      </div>
    );
  }
}

export default StockItemList;
