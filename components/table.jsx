var React = require('react');

var Table = React.createClass({
  smallTableData: [
    { "Country": "Brazil", "Most Consumed": "Meats, Poultry, Fish" },
    { "Country": "Canada", "Most Consumed": "Dairy" },
    { "Country": "China", "Most Consumed": "Grains" },
    { "Country": "India", "Most Consumed": "Grains" },
    { "Country": "Japan", "Most Consumed": "Vegetables" }
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
      return (
        <div></div>
      );
    } else {
      return (
        <div></div>
      );
    }
  }
});

module.exports = Table;
