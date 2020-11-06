import React, { Component } from "react";
import { connect } from "react-redux";

class Main extends Component {
  render() {
    return <React.Fragment>{this.props.children}</React.Fragment>;
  }
}
const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    //onExamplefunction: () => dispatch(examplefunction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
