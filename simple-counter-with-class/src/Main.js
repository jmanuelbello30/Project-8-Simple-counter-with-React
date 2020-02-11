import React, { Component } from 'react';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      seconds: 0,
      intervalId: 0
    }
  }

  initInterval = () => {
    let auxId = setInterval(() => {
      this.setState({ seconds: this.state.seconds + 1 });
    }, 1000);

    this.setState({ intervalId: auxId });
  }

  handleStop = () => {
    clearInterval(this.state.intervalId);
  }

  handleResume = () => {
    this.initInterval()
  }

  handleReset = () => {
    this.setState({ seconds: 0 });
  }

  componentDidMount() {
    this.initInterval();
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="cardBox">
            <div className="card text-white bg-dark mb-3">
              <div className="card-header"><h1>Simple Counter with React</h1></div>
              <div className="card-body">
                <i className="fas fa-clock"><h1 id="title">{this.state.seconds}</h1></i>
              </div>
              <div className="card-footer text-muted">
                <div className="firstButton"><button onClick={this.handleStop} type="button" className="btn btn-warning">Stop</button></div>
                <div className="secondButton"><button onClick={this.handleResume} type="button" className="btn btn-success">Resume</button></div>
                <div className="thirdButton"><button onClick={this.handleReset} type="button" className="btn btn-danger">Reset</button></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
    
    export default Main;
    
