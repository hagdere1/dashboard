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


            <div className="dashboard-header-selection">
              <p>Widget Header (Optional)</p>
              <label className="dashboard-header-selection-label"><strong>Widget Title</strong> (30 characters max)</label>
              <input type="text" className="title"/>
              <label className="dashboard-header-selection-label"><strong>Widget Description</strong> (50 characters max)</label>
              <input type="text" className="description"/>
            </div>

            <div className="panel-options">
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
