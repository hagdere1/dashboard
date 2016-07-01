var React = require('react'),
    Table = require('./table');

var Widget = React.createClass({
  render: function () {
    if (this.props.type === "table") {
      return (
        <div className="widget">
          <Table size={this.props.size} title={this.props.title} description={this.props.description}/>
        </div>
      );
    }
  }
});

module.exports = Widget;
