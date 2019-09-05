import React from "react";

class Accordion extends React.Component {
  static defaultProps = { 
    sections : [] 
  };

  state = {
    activeSectionIndex: null
  }

  //moved this outside of the renderAccordionHtml function to be multiline, so that we can tell it what to do if we click on a button that already has a <p> open
  handleButtonClicked = (index) => {
    if (index === this.state.activeSectionIndex) {
      this.setState({
        activeSectionIndex: null
      })
    } else {
      this.setState({
        activeSectionIndex: index
      })
    }
  }

  //moved this outside the render function because we needed a multiline function to accomodate the <p> element. I can't think of a way to insert a p element within the same <li> div as the button other than adding it within the function
  renderAccordionHtml = (section, index, activeSectionIndex) => {
    return (
    <li>
      <button key={index} onClick={this.handleButtonClicked(index)}>
        {section.title}
      </button>
      {(activeSectionIndex === index) && (<p class='section-content'>{section.content}</p>)}
    </li>
    )
  }  

  render() {
    const sections = this.props.sections
    // const buttons = this.props.sections.map((section, index) => (
    //   <button key={index}> {section.title} </button>
    // ));
    return  (
      <ul>
        {sections.map((section, index) => {
          return this.renderAccordionHtml(section, index, this.state.activeSectionIndex)
        })}
      </ul>
    )
  }
}

export default Accordion;