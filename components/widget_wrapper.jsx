var React = require('react'),
    Widget = require('./widget'),
    findDOMNode = require('react-dom').findDOMNode,
    PropTypes = React.PropTypes,
    ItemTypes = require('../constants').ItemTypes,
    DropTarget = require('react-dnd').DropTarget;

var widgetTarget = {
  drop: function (props, monitor, component) {
    var dragIndex = monitor.getItem().widgetIdx,
        hoverIndex = props.index;

    if (dragIndex === hoverIndex) {
      return;
    }
    props.moveWidget(dragIndex, hoverIndex);
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

var WidgetWrapper = React.createClass({
  propTypes: {
    index: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    moveWidget: PropTypes.func.isRequired,
    isOver: PropTypes.bool.isRequired
  },

  render: function () {
    var connectDropTarget = this.props.connectDropTarget,
        isOver = this.props.isOver,
        width;


    return connectDropTarget(
      <div style={{
        position: 'relative'
      }}>
        <Widget index={this.props.index}
                type={this.props.type}
                size={this.props.size}
                title={this.props.title}
                description={this.props.description} />
        {isOver &&
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            zIndex: 100,
            opacity: 0.5,
            backgroundColor: 'yellow'
          }}></div>
        }
      </div>
    );
  }
});

module.exports = DropTarget(ItemTypes.WIDGET, widgetTarget, collect)(WidgetWrapper);
