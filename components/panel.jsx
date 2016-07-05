var React = require('react');

var Panel = React.createClass({
  getInitialState: function () {
    return {
      type: "",
      size: "",
      title: "",
      description: "",
      errors: []
    };
  },

  // For the full project, the method would apply to all widget types
  selectTable: function () {
    this.setState({ type: "table" });
  },

  selectSize: function (size) {
    this.setState({ size: size });
  },

  handleTitleChange: function (e) {
    this.setState({ title: e.target.value });
  },

  handleDescriptionChange: function (e) {
    this.setState({ description: e.target.value });
  },

  cancel: function () {
    this.props.closePanel();
    this.setState({
      type: "",
      size: "",
      title: "",
      description: "",
      errors: [],
    });
  },

  validateForm: function () {
    var errors = [];

    if (this.state.type === "") {
      errors.push("Please select a widget type.")
    }
    if (this.state.size === "") {
      errors.push("Please select a size.")
    }

    return errors;
  },

  submit: function (e) {
    e.preventDefault();

    var errors = this.validateForm();
    if (errors.length > 0) {
      return this.setState({ errors: errors });
    } else {
      var widget = {
        type: this.state.type,
        size: this.state.size,
        title: this.state.title,
        description: this.state.description
      };
      this.props.addWidget(widget);
      this.props.closePanel();
      this.setState({
        type: "",
        size: "",
        title: "",
        description: "",
        errors: [],
      });
    }
  },

  render: function () {
    var widgetTypeClass = this.state.type === "table" ? "widget-type type-selected" : "widget-type";

    var errors = this.state.errors.map(function (error, idx) {
      return <p className="error" key={idx}>{error}</p>;
    });


      return (
        <div id="panel">
          <div className="panel-header">
            <div className="panel-header-inner group">
              <div className="panel-heading">Add a Widget</div>
              <img src="images/icon-close.png" onClick={this.cancel} />
            </div>
          </div>

          <form className="panel-main" onSubmit={this.submit}>
            <div className="panel-main-inner">
              <div className="panel-type-selection">
                <p>Choose a Widget Type</p>
                <div className="widget-types group">
                  <article className={widgetTypeClass} onClick={this.selectTable}>
                    <div className="widget-name">Table</div>
                    <div><img src="images/widgettype-table.png"/></div>
                    <ul className="widget-sizes group">
                      <li onClick={this.selectSize.bind(this, "small")}
                          className={ this.state.size === "small" ? "size-selected" : "" }>1/3 Width</li>
                      <li onClick={this.selectSize.bind(this, "medium")}
                          className={ this.state.size === "medium" ? "size-selected" : "" }>2/3 Width</li>
                      <li onClick={this.selectSize.bind(this, "large")}
                          className={ this.state.size === "large" ? "size-selected" : "" }>Full Width</li>
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
                <label className="dashboard-header-selection-label">
                  <strong>Widget Title</strong> (30 characters max)
                </label>
                <input type="text" onChange={this.handleTitleChange} value={this.state.title}/>
                <label className="dashboard-header-selection-label">
                  <strong>Widget Description</strong> (50 characters max)
                </label>
                <textarea maxlength="50" onChange={this.handleDescriptionChange} value={this.state.description}/>
              </div>

              <div className="panel-options">
                <div>{errors}</div>
                <button>Add Widget</button>
                <div className="cancel" onClick={this.cancel}>Cancel</div>
              </div>
            </div>
          </form>
        </div>
      );

  }
});

module.exports = Panel;
