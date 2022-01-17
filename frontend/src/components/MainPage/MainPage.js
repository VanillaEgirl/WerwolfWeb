import React from "react";
import './MainPage.css';
import werwolfLogo from "../../img/WerwolfLogo.png";

class MainPage extends React.Component {
    render() {
        return (
            <div className="center-block">
                <div className="row justify-content-center mb-5">
                    <img className="werwolf-logo" src={werwolfLogo} />
                </div>
                <div className="row justify-content-center">
                    <button className="button">Neues Spiel</button>
                </div>
            </div>
        );
    }
}

export default MainPage;
