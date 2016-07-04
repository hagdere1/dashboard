var React = require('react'),
    WidgetWrapper = require('./widget_wrapper'),
    PropTypes = React.PropTypes,
    ItemTypes = require('../constants').ItemTypes;

var Grid = React.createClass({
  moveWidget: function (dragIndex, hoverIndex) {
    debugger
    var dragWidget = this.props.widgets[dragIndex],
        hoverWidget = this.props.widgets[hoverIndex],
        updatedWidgets = this.props.widgets.slice();

    updatedWidgets[dragIndex] = hoverWidget;
    updatedWidgets[hoverIndex] = dragWidget;

    this.props.updateWidgetOrder(updatedWidgets);
  },

  render: function () {
    var widgets = this.props.widgets.map(function (widget, idx) {
      return <WidgetWrapper key={idx}
                            index={idx}
                            type={widget.type}
                            size={widget.size}
                            title={widget.title}
                            description={widget.description}
                            moveWidget={this.moveWidget} />;
    }.bind(this));

    return (
      <div className="widgets group">
        {widgets}
      </div>
    );
  }
});

module.exports = Grid;
