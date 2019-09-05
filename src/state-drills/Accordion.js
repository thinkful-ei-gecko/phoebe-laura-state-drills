import React from "react";

class Accordion extends React.Component {
  static defaultProps = { sections : [] };


  render() {
    const buttons = this.defaultProps.sections.map((section, index) => (
      <button key={index}> {section.title} </button>
    ));
    return <ul>
      <li>
        {this.buttons}
        <p>Section content</p>
      </li>
    </ul>
  }
}

export default Accordion;