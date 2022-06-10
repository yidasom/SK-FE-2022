import './app.css';
import { Component } from 'react';
import { RandomCountUp, ReloadButton } from '../components';

export class App extends Component {
  state = {
    reloadKey: 0,
  };

  handleChangeReloadKey = (e) => {
    console.log('call reload key');

    this.setState({
      reloadKey: this.state.reloadKey + 1,
    });
  };

  render() {
    return (
      <div className="app">
        <ReloadButton onReload={this.handleChangeReloadKey}>
          RELOAD
        </ReloadButton>
        <RandomCountUp key={this.state.reloadKey} min={40} max={80} />
      </div>
    );
  }
}
