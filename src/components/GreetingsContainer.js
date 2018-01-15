import React, { PropTypes, Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';
import Greeting from './Greeting';

const GreetingsContainer = React.createClass({
  propTypes: {
  },
  handleKeyPress(e) {
    const { target: { value } } = e;
    if (e.key === 'Enter') {
    }
  },
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <input
          id="greeting"
          onKeyPress={this.handleKeyPress}
        />
      </View>
    );
  },
}
