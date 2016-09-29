import './FlatButton.scss'
import * as React from 'react'
import { Component, Props, HTMLAttributes } from 'react'

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement>, Props<FlatButton> {

}

export class FlatButton extends Component<ButtonProps, any> {
  render() {
    return <button
      id={this.props.id}
      className={`ms-button ms-button-flat ${this.props.className}`}
      onClick={this.props.onClick}
      style={this.props.style}
      >
      {this.props.children}
    </button>
  }
}