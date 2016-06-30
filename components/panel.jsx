var React = require('react');

var Panel = React.createClass({
  render: function () {
    var panelClass = this.props.open ? "panel" : "panel closed";

    if (this.props.open) {
      return (
        <div className={panelClass}>
          <div className="panel-header group">
            <div className="panel-heading">Add a Widget</div>
            <img src="images/icon-close.png" onClick={this.props.closePanel} />
          </div>

          <form className="panel-main">
            <div className="panel-type-selection">
              <p>Choose a Widget Type</p>
              <div className="widget-types group">
                <article className="widget-type">
                  <div className="widget-name">Table</div>
                  <div><img src="images/widgettype-table.png"/></div>
                  <ul className="widget-sizes group">
                    <li>1/3 Width</li>
                    <li>2/3 Width</li>
                    <li>Full Width</li>
                  </ul>
                </article>
                <article className="widget-type">
                  <div className="widget-name">Donut Chart</div>
                  <div><img src="images/widgettype-donutchart.png"/></div>
                  <ul className="widget-sizes group">
                    <li>1/3 Width</li>
                    <li>2/3 Width</li>
                    <li>Full Width</li>
                  </ul>
                </article>
                <article className="widget-type">
                  <div className="widget-name">Bar Chart</div>
                  <div><img src="images/widgettype-barchart.png"/></div>
                  <ul className="widget-sizes group">
                    <li>1/3 Width</li>
                    <li>2/3 Width</li>
                    <li>Full Width</li>
                  </ul>
                </article>
                <article className="widget-type">
                  <div className="widget-name">Line Graph</div>
                  <div><img src="images/widgettype-linegraph.png"/></div>
                  <ul className="widget-sizes group">
                    <li>1/3 Width</li>
                    <li>2/3 Width</li>
                    <li>Full Width</li>
                  </ul>
                </article>
              </div>
            </div>

            <div className="panel-header-selection">
              <label className="panel-header-selection-label">Widget Title (30 characters max)</label>
              <input type="text"/>
              <label className="panel-header-selection-label">Widget Description (50 characters max)</label>
              <input type="text"/>
            </div>

            <div>
              <button>Add Widget</button>
              <div className="cancel">Cancel</div>
            </div>
          </form>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
});

module.exports = Panel;
