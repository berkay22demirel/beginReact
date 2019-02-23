import React, { Component } from 'react'

export default class CardComponent extends Component {
  state = {
    isVisible : false
  }

  onClickEvent =(e)=> {
    this.setState({
      isVisible : !this.state.isVisible
    })
  }


  render() {
      const {name,surname,job,salary} = this.props;
    return (
        <div className="card my-3">
            <div className="card-header" onClick = {this.onClickEvent} style={{cursor : "pointer"}}>{name} {surname}</div>
            {this.state.isVisible ? 
              <div className="card-body">
                <div className="card-text">
                    <div>Job : {job}</div>
                    <div>Salary : {salary}</div>
                </div>
                  <div className="btn btn-outline-success mt-2">Details</div>
            </div> : null}
      </div>
    )
  }
}
CardComponent.defaultProps = {
  name : "not found",
  surname : "not found",
  salary : "not found",
  job : "not found"
}
