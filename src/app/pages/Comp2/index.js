import React, { Component, Fragment } from 'react';

class Comp2 extends Component {

  render() {
    const { titleimage, title, desc, buttontext } = this.props.data;
    return (
      <div className="comp2">
        <div>
            <h1 className="title">{title}</h1>
            <div>
              <div className="sub-section">
                <h3>Webpack</h3>
                <div>It uses the webpack to bundle the JS and CSS files.</div>
              </div>
              <div className="sub-section">
                <h3>Express JS</h3>
                <div>It uses the Express to render the react output from server side.</div>
              </div> 
              <div className="sub-section">
                <h3>Redux</h3>
                <div>It uses the Redux to manage the state of the application.</div>
              </div>                
          </div>
        </div>        
      </div>
    );
  }
}

export default Comp2
