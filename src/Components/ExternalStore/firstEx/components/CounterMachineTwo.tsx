import { Typography } from '@mui/material';
import { useReducer } from 'react';
import { CounterUI } from './CounterUI';

type State = {
  result: number;
  acc: number;
};

const state = {
  result: 0,
  acc: 0,
};

function reducer(
  state: State,
  action: {
    type: 'plus' | 'minus' | 'multiply' | 'divide' | 'reset' | 'numberClick';
  },
): State {
  switch (action.type) {
    case 'plus':
      return { ...state, result: state.result + state.acc };

    case 'minus':
      return { ...state, result: state.result - state.acc };

    case 'multiply':
      return { ...state, result: state.result * state.acc };

    case 'divide':
      return { ...state, result: state.result / state.acc };

    case 'reset':
      return { acc: 0, result: 0 };

    case 'numberClick':
      return { ...state, acc: state.acc };

    default:
      return state;
  }
}

export default function CounterMachineTWo() {
  const [, forceUpdate] = useReducer(reducer, { acc: 0, result: 0 });

  const plus = () => {
    state.result += state.acc;
    forceUpdate({ type: 'plus' });
  };

  const minus = () => {
    state.result -= state.acc;
    forceUpdate({ type: 'minus' });
  };

  const multiply = () => {
    state.result = state.result * state.acc;
    forceUpdate({ type: 'multiply' });
  };

  const divide = () => {
    state.result = state.result / state.acc;
    forceUpdate({ type: 'divide' });
  };

  const reset = () => {
    state.acc = 0;
    state.result = 0;
    forceUpdate({ type: 'reset' });
  };

  const clickNumberBtn = (curr: number) => {
    state.acc = curr;
    forceUpdate({ type: 'numberClick' });
  };

  return (
    <CounterUI.Container bgcolor="teal">
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
