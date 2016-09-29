import './Button.scss'
import * as React from 'react'
import { Component, Props, HTMLAttributes } from 'react'

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement>, Props<Button> {

}

export class Button extends Component<ButtonProps, any> {
  render() {
    return <button
      id={this.props.id}
      className='ms-button'
      onClick={this.props.onClick}
      style={this.props.style}>
      {this.props.children}
    </button>
  }
}