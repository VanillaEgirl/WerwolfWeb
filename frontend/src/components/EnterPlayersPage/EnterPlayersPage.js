import React from "react";

class RoleSelectionPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            players: ["none"],
            inputfield: ""
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <div className="Enter Players Page">
                <h1>Enter Players</h1>
                <form>
                    <label htmlFor="name">Name</label><br/>
                    <input type="text" id="name" name="name" onChange={event => this.setState({inputfield: event.target.value})}/>
                    <button onClick={() => this.addPlayer()}>
                        Hinzufügen
                    </button>
                </form>
                <h2>
                    {this.getLastPlayer()}
                </h2>
            </div>
        );
    }

    addPlayer() {
        this.setState({players: this.state.players.concat(this.state.inputfield)});
    }

    getLastPlayer() {
        let players = this.state.players;
        return players[players.length - 1];
    }
}

export default RoleSelectionPage;
