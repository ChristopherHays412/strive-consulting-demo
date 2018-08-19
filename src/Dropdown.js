import React from 'react';

var dropdownStyle = {
  position: 'relative',
  display: 'inline-block',
  padding: '12px',
  margin: '10px',
  fontSize: '1rem',
  fontFace: 'Latos',
  width: '300px',
  borderRadius: '5ox'
}

export default class Dropdown extends React.Component {
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
        <select style={dropdownStyle}
          value={this.state.selectValue}
          onChange={this.handleChange}
        >
          <option value="">Dropdown Menu</option>
          <option value="Pineapple">Pineapple</option>
          <option value="Cherry">Cherry</option>
          <option value="Banana">Banana</option>
          <option value="Pear">Pear</option>
          <option value="Date">Date</option>
        </select>

      </div>
    );
  }
}
