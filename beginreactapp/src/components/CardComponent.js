import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default class CardComponent extends Component {
  render() {
      const {name,surname,job,salary} = this.props;
    return (
        <Card className="my-3">
            <Card.Header>Personnel</Card.Header>
            <Card.Body>
            <Card.Title>{name} {surname}</Card.Title>
            <Card.Text>
                <div>Job : {job}</div>
                <div>Salary : {salary}</div>
            </Card.Text>
            <Button variant="primary">Details</Button>
            </Card.Body>
      </Card>
    )
  }
}
CardComponent.defaultProps = {
  name : "not found",
  surname : "not found",
  salary : "not found",
  job : "not found"
}
