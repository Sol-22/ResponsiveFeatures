import React, { Component } from 'react';
import { ListFeatures } from 'components';
import "./styleApp.css"
import myData from '../../data/features.json';

class App extends Component {
  constructor() {
    super()
    this.state = {
      features : myData
    }
  }

  render() {
    const { features } = this.state
    return (
      <div className="App">
        <div className="container" >
          <div className="banner">
            <div className="row banner-col">
              <div className="col-xs-12 col-sm-6 col-md-4 prop-parent">
                <img className="prop" src={require('../../images/proptech2.png')}  alt="Banner" />
              </div>
              <div className="col-xs-12 col-sm-6 col-md-8 text-left vertical-align-parent">
                <div className="col-xs-12 col-sm-12 col-md-6 vertical-align-child">
                  <h4>What is Proptech?</h4>
                  <h6>Download our infographic and find out.</h6>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 vertical-align-child">
                  <button className="flat">Download Now</button>
                </div> 
              </div> 
            </div> 
          </div>   
        </div>  
        <div className="container">
          <div Class="descTitle">                
            <h1>How open banking technology can help your business</h1>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <ListFeatures features={ features } />
          </div>        
        </div>  
      </div>
    )
  }
}

export default App;
