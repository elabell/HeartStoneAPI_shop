import React, { Component } from "react";
import * as Constant from "../asset/icon.js";
import ApolloClient from "apollo-boost";
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
      dataUser: "",
      itemsUser: "",
      nbGolds: 0,
      nbCards: 0
    };
    this.getFetchUser("23");
    this.getFetchInventoryUser("23");
  }

  getFetchUser(idUser) {
    fetch("https://api.coopuniverse.fr/user/" + idUser) //notre fetch from Json de API
      .then(response => response.json())
      //.then(data => (this.setState.dataUser = data));
      .then(data =>
        this.setState({
          dataUser: data,
          nbGolds: data.data.user.Money
        })
      );

    /*  .then(data =>
        this.setState({
          dataUser: data
        })
      );
      */
  }

  getFetchInventoryUser(idUser) {
    fetch("https://api.coopuniverse.fr/inventory/" + idUser) //notre fetch from Json de API
      .then(response => response.json())
      //.then(data => (this.setState.itemsUser = data) );
      .then(data =>
        this.setState({
          itemsUser: data,
          nbCards: data.data.inventory.inventory.length
        })
      );

    /* .then(data =>
        this.setState({
          itemsUser: data
        })
      );
      */
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
