import React, { Component } from 'react'
import './immageitem.css'

export default class immageitem extends Component {
    render() {  
        return (
            <li>
                <div className="immageContainer">
                    <h2>{this.props.animal.title}</h2>
                    <p>{this.props.animal.description}</p>
                    <div className="immageContatin">
                        <img alt={this.props.animal.keyword}
                        src={this.props.animal.url}></img>
                    </div>
                </div>
            </li>
        )
    }
}
