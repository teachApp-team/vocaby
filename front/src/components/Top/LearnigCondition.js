import React from 'react';

const LearningCondition = (props) => {

  return (
      <div className="learning-condtion">
        <p>
          {props.label}
        </p>
        <div class="circle">
          {props.value}%
        </div>
      </div>
  );
};

export default LearningCondition;