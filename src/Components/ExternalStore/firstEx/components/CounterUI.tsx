import styled from '@emotion/styled';
import { Box, Button, Stack } from '@mui/material';

const Container = styled(Box)(() => ({
  width: '346px',
  padding: '12px',
  border: '1px solid grey',
  borderRadius: '8px',
}));

const UtilBtn = styled(Button)(() => ({
  padding: 0,
  backgroundColor: '#0038a1',
  color: 'white',
}));

const NumberBtn = styled(Button)(() => ({
  padding: 0,
  backgroundColor: '#424242',
  color: 'white',
  borderRadius: '8px',
}));

const Row = styled(Stack)(() => ({
  display: 'flex',
  flexDirection: 'row',
}));

const Column = styled(Stack)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

const ResultContainer = styled(Row)(() => ({
  '>p': {
    fontWeight: 500,
    border: '1px solid #767676',
    background: 'white',
    color: 'black',
    fontSize: '16px',
    padding: '0px 8px',
    borderRadius: '4px',
  },
}));

const UIWrraper = ({ children }: { children: React.ReactNode }) => {
  <>{children}</>;
};

export const CounterUI = Object.assign(UIWrraper, {
  Column,
  ResultContainer,
  Row,
  NumberBtn,
  UtilBtn,
  Container,
});
