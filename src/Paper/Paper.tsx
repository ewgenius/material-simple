import * as React from 'react'
import { Component, Props, HTMLAttributes } from 'react'

export interface PaperProps extends HTMLAttributes<Paper>, Props<Paper> {
  zDepth?: number
}

export class Paper extends Component<PaperProps, {}> {
  static defultProps = {
    zDepth: 1
  }

  render() {
    return <div
      id={this.props.id}
      style={this.props.style}
      className={`ms-paper ${this.props.className}`}>
      {this.props.children}
    </div>
  }
}
