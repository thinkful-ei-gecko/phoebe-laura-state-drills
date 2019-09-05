import React from 'react';

class RouletteGun extends React.Component {
  static defaultProps = {
    bulletInChamber: 8
  }

  state = {
    chamber: null,
    spinningTheChamber: false
  };

  componentDidMount = () => {
    console.log('componentDidMount')
  }

  componentWillUnmount = () =>  {
    clearTimeout(this.timeout)
  }

  handleClick = () => {
    this.setState({ spinningTheChamber: true })
    this.timeout = setTimeout(() => {
      this.setState({
        chamber: Math.floor(Math.random() * 8),
        spinningTheChamber: false
      })
    }, 2000)
  }

  renderMessage = () => {
    if (this.state.spinningTheChamber) {
      return 'spinning the chamber and pulling the trigger! ....'
    } else if (this.state.chamber === this.props.bulletInChamber) {
      return 'BANG!!!!'
    } else {
      return 'you\'re safe!'
    }
  }

  render() {
    return (
      <div>
        <p>{this.renderMessage()}</p>
        <button onClick={this.handleClick}>
            Pull the trigger!
        </button>
      </div>
    )
  }}

export default RouletteGun;