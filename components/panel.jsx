var React = require('react');

var Panel = React.createClass({
  render: function () {
    return (
      <div>
        <div className="panel-header">
          <div>Add a Widget</div>
          <img src="images/icon-close.png"/>
        </div>

        <form className="panel-main">
          <div className="panel-type-selection">
            Choose a Widget Type
            <article>
              <div>Table</div>
              <div><img src="images/widgettype-table.png"/></div>
            </article>
            <article>
              <div>Donut Chart</div>
              <div><img src="images/widgettype-donutchart.png"/></div>
              <ul>
                <li>1/3 Width</li>
                <li>2/3 Width</li>
                <li>Full Width</li>
              </ul>
            </article>
            <article>
              <div>Bar Chart</div>
              <div><img src="images/widgettype-barchart.png"/></div>
              <ul>
                <li>1/3 Width</li>
                <li>2/3 Width</li>
                <li>Full Width</li>
              </ul>
            </article>
            <article>
              <div>Line Graph</div>
              <div><img src="images/widgettype-linegraph.png"/></div>
              <ul>
                <li>1/3 Width</li>
                <li>2/3 Width</li>
                <li>Full Width</li>
              </ul>
            </article>
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
  }
});

module.exports = Panel;
