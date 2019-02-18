import React, { Component } from "react";
import * as Constant from "../asset/icon.js";
import FloatingLabel, {
  floatingStyles,
  focusStyles,
  inputStyles,
  labelStyles
} from "floating-label-react";
import collection from "materialize-css";

class StatUserButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "User Account State:",
      nbGolds: 2,
      nbCards: 0
    };
  }

  actionOnClickButton = () => {
    //TODO  to add refresh of state
    this.setState({ text: "clicked StateButton" });
  };

  //recup prix de la carte en cours
  //
  render() {
    return (
      <div className="row card-panel">
        <div className="row text-align center">
          <button
            // disabled={!this.props.previousButtonState}
            className="waves-effect waves-light"
            //size =
            onClick={this.actionOnClickButton}
          >
            {this.state.text}
            <p className="1"> You have: {this.state.nbGolds} golds</p>
            <p className="2"> You have: {this.state.nbCards} cards</p>
          </button>
        </div>
      </div>
    );
  }
}

//function MyRadioGroupe() {}
//<h1>{this.state.text}</h1>
//<FloatingLabel/>
export default StatUserButton;
