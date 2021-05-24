import React from 'react';
import Container from '@material-ui/core/Container';
import LearnigCondition from '../components/Top/LearnigCondition';

const Top = () => {
  return (
    <Container maxWidth="md">
      <div className="learning-conditions-container">
        <div className="learning-condition-title">
          <h3>学習状況</h3>
        </div>
        <div className="learning-condtions">
          <LearnigCondition label={"高校１年生平均習得率"} value={58}/>
          <LearnigCondition label={"全ユーザー平均習得率"} value={68}/>
          <LearnigCondition label={"あなたの　平均習得率"} value={38}/>
        </div>
      </div>
    </Container>
  )
}

export default Top;
