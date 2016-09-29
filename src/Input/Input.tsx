import './Input.scss'
import * as React from 'react'
import { Component, Props, HTMLAttributes } from 'react'

export interface InputProps extends HTMLAttributes<HTMLInputElement>, Props<Input> {
  label?: string
}

export class Input extends Component<InputProps, any> {
  render() {
    return <div
      id={this.props.id}
      className={`ms-input ${this.props.className}`}
      style={this.props.style}>
      {this.props.label ? <label className={this.props.value ? '' : 'floating'}>{this.props.label}</label> : null}
      <input type={this.props.type} onChange={this.props.onChange} value={this.props.value} />
    </div>
  }
}