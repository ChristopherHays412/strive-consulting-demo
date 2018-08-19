import React, { Component } from 'react';
import './App.css';
import {CopyToClipboard} from 'react-copy-to-clipboard';

import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live';

//import { CSSTransitionGroup } from 'react-transition-group'

const componentClassExample = (`
  class Dropdown extends React.Component {
    constructor() {
      super();
      this.handleChange = this.handleChange.bind(this);
      this.state = {
        selectValue:'Dropdown Menu'
      };
    }

    handleChange(event){
      this.setState({selectValue:event.target.value});
    }

    render() {
      return (
        <div>
          <select style={{position: 'relative', display: 'inline-block', padding: '12px', margin: '5px 0 10px 0', fontSize: '1rem',
          fontFace: 'Latos', width: '300px', borderRadius: '5px'}}
            value={this.state.selectValue}
            onChange={this.handleChange}
          >
            <option value="default">Dropdown Menu</option>
            <option value="Selection One">Selection One</option>
            <option value="Selection Two">Selection Two</option>
            <option value="Selection Three">Selection Three</option>
            <option value="Selection Four">Selection Four</option>
            <option value="Selection Five">Selection Five</option>
          </select>

        </div>
      );
    }
  }
`).trim()

class App extends Component {

  render() {

    function refreshPage(){
      window.location.reload();
    }

    return (
      <div className="App">
        <LiveProvider code={componentClassExample}>
          <LivePreview />
          <LiveEditor />
          <LiveError />
        </LiveProvider>
        <CopyToClipboard text='This is the revised javascript copied to clipboard'>
         <button>Copy Revised Code</button>
       </CopyToClipboard>
       &nbsp;<button onClick={refreshPage}>Reset Code</button>
      </div>
    );
  }
}

export default App;
