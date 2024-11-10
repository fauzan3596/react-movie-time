import React from 'react'
import { CiFaceFrown } from "react-icons/ci";

function ErrorPage(props) {
    const {type} = props;
    
    return (
        <div className="d-flex flex-column justify-content-center align-items-center" 
        style={type === 'search' ? { height: "74.2vh" } : {height: "87.2vh"}}>
            <CiFaceFrown className='fw-bold mb-3' style={{ fontSize: "4rem" }} />
            <h6>{type == 'search' ? "Sorry, we couldn't find any results." : 'You have no favorite movies yet. Please add some movies first.' }</h6>
        </div>
    )
}

export default ErrorPage