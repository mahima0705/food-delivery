import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            userInfo:{
                name: "Dummy",
                location: "Default",
            }
        };

    }

    async componentDidMount(){
        const data  = await fetch("https://api.github.com/users/mahima0705");
        const json = await data.json();

        this.setState({
            userInfo: json,
        });
    }
    render(){

        const{name, location} = this.state.userInfo;

        return(
            <div className="user-card">

                <h3>Name: {name}</h3>
                <h3>Location: {location}</h3>
                <h4>Contact : @mahima0705</h4>
            </div>
        );
    }
}

export default UserClass;