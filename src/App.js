import React, { useState } from 'react';
import './App.css';
import { Col, Row, Button } from 'antd';
import 'antd/dist/antd.min.css';
import { useDispatch, useSelector } from 'react-redux';
import {startTimer, resetTimer, stopTimer} from './redux/timer/timer.action'
function App() {
  const { min,sec } = useSelector((state)=> state.timerReducer)
  const dispatch = useDispatch();
  const [intervalId, setIntervalId] = useState(0);

  const startAction = () => {
    const newIntervalId = setInterval(() => play(), 1000);
    setIntervalId(newIntervalId);
  }
  const play = () => {
    dispatch(startTimer())
  }
  const resetAction = () => {
    clearInterval(intervalId);
    dispatch(resetTimer())
  }
  const stopAction = () => {
    clearInterval(intervalId);
    dispatch(stopTimer())
  }

  let text_style = {
    "textAlign": "center",
    "height": "auto",
    "fontSize": "1rem",
  }
  let timer_block_style = {
    "textAlign": "center",
    "border": "1px solid black",
    "padding": "2rem",
    "height": "auto",
    "fontSize": "2rem",
  }
  return (
    <div>
      <Row style={{"padding": "6rem"}}>
        <Col span={24}>
          <p style={{"textAlign": "center", "fontSize": "2.2rem"}}>Timer</p>
        </Col>
        <Col span={8}></Col>
        <Col style={timer_block_style} span={4}>{min}</Col>
        <Col style={timer_block_style} span={4}>{sec}</Col>
        <Col span={8}></Col>
      </Row>
      <Row>
        <Col span={6}></Col>
        <Col style={text_style} span={4} >
          <Button type="danger" onClick={resetAction}>Reset</Button>
        </Col>
        <Col  style={text_style}  span={4}>
          <Button type="primary" onClick={startAction}>Start</Button>
        </Col>
        <Col  style={text_style}  span={4}>
          <Button type="danger" onClick={stopAction}>Stop</Button>
        </Col>
        <Col span={6}></Col>
        
      </Row>
    </div>
  );
}

export default App;
