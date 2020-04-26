import React from 'react';

const AvatarList = (props) => {

    return (

        <div className="avatarstyle ma4 bg-light-gray dib pa3 tc grow shadow-5">
            <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="Avatar"></img>
            <h1>{props.name}</h1>
            <p>{props.work}</p>
            </div>   
    )
}

export default AvatarList;