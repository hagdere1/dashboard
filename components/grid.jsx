var React = require('react'),
    WidgetWrapper = require('./widget_wrapper'),
    PropTypes = React.PropTypes,
    ItemTypes = require('../constants').ItemTypes;

var Grid = React.createClass({
  moveWidget: function (dragIndex, hoverIndex) {
    // This is the "back end" of the drag and drop function where the
    // order of the widgets in the array are changed.
    var dragWidget = this.props.widgets[dragIndex],
        hoverWidget = this.props.widgets[hoverIndex],
        updatedWidgets = this.props.widgets.slice();

    if (dragIndex < hoverIndex) {
      // dragged widget goes after hovered-over widget
      if (hoverIndex === updatedWidgets.length-1) {
        // Splice dragged widget, push to back of array
        updatedWidgets.splice(dragIndex, 1);
        updatedWidgets.push(dragWidget);
      } else {
        var widgetsAfterHoverWidget = updatedWidgets.splice(hoverIndex + 1);
        var dragWidget = updatedWidgets.splice(dragIndex, 1);
        updatedWidgets = updatedWidgets.concat(dragWidget);
        updatedWidgets = updatedWidgets.concat(widgetsAfterHoverWidget);
      }
    } else {
      // dragged widget goes before hovered-over widget
      if (hoverIndex === 0) {
        updatedWidgets.splice(dragIndex, 1);
        updatedWidgets.unshift(dragWidget);
      } else {
        var widgetsFromDropTarget = updatedWidgets.splice(hoverIndex);
        var dragWidget = widgetsFromDropTarget.splice(widgetsFromDropTarget.indexOf(dragWidget), 1);
        updatedWidgets = updatedWidgets.concat(dragWidget);
        updatedWidgets = updatedWidgets.concat(widgetsFromDropTarget);
      }
    }

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
