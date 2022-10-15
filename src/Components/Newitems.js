import React, { Component } from 'react'


export class Newitems extends Component {
  render() {
    let {title,discription}=this.props;
    return (
      <div>
        <div className="card">
  <img src={this.props.img} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{discription}</p>
    <a href={this.props.link} className="btn btn-dark">Read more</a>
  </div>
</div>
      </div>
    )
  }
}

export default Newitems
