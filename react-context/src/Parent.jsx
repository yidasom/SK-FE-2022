import React, { Component } from 'react';
import { Context } from './App';
import Child from './Child';

export default class Parent extends Component {
  render() {
    return (
      <Context.Consumer>
        {/* render props */}
        {(value) => {
          console.log(value);
          return (
            <div className="parent">
              <Child>{value.name}</Child>
            </div>
          );
        }}
      </Context.Consumer>
    );
  }
}
