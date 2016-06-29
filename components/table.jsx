var React = require('react');

var Table = React.createClass({
  smallTableData: [
    { "Country": "Brazil", "Most Consumed": "Meats, Poultry, Fish" },
    { "Country": "Canada", "Most Consumed": "Dairy" },
    { "Country": "China", "Most Consumed": "Grains" },
    { "Country": "India", "Most Consumed": "Grains" },
    { "Country": "Japan", "Most Consumed": "Vegetables" }
  ],

  mediumTableData: [
    { "Country": "Brazil", "Most Consumed": "Meats, Poultry, Fish", "Type": "Red Meat", "Percentage of Diet": "19.3%" },
    { "Country": "Canada", "Most Consumed": "Dairy", "Type": "Cheese", "Percentage of Diet": "11.4%" },
    { "Country": "China", "Most Consumed": "Grains", "Type": "Rice", "Percentage of Diet": "29.5%" },
    { "Country": "India", "Most Consumed": "Grains", "Type": "Rice", "Percentage of Diet": "27.4%" },
    { "Country": "Japan", "Most Consumed": "Vegetables", "Type": "Cabbage", "Percentage of Diet": "7.2%" }
  ],

  largeTableData: [
    { "Continent": "Africa", "Food 1": "Biltong", "Food 2": "Fufu", "Food 3": "Mandazi", "Food 4": "Injera" },
    { "Continent": "Africa", "Food 1": "Biltong", "Food 2": "Fufu", "Food 3": "Mandazi", "Food 4": "Injera" },
    { "Continent": "Africa", "Food 1": "Biltong", "Food 2": "Fufu", "Food 3": "Mandazi", "Food 4": "Injera" },
    { "Continent": "Africa", "Food 1": "Biltong", "Food 2": "Fufu", "Food 3": "Mandazi", "Food 4": "Injera" },
    { "Continent": "Africa", "Food 1": "Biltong", "Food 2": "Fufu", "Food 3": "Mandazi", "Food 4": "Injera" },
  ],

  render: function () {
    if (this.props.tableSize === "small") {
      var tableRows = this.smallTableData.map(function (country, idx) {
        return (
          <ul className="row" key={idx}>
            <li>{country["Country"]}</li>
            <li>{country["Most Consumed"]}</li>
          </ul>
        );
      });

      return (
        <div className="table-small">
          <div className="table-header">
            <div>
              <h2>Title</h2>
              <p>Table description</p>
            </div>
            <div className="table-icons">
              <img src="images/icon-settings-copy.png"/>
              <img src="images/icon-move-copy.png"/>
            </div>
          </div>
          <ul className="col-headers">
            <li className="col-header">
              Country
              <img src="images/icon-table-sort-down.png"/>
            </li>
            <li className="col-header">Most Consumed</li>
          </ul>
          <ul className="table-rows">
            {tableRows}
          </ul>
        </div>
      );
    } else if (this.props.tableSize === "medium") {
      var tableRows = this.mediumTableData.map(function (country, idx) {
        return (
          <ul className="row" key={idx}>
            <li>{country["Country"]}</li>
            <li>{country["Most Consumed"]}</li>
            <li>{country["Type"]}</li>
            <li>{country["Percentage of Diet"]}</li>
          </ul>
        );
      });

      return (
        <div className="table-medium">
          <div className="table-header">
            <div>
              <h2>Title</h2>
              <p>Table description</p>
            </div>
            <div className="table-icons">
              <img src="images/icon-settings-copy.png"/>
              <img src="images/icon-move-copy.png"/>
            </div>
          </div>
          <ul className="col-headers">
            <li className="col-header">
              Country
              <img src="images/icon-table-sort-down.png"/>
            </li>
            <li className="col-header">Most Consumed</li>
            <li className="col-header">Type</li>
            <li className="col-header">Percentage of Diet</li>
          </ul>
          <ul className="table-rows">
            {tableRows}
          </ul>
        </div>
      );
    } else {
      var tableRows = this.largeTableData.map(function (country, idx) {
        return (
          <ul className="row" key={idx}>
            <li>{country["Continent"]}</li>
            <li>{country["Food 1"]}</li>
            <li>{country["Food 2"]}</li>
            <li>{country["Food 3"]}</li>
            <li>{country["Food 4"]}</li>
          </ul>
        );
      });

      return (
        <div className="table-large">
          <div className="table-header">
            <div>
              <h2>Title</h2>
              <p>Table description</p>
            </div>
            <div className="table-icons">
              <img src="images/icon-settings-copy.png"/>
              <img src="images/icon-move-copy.png"/>
            </div>
          </div>
          <ul className="col-headers">
            <li className="col-header">
              Continent
              <img src="images/icon-table-sort-down.png"/>
            </li>
            <li className="col-header">Food 1</li>
            <li className="col-header">Food 2</li>
            <li className="col-header">Food 3</li>
            <li className="col-header">Food 4</li>
          </ul>
          <ul className="table-rows">
            {tableRows}
          </ul>
        </div>
      );
    }
  }
});

module.exports = Table;
