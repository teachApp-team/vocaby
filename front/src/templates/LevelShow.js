import React from 'react';
import Container from '@material-ui/core/Container';
import LevelInfo from '../components/Show/LevelInfo';
import Button from '../components/Show/Button';

const LevelShow = () => { 
  return (
    <Container maxWidth="md">
      <LevelInfo level={"LEVEL1"} condition={"未習得"} info={"中学生レベルの基本的な名詞が収録されています高校一年生の夏までには完璧にしましょう。"} />
      <div className="level-condition-container">
        <div>
          <span>未着手の単語</span><span>10単語</span>
        </div>
        <div>
          <span>間違った単語</span><span>10単語</span>
        </div>
      </div>
      <div className="level-button-container">
        <h3>テストを始める</h3>
        <div className="level-button-group">
          <div>
            <Button label={"未学習単語"}/>
          </div>
          <div>
            <Button label={"間違った単語"}/>
          </div>
          <div>
            <Button label={"総復習"}/>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default LevelShow;