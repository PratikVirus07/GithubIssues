import React, { Component } from 'react'
 import Issues from './Issues'
//import axios from 'axios'

class Form extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             ownerName : "",
             repoName : "",
        }
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
    

    render() {

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

                <Issues {...this.state}/>

            </div>
            
        )
    }
}

export default Form
