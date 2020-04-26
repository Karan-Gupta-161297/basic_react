import React, { Component } from 'react';
import './Avatar.css';
import 'tachyons';
import AvatarList from './AvatarList';

class Avatar extends Component{

    constructor() {
        super();
        this.state = {
            name:"Welcome to home of Bakchodi"
        }
    }

    onchange() {
        this.setState({
            name:"U have succesfully subscribed to home of Bakchodi"
        })
    }
     
    render() {

        const avatarlistarray = [
            {
                id: 1,
                name: 'Karan',
                work: 'Frontend Developer'
            },
            {
                id: 2,
                name: 'Kartikay',
                work: 'Backend Developer'
            },
            {
                id: 3,
                name: 'Prikshit',
                work: 'Cloud Analyst'
            },
            {
                id: 4,
                name: 'Harshit',
                work: 'BigData Analyst'
            }
        ]

        const arrayavatarcard = avatarlistarray.map((avatarcard, i) => {
            return <AvatarList key={i} id={avatarlistarray[i].name} name={avatarlistarray[i].name} work={avatarlistarray[i].work} />

        })

        return (
            <div className="mainpage">
                <h1>{this.state.name}</h1>
                {arrayavatarcard}
                <button className="button" onClick={()=> this.onchange()}>Subscribe</button>
            </div>
        )
    }
}

export default Avatar;