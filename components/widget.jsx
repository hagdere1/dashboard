var React = require('react'),
    Table = require('./table'),
    ItemTypes = require('../constants').ItemTypes,
    PropTypes = React.PropTypes,
    DragSource = require('react-dnd').DragSource;

var widgetSource = {
  beginDrag: function (props) {
    console.log('begin dragging widget', props);
    return { widgetIdx: props.index };
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

var Widget = React.createClass({
  propTypes: {
    index: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired
  },

  render: function () {
    var connectDragSource = this.props.connectDragSource,
        isDragging = this.props.isDragging,
        index = this.props.index;

    if (this.props.type === "table") {
      return connectDragSource(
        <div className="widget">
          <Table size={this.props.size}
                 title={this.props.title}
                 description={this.props.description} />
        </div>
      );
    }
  }
});

module.exports = DragSource(ItemTypes.WIDGET, widgetSource, collect)(Widget);
