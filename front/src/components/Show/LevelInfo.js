import React from 'react';

const LevelInfo = (props) => {
  const Content = (props) => {
    return (
      <>
      <div className="level-info-container">
        <div className="level-title-show">
          {props.level}
        </div>
        <div className="level-condition level-condition-show">
          {props.condition}
        </div>
      </div>
      <div className="level-info-show">
        {props.info}
      </div>
      </>
    )
  }

  if (props.condition === "習得済") {
    return (
      <div className="already-level level-show-container">
        <Content level={props.level} condition={props.condition} info={props.info}/>
      </div>
    );
  } else if (props.condition === "未習得") {
    return (
      <div className="notyet-level level-show-container">
        <Content level={props.level} condition={props.condition} info={props.info}/>
      </div>
    );
  } else {
    return (
      <div className="middle-level level-show-container">
        <Content level={props.level} condition={props.condition} info={props.info}/>
      </div>
    );
  }
};

export default LevelInfo;