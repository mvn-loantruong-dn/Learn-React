import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Circle from './Circle';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'home',
    };
  }

  handleChangePage(page) {
    console.log(page);
    this.setState({
      page
    });
  }

  render() {
    const { page }  = this.state;
    return (
      <>
      <Header></Header>
      <main className="page-main flex-centered">
        <div className="container">
            <div className="tabs flex-centered">
              <button className="tab-button" onClick={() => this.handleChangePage('home')}>Page Home</button>
              <button className="tab-button" onClick={() => this.handleChangePage('about')}>Page About</button>
            </div>
            {(page === 'home') && 
                <div className="tab-content flex-space-between">
                  <Circle width="100px" height="100px" number="30"></Circle>
                  <Circle width="100px" height="100px" number="40"></Circle>
                  <Circle width="100px" height="100px" number="50"></Circle>
              </div>
              }
            {(page === 'about') &&
            <div className="tab-content flex-centered">
              <p>About page</p>
            </div>
            }
        </div>
      </main>
      <Footer></Footer>
      </>
    );
  }
}

export default App;
