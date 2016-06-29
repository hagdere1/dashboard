var React = require('react');

var Table = React.createClass({
  countries: {
    "Brazil": "Meats, Poultry, Fish",
    "Canada": "Dairy",
    "China": "Grains",
    "India": "Grains",
    "Japan": "Vegetables"
  },

  render: function () {
    if (this.props.tableSize === "large") {
      var tableRows = Object.keys(this.countries).map(function (country) {
        return (
          <ul>
            <li>{country}</li>
            <li>{this.countries[country]}</li>
          </ul>
        );
      }.bind(this));

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
            <li className="col-header">Country</li>
            <li className="col-header">Most Consumed</li>
          </ul>
          <ul className="table-rows">
            {tableRows}
          </ul>
        </div>
      );
    } else if (this.props.tableSize === "medium") {
      return (
        <div>
        </div>
      );
    } else {
      return (
        <div>
        </div>
      );
    }
  }
});

module.exports = Table;
