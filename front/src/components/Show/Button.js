import React from 'react';

const Button = (props) => {
  const Content = (props) => {
    return (
    <>
      {props.label}
    </>
    )
  }

  if (props.label == "未学習単語") {
    return (
      <div className="notyet-wordtest-button wordtest-button">
        <Content label={props.label} />
      </div>
    )
  } else if (props.label == "間違った単語") {
    return (
      <div className="wrong-wordtest-button wordtest-button">
        <Content label={props.label} /> 
      </div>
    )
  } else {
    return (
      <div className="all-wordtest-button wordtest-button">
        <Content label={props.label} /> 
      </div>
    )
  }
  
}

export default Button;