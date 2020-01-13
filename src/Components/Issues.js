import React, { Component } from 'react'
import axios from 'axios'

class Issues extends Component {

    constructor() {
        super()
    
        this.state = {
            issuesArray : []
        }
        this.clickHandler = this.clickHandler.bind(this)
    }
    
    clickHandler(){

        // axios.get("https://api.github.com/repos/PratikVirus07/fitcode/issues")
        axios.get("https://api.github.com/repos/"+ this.props.ownerNameProps +"/"+ this.props.repoNameProps +"/issues")
        .then(response => {
            console.log(response)
            this.setState({
                issuesArray:response.data
            })
        })
        .catch(error => {
            console.log(error)
        })
    }

    render() {
        const {issuesArray} = this.state
        return (
            <div>
                <button onClick={this.clickHandler}>Show the issues</button>
                {
                    issuesArray.length ? 
                    issuesArray.map(individualIssue => <div key={individualIssue.id}>{individualIssue.title}</div>) :
                    null
                }
            </div>
        )
    }
}

export default Issues
