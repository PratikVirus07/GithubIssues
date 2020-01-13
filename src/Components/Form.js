import React, { Component } from 'react'
// import Issues from './Issues'
import axios from 'axios'

class Form extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             ownerName : "PratikVirus07",
             repoName : "Fitcode",
             issuesArray : []
        }
        this.clickHandler = this.clickHandler.bind(this)
    }

    giveOwnerName = (event) => {
        this.setState({
            ownerName:event.target.value,
        })
    }

    giveRepoName = (event) => {
        this.setState({
            repoName:event.target.value
        })
    }
    
    clickHandler(){

         //axios.get("https://api.github.com/repos/PratikVirus07/fitcode/issues")
            axios.get("https://api.github.com/repos/"+ this.state.ownerName +"/"+ this.state.repoName +"/issues")
        .then(response => {
            console.log(response)
            this.setState({
                issuesArray:response.data
            })
            console.log(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    }

    render() {
        const {issuesArray} = this.state
        return (
            <div>
                <form>
                    <div>
                        <div>
                            {/* <label>Owner Name in GitHub</label> */}
                            <input type='text' value={this.state.ownerName} onChange={this.giveOwnerName} placeholder="Owner Name in Github" className = "inputFields"></input>
                        </div>
                        <div>
                            {/* <label>Repository Name in GitHub</label> */}
                            <input type='text' value={this.state.repoName} onChange={this.giveRepoName} placeholder="Repository Name in Github" className = "inputFields"></input>
                        </div>
                    </div>
                </form>
                <div>
                    <button onClick={this.clickHandler} className="issueButton">Show the issues</button>
                    {
                        issuesArray.length ? 
                        issuesArray.map(individualIssue => 
                            <div key={individualIssue.id} className="individualIssueCard">
                                <div><span className="cardMains">Issue Title : </span>{individualIssue.title}</div>
                                <div><span className="cardMains"> Created By : </span>{individualIssue.user.login}</div>
                                <div><span className="cardMains">Issue Description : </span>{individualIssue.body}</div>
                            </div>) 
                        :null
                    }
                </div>
            </div>
            
        )
    }
}

export default Form
