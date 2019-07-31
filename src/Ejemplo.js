import React, { Component } from 'react'

const target = {
    a: 1,
    b: 2,
    c: 3
  };

  const handler = {
    get: function(target, name) {
      return (
        name in target ? target[name] : 42
      );
    }
  };



  const handler1 = {
    apply: function(target, thisArg, argumentsList) {
      return target(argumentsList[0], argumentsList[1]) * 10;
    }
  };

export class Ejemplo extends Component {

    constructor(props) {
        super(props);
      
      this. proxy = new Proxy(target, handler);
      this. proxy1 = new Proxy(this.sum, handler1);
    }

     sum(a, b) {
      return a + b;
    }

    render() {
      
        return (
            <div>
                <p> {  this.proxy.a }</p>
                <p> {  this.proxy.b }</p>
                <p> {  this.proxy.c }</p>
                <p> {  this.proxy.meaningOfLife }</p>

                <p> { this.proxy1(1, 2) }</p>

            </div>
        )
    }
}

export default Ejemplo