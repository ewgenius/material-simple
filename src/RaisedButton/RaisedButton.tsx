import './RaisedButton.scss'
import * as React from 'react'
import { Component, Props, HTMLAttributes } from 'react'

export interface RaisedButtonProps extends HTMLAttributes<HTMLButtonElement>, Props<RaisedButton> {

}

export class RaisedButton extends Component<RaisedButtonProps, any> {
  render() {
    return <button
      id={this.props.id}
      className={`ms-button ms-button-raised ${this.props.className}`}
      onClick={this.props.onClick}
      style={this.props.style}>
      {this.props.children}
    </button>
  }
}