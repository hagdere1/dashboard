var React = require('react'),
    ReactDOM = require('react-dom'),
    Grid = require('./grid'),
    Panel = require('./panel'),
    DragDropContext = require('react-dnd').DragDropContext,
    HTML5Backend = require('react-dnd-html5-backend');

var Dashboard = React.createClass({
  getInitialState: function () {
    return {
      title: "",
      widgets: [],
      titleEditable: false
    };
  },

  componentDidMount: function () {
    $('#panel').hide();
  },

  openPanel: function () {
    $("#panel").slideDown("slow", function() {});
    window.scrollTo(0,0);
  },

  closePanel: function () {
    $("#panel").slideUp("slow", function() {});
  },

  addWidget: function (widget) {
    var widgets = this.state.widgets;
    widgets.push(widget);
    this.setState({ widgets: widgets });
  },

  updateWidgetOrder: function (reorderedWidgets) {
    this.setState({ widgets: reorderedWidgets });
  },

  toggleTitleEditable: function (e) {
    e.preventDefault();
    this.setState({ titleEditable: !this.state.titleEditable });
  },

  updateDashboardTitle: function (e) {
    this.setState({ title: e.target.value });
  },

  render: function () {
    var dashboardTitle = <h1>{ this.state.title === "" ? "New Dashboard" : this.state.title }</h1>;
    if (this.state.titleEditable) {
      dashboardTitle = (
        <form onSubmit={this.toggleTitleEditable}>
          <input type="text" onChange={this.updateDashboardTitle} value={this.state.title} maxLength="30" />
        </form>
      );
    }

    return (
      <div className="container">
        <Panel open={this.state.addPanelShowing} closePanel={this.closePanel} addWidget={this.addWidget}/>
        <div className="header">
          <nav>
            <div className="nav-inner group">
              <img className="logo" src="images/logo-foodiq.png"/>
              <ul className="nav-tabs group">
                <li className="nav-tab">Nav One</li>
                <li className="nav-tab">Nav Two</li>
                <li className="nav-tab selected">Dashboards</li>
              </ul>
              <div className="user group">
                <div className="user-name">John Jones</div>
                <img className="user-icon" src="images/icon-namearrow.png"/>
              </div>
              <div className="nav-links"><a href="#">Help</a>  |  <a href="#">Contact</a></div>
            </div>
          </nav>
          <div className="spacer">
            <div className="spacer-inner">
              { this.state.title === "" ? "Dashboards" : "Dashboards / " + this.state.title }
            </div>
          </div>
        </div>

        <div className="main">
          <div className="main-header group">
            <div className="dashboard-title group">
              {dashboardTitle}
              <img onClick={this.toggleTitleEditable} src="images/icon-edit.png"/>
            </div>
            <div className="dashboard-controls group">
              <div className="dashboard-switcher">
                <p>Dashboard Switcher</p>
                <div className="dashboard-select group">
                  <div className="dashboard-select-option">{ this.state.title === "" ? "-Select a Dashboard-" : this.state.title }</div>
                  <img src="images/dropdown-arrow.png" />
                </div>
              </div>
              <div className="new-widget-button" onClick={this.openPanel}>
                <div className="new-widget-button-icon"><img src="images/icon-add.png"/></div>
                <div className="new-widget-button-text">Add a New Widget</div>
              </div>
            </div>
          </div>

          <div className="rule"></div>

          <div className="widgets group">
            <Grid widgets={this.state.widgets} updateWidgetOrder={this.updateWidgetOrder} />
            <div className="new-widget" onClick={this.openPanel}>
              <img src="images/icon-add-large.png"/>
              Add a New Widget
            </div>
          </div>
        </div>

        <div className="footer">
          <div className="copyright">© 2016 FoodIQ  |  © Energy Metrics, LLC</div>
        </div>
      </div>
    );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(
    React.createElement(DragDropContext(HTML5Backend)(Dashboard)),
    document.getElementById("content")
  );
});
