import React, {useState} from 'react';

const LevelCard = (props) => {
  const Part = (props) => {
    return (
      <>
        <div>
          <h4>
            {props.level}
          </h4>
        </div>
        <div className="condition">
          {props.condition}
        </div>
      </>
    )
  }

  if (props.condition === "習得済") {
    return (
      <div className="level-card-already level-card">
        <Part level={props.level} condition={props.condition}/>
      </div>
    );
  } else if (props.condition === "未習得") {
    return (
      <div className="level-card-yet level-card">
        <Part level={props.level} condition={props.condition}/>
      </div>
    )
  } else {
    return (
      <div className="level-card-middle level-card">
        <Part level={props.level} condition={props.condition}/>
      </div>
    )
  }
};

export default LevelCard;