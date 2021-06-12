import React from 'react';
import Container from '@material-ui/core/Container';
import LinearProgress from '@material-ui/core/LinearProgress';
import ChoiceButton from "../components/UIkit/ChoiceButton";
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';


function LinearProgressWithLabel(props) {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value,
        )}秒`}</Typography>
      </Box>
    </Box>
  );
}

const Test = () => {
  const [progress, setProgress] = React.useState(10);

  return (
    <Container maxWidth="md">
      <div className="progressbar-container">
        <LinearProgressWithLabel value={progress} />
      </div>
      <div>
        <div className="question-container">
          <div className="quesiton">
            <h2>Apple</h2>
          </div>
          <div className="part">
            <h3>名詞</h3>
          </div>
        </div>
      </div>
      <div className="alternative-container">
        <div>
          <ChoiceButton text={"りんご"} bgcolor={"#D3A760"} textcolor={"black"}/>
        </div>
        <div>
          <ChoiceButton text={"オレンジ"} bgcolor={"#D3A760"} textcolor={"black"}/>
        </div>
        <div>
          <ChoiceButton text={"ぶどう"} bgcolor={"#D3A760"} textcolor={"black"}/>
        </div>
        <div>
          <ChoiceButton text={"ばなな"} bgcolor={"#D3A760"} textcolor={"black"}/>
        </div>
        <div>
          <ChoiceButton text={"分からない"} bgcolor={"#3A687E"} textcolor={"white"}/>
        </div>
      </div>
    </Container>
  )
}

export default Test;