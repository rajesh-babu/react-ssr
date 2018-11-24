import React, { Component, Fragment } from 'react';

import homeImg from '@assets/images/home.png'; // example of import assets image

class Comp1 extends Component {

  render() {
    const { titleimage, title, desc, buttontext } = this.props.data;
    return (
      <div className="comp1">
        <div className="home-img">
            <img src={titleimage} alt="Home" />
            <h1 className="title">{title}</h1>
            <div>{desc}</div>
            <button className="btn">{buttontext}</button>
        </div>        
      </div>
    );
  }
}

export default Comp1
