import React from 'react';
import Container from '@material-ui/core/Container';
import LevelInfo from '../components/Show/LevelInfo';

const LevelShow = () => { 
  return (
    <Container maxWidth="md">
      <LevelInfo level={"LEVEL1"} condition={"未習得"} info={"中学生レベルの基本的な名詞が収録されています高校一年生の夏までには完璧にしましょう。"} />
    </Container>
  )
}

export default LevelShow;