import UserClass from "./UserClass";
import {Component} from "react";

class About extends Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <div>
                <h1>About us</h1>
                <p>This is Grubk - Food Ordering Website</p>
                <UserClass />
            </div>
        );
    }
}

export default About;