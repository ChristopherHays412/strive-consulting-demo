'use strict';

var React = require('react/addons');
var ReactDOM = require('react-dom');
var Playground = require('component-playground');
var componentExample = require("component-playground/examples/component.example");

var Index = React.createClass({
  render() {
    return (
      <div className="component-documentation">
        <Playground codeText={componentExample} scope={{React: React}}/>
      </div>
    );
  }
});

export default Index;
