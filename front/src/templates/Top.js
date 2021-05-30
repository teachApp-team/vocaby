import React from 'react';
import Container from '@material-ui/core/Container';
import LearnigCondition from '../components/Top/LearnigCondition';
import LevelBlock from '../components/Top/LevelBlock';

const Top = () => {
  return (
    <Container maxWidth="md">
      <div className="study-middle-container">
        <h3>学習中</h3>
        <div className="study-middle-content">
          <div>
            <h3>LEVEL1</h3>
          </div>
          <div className="study-middle-link">
            <h3>詳細</h3>
          </div>
        </div>
      </div>
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
      <div className="level-container">
        <LevelBlock LevelBlockTitle={"LEVEL 1-10"} />
      </div>
      <div className="level-container">
        <LevelBlock LevelBlockTitle={"LEVEL 11-20"} />
      </div>
      <div className="level-container">
        <LevelBlock LevelBlockTitle={"LEVEL 21-30"} />
      </div>
    </Container>
  )
}

export default Top;
