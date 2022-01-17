import './App.css';
import BackendService from '../../services//BackendService.js';
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
            <div>
                <h1>Werwolf Web</h1>
                Werwolf Web
            </div>
        );
    }
}

export default App;
