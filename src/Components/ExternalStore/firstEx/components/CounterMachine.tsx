import { Typography } from '@mui/material';
import { useState } from 'react';
import { CounterUI } from './CounterUI';

export default function CounterMachine() {
  const [result, setResult] = useState(0);
  const [acc, setAcc] = useState(0);

  const plus = () => {
    setResult((prev) => prev + acc);
  };

  const minus = () => {
    setResult((prev) => prev - acc);
  };

  const multiply = () => {
    setResult((prev) => (prev || 1) * acc);
  };

  const divide = () => {
    setResult((prev) => (prev || 1) / acc);
  };

  const reset = () => {
    setResult(0);
    setAcc(0);
  };

  const clickNumberBtn = (curr: number) => {
    setAcc(curr);
  };

  return (
    <CounterUI.Container bgcolor="pink">
      <CounterUI.ResultContainer gap={1} mb={2}>
        <Typography>{`acc: ${acc}`}</Typography>
        <Typography>{`result: ${result}`}</Typography>
      </CounterUI.ResultContainer>
      <CounterUI.Row width="100%" bgcolor="sky" gap={2}>
        <CounterUI.Row width="70%" gap={2} flexWrap="wrap">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <CounterUI.NumberBtn
              key={num}
              type="button"
              onClick={() => clickNumberBtn(Number(num))}
            >
              {num}
            </CounterUI.NumberBtn>
          ))}
        </CounterUI.Row>

        <CounterUI.Column width="20%" gap={2}>
          <CounterUI.UtilBtn type="button" onClick={plus}>
            더하기
          </CounterUI.UtilBtn>
          <CounterUI.UtilBtn type="button" onClick={minus}>
            뺴기
          </CounterUI.UtilBtn>
          <CounterUI.UtilBtn type="button" onClick={multiply}>
            곱하기
          </CounterUI.UtilBtn>
          <CounterUI.UtilBtn type="button" onClick={divide}>
            나누기
          </CounterUI.UtilBtn>
          <CounterUI.UtilBtn type="button" onClick={reset}>
            초기화
          </CounterUI.UtilBtn>
        </CounterUI.Column>
      </CounterUI.Row>
    </CounterUI.Container>
  );
}
