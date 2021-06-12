import React, { Component } from 'react'

export default class Circle extends Component {

  constructor(props){
    super(props);
    this.state = {
      count: this.props.number,
      isStarted: true,
    }
    this.interval = null;
    this.countDown = this.countDown.bind(this);
    this.startCountDown = this.startCountDown.bind(this);
    this.stopCountDown = this.stopCountDown.bind(this);
  }

  startCountDown() {
    this.countDown();
    this.setState({ isStarted: true });
  }

  stopCountDown() {
    clearInterval(this.interval);
    this.setState({ isStarted: false });
  }

  countDown() {
    this.interval = setInterval(() =>{
      this.setState((prevState) => ({count: prevState.count - 1})); 
    }, 1000)
  }

  componentDidMount() {
    this.countDown();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const styles = {
      background: '#fff',
      color: '#14181A',
      border: '2px solid #AEB5B8',
      borderRadius: '50%',
      fontSize: '30px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: this.props.width,
      height: this.props.height
    }
    return (
      <div className="flex-space-between flex-col">
        <button className="btn btn-primary mb-20" onClick={this.state.isStarted ? this.stopCountDown : this.startCountDown}>
          {this.state.isStarted ? 'Stop now' : 'Start now'}
        </button>
        <div style={styles}>
          {this.state.count}
        </div>
      </div>
    )
  }
}
