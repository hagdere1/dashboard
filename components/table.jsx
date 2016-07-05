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
    if (this.props.size === "small") {
      var colOneCells = this.smallTableData.map(function (country, idx) {
        return <div className="cell" key={idx}>{country["Country"]}</div>;
      });

      var colTwoCells = this.smallTableData.map(function (country, idx) {
        return <div className="cell" key={idx}>{country["Most Consumed"]}</div>;
      });

      return (
        <div className="table small">
          <div className="table-header group">
            <div className="table-info">
              <h2 className={this.props.title === "" ? "table-name info-blank" : "table-name"}>
                {this.props.title === "" ? "Title" : this.props.title}
              </h2>
              <p className={this.props.description === "" ? "table-description info-blank" : "table-description"}>
                {this.props.description === "" ? "Description" : this.props.description}
              </p>
            </div>
            <div className="table-icons">
              <img className="table-icon-settings" src="images/icon-settings-copy.png"/>
              <img src="images/icon-move-copy.png"/>
            </div>
          </div>
          <div className="cols group">
            <div className="col col-1-small">
              <div className="cell col-header group">
                <div className="col-header-first">Country</div>
                <img className="col-header-first-icon" src="images/icon-table-sort-down.png"/>
              </div>
              {colOneCells}
            </div>
            <div className="col col-2-small">
              <div className="cell col-header">Most Consumed</div>
              {colTwoCells}
            </div>
          </div>
        </div>
      );
    } else if (this.props.size === "medium") {
      var colOneCells = this.mediumTableData.map(function (country, idx) {
        return <div className="cell" key={idx}>{country["Country"]}</div>;
      });

      var colTwoCells = this.mediumTableData.map(function (country, idx) {
        return <div className="cell" key={idx}>{country["Most Consumed"]}</div>;
      });

      var colThreeCells = this.mediumTableData.map(function (country, idx) {
        return <div className="cell" key={idx}>{country["Type"]}</div>;
      });

      var colFourCells = this.mediumTableData.map(function (country, idx) {
        return <div className="cell" key={idx}>{country["Percentage of Diet"]}</div>;
      });

      return (
        <div className="table medium">
          <div className="table-header group">
            <div className="table-info">
              <h2 className={this.props.title === "" ? "table-name info-blank" : "table-name"}>
                {this.props.title === "" ? "Title" : this.props.title}
              </h2>
              <p className={this.props.description === "" ? "table-description info-blank" : "table-description"}>
                {this.props.description === "" ? "Description" : this.props.description}
              </p>
            </div>
            <div className="table-icons">
              <img className="table-icon-settings" src="images/icon-settings-copy.png"/>
              <img src="images/icon-move-copy.png"/>
            </div>
          </div>
          <div className="cols group">
            <div className="col col-1-medium">
              <div className="cell col-header group">
                <div className="col-header-first">Country</div>
                <img className="col-header-first-icon" src="images/icon-table-sort-down.png"/>
              </div>
              {colOneCells}
            </div>
            <div className="col col-2-medium">
              <div className="cell col-header">Most Consumed</div>
              {colTwoCells}
            </div>
            <div className="col col-3-medium">
              <div className="cell col-header">Type</div>
              {colThreeCells}
            </div>
            <div className="col col-4-medium">
              <div className="cell col-header">Percentage of Diet</div>
              {colFourCells}
            </div>
          </div>
        </div>
      );
    } else {
      var colOneCells = this.largeTableData.map(function (continent, idx) {
        return <div className="cell" key={idx}>{continent["Continent"]}</div>;
      });

      var colTwoCells = this.largeTableData.map(function (continent, idx) {
        return <div className="cell" key={idx}>{continent["Food 1"]}</div>;
      });

      var colThreeCells = this.largeTableData.map(function (continent, idx) {
        return <div className="cell" key={idx}>{continent["Food 2"]}</div>;
      });

      var colFourCells = this.largeTableData.map(function (continent, idx) {
        return <div className="cell" key={idx}>{continent["Food 3"]}</div>;
      });

      var colFiveCells = this.largeTableData.map(function (continent, idx) {
        return <div className="cell" key={idx}>{continent["Food 4"]}</div>;
      });

      return (
        <div className="table large">
          <div className="table-header group">
            <div className="table-info">
              <h2 className={this.props.title === "" ? "table-name info-blank" : "table-name"}>
                {this.props.title === "" ? "Title" : this.props.title}
              </h2>
              <p className={this.props.description === "" ? "table-description info-blank" : "table-description"}>
                {this.props.description === "" ? "Description" : this.props.description}
              </p>
            </div>
            <div className="table-icons">
              <img className="table-icon-settings" src="images/icon-settings-copy.png"/>
              <img src="images/icon-move-copy.png"/>
            </div>
          </div>
          <div className="cols group">
            <div className="col col-1-large">
              <div className="cell col-header group">
                <div className="col-header-first">Continent</div>
                <img className="col-header-first-icon" src="images/icon-table-sort-down.png"/>
              </div>
              {colOneCells}
            </div>
            <div className="col col-2-large">
              <div className="cell col-header">Food 1</div>
              {colTwoCells}
            </div>
            <div className="col col-3-large">
              <div className="cell col-header">Food 2</div>
              {colThreeCells}
            </div>
            <div className="col col-4-large">
              <div className="cell col-header">Food 3</div>
              {colFourCells}
            </div>
            <div className="col col-5-large">
              <div className="cell col-header">Food 4</div>
              {colFiveCells}
            </div>
          </div>
        </div>
      );
    }
  }
});

module.exports = Table;
