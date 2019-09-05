import React from "react";

class Accordion extends React.Component {
  static defaultProps = { 
    sections : [] 
  };

  state = {
    activeSectionIndex: null
  }

  // moved this outside of the renderAccordionHtml function so that it can be multiline. This is so we can provide the conditional (that it should reset activeSectionIndex to null so that when the conditional within the renderAccordionHtml runs (and the page rerenders) they will remove the <p> from the DOM) 
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

  //moved this outside the render function because we needed a multiline function to accomodate the <p> element. I can't think of a way to optionally insert a <p> element within the same <li>element as the button other than adding it within the function
  renderAccordionHtml = (section, index) => {
    return (
    <li>
      {/* I think this is maybe part of what they were talking about in the second workshop today... if we omit the () => portion from on-click, it enters in an infinite loop because it calls handleButtonClicked, which rerenders the page, which puts button on again which reruns handleButtonClicked... etc. We can't just put this.handleButtonClicked either because we need to pass the index in   */}
      <button key={index} onClick={() => this.handleButtonClicked(index)}>
        {section.title}
      </button>
      {(this.state.activeSectionIndex === index) && (<p class='section-content'>{section.content}</p>)}
    </li>
    )
  }  

  render() {
    const sections = this.props.sections
    //Just left this here so you know what happened to it in case you compare it to old code 
    // const buttons = this.props.sections.map((section, index) => (
    //   <button key={index}> {section.title} </button>
    // ));
    return  (
      <ul>
        {sections.map((section, index) => {
          return this.renderAccordionHtml(section, index)
        })}
      </ul>
    )
  }
}

export default Accordion;