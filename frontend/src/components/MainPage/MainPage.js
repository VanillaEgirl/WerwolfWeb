import React from "react";
import './MainPage.css';
import werwolfLogo from "../../img/WerwolfLogo.png";
import BackendService from '../../services//BackendService.js';

class MainPage extends React.Component {
    constructor(props) {
        super(props);
        BackendService.init('http://localhost:8080/');
    }

    render() {
        return (
            <div className="center-block">
                <div className="row justify-content-center mb-5">
                    <img className="werwolf-logo" src={werwolfLogo} />
                </div>
                <div className="row justify-content-center">
                    <button className="button" onClick={this.newGameOnClick}>Neues Spiel</button>
                </div>
            </div>
        );
    }

    newGameOnClick = () => {
         this.createNewGame().then((gameId) => {
            this.redirectToRoleselection(gameId);
         });
    }

    createNewGame = () => {
        return BackendService.post("newgame");
    }

    redirectToRoleselection = (gameId) => {
        window.location.href = "/setup/roleselection?gameId=" + gameId;
    }
}

export default MainPage;
