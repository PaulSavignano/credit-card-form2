import React, { Component } from 'react'
import Payment from 'payment'
import { Row, Col, FormGroup, ControlLabel, Button, Alert } from 'react-bootstrap'
import { Bert } from 'meteor/themeteorchef:bert'

export class CreditCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      number: null,
      exp_month: null,
      exp_year: null,
      cvc: null,
      token: null,
    }
  }
  render() {
    return(
      <div className="CreditCard">CreditCard</div>
    )
  }
}

CreditCard.propTypes = {}
