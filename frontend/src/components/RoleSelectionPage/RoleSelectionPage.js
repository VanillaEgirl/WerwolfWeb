import React from "react";
import BackendService from '../../services//BackendService.js';

class RoleSelectionPage extends React.Component {
    constructor(props) {
        super(props);
        BackendService.init('http://localhost:8080/');
    }

    componentDidMount() {
        this.getRoles();
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

    render() {
        return (
            <div className="Role Selection Page">
                <h1>Role Selection Page</h1>
                <span>Role Selection Page Content</span>
            </div>
        );
    }
}

export default RoleSelectionPage;
