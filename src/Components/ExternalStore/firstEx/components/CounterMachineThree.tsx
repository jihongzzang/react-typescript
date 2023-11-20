import { Typography } from '@mui/material';
import { CounterUI } from './CounterUI';
import useForceUpdate from '../hooks/useForceUpdate';

const state = {
  result: 0,
  acc: 0,
};

function _plus() {
  state.result += state.acc;
}
function _minus() {
  state.result -= state.acc;
}
function _multiply() {
  state.result = state.result * state.acc;
}
function _divide() {
  state.result = state.result / state.acc;
}
function _reset() {
  state.acc = 0;
  state.result = 0;
}
function _clickNumberBtn(curr: number) {
  state.acc = curr;
}

export default function CounterMachineTwo() {
  const forceUpdate = useForceUpdate();

  const plus = () => {
    _plus();
    forceUpdate();
  };

  const minus = () => {
    _minus();
    forceUpdate();
  };

  const multiply = () => {
    _multiply();
    forceUpdate();
  };

  const divide = () => {
    _divide();
    forceUpdate();
  };

  const reset = () => {
    _reset();
    forceUpdate();
  };

  const clickNumberBtn = (curr: number) => {
    _clickNumberBtn(curr);
    forceUpdate();
  };

  return (
    <CounterUI.Container bgcolor="yellowgreen">
      <CounterUI.ResultContainer gap={1} mb={2}>
        <Typography>{`acc: ${state.acc}`}</Typography>
        <Typography>{`result: ${state.result}`}</Typography>
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
