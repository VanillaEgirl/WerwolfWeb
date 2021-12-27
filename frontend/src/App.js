import './App.css';
import BackendService from './BackendService.js';
import React from "react";

class App extends React.Component {

    constructor(props) {
        super(props);
        BackendService.init('http://localhost:8080/');
        this.state = {
            error: null,
            isLoaded: false,
            allroles: {}
        };
    }

    componentDidMount() {
        this.getRoles();
        this.addRole();
    }

    getRoles = () => {
        BackendService.get("allroles")
            .then((result) => {
                this.setState({
                    isLoaded: true,
                    allroles : result
                });
                console.log(result);
            })
    }

    addRole = () => {
        BackendService.post("addrole", {role: "Gurkenschäler"})
            .then(() => {
                console.log("added role");
            });
    }

    render() {
        return (
            <div className="App">
                <header className="App-header p-5">
                    <div>asdf</div>
                </header>
            </div>
        );
    }
}

export default App;
