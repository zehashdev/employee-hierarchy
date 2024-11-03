import { useState } from 'react';
import './App.css';
import styled from 'styled-components';
import Table from './components/Table/Table.component';
import {
  employeeData1,
  employeeData2,
  employeeData3,
} from './components/Table/Table.data';
import { Employee } from './components/Table/Table.type';

const BaseContainer = styled.div`
  max-width: 1440px;
  padding: 20px 40px;
  margin: 0 auto;
`;

const BaseTitle = styled.h1`
  text-align: center;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const Button = styled.button`
  align-items: center;
  background-color: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: .25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.85);
  cursor: pointer;
  display: inline-flex;
  font-family: system-ui,-apple-system,system-ui,"Helvetica Neue",Helvetica,Arial,sans-serif;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  line-height: 1.25;
  margin: 0;
  min-height: 3rem;
  padding: calc(.875rem - 1px) calc(1.5rem - 1px);
  position: relative;
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  width: auto;

  &:hover,
  &:focus {
    border-color: rgba(0, 0, 0, 0.15);
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
    color: rgba(0, 0, 0, 0.65);
  }

  &:hover {
    transform: translateY(-1px);
  }

  &:active {
    background-color: #F0F0F1;
    border-color: rgba(0, 0, 0, 0.15);
    box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
    color: rgba(0, 0, 0, 0.65);
    transform: translateY(0);
  }
}`;

const GitHubLinkText = styled.p`
  line-height: 1.15;
  font-size: 1em;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  text-align: center;
`;

const GitHubLink = styled.a`
  background: linear-gradient(to bottom, var(#ff9800) 0%, var(#ff9800) 100%);
  background-position: 0 100%;
  background-repeat: repeat-x;
  background-size: 3px 3px;
  color: #000;
  text-decoration: none;

  &:hover {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg id='squiggle-link' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:ev='http://www.w3.org/2001/xml-events' viewBox='0 0 20 4'%3E%3Cstyle type='text/css'%3E.squiggle{animation:shift .3s linear infinite;}@keyframes shift {from {transform:translateX(0);}to {transform:translateX(-20px);}}%3C/style%3E%3Cpath fill='none' stroke='%23ff9800' stroke-width='2' class='squiggle' d='M0,3.5 c 5,0,5,-3,10,-3 s 5,3,10,3 c 5,0,5,-3,10,-3 s 5,3,10,3'/%3E%3C/svg%3E");
    background-position: 0 100%;
    background-size: auto 6px;
    background-repeat: repeat-x;
    text-decoration: none;
  }
`;

const App = () => {
  // Set the initial state to employeeData1
  const [currentData, setCurrentData] = useState<Employee[]>(employeeData1);

  // Function to handle data change
  const handleDataChange = (data: Employee[]) => {
    setCurrentData(data);
  };
  return (
    <BaseContainer>
      <BaseTitle>Organization Hierarchy Table</BaseTitle>
      <ButtonContainer>
        <Button type="button" onClick={() => handleDataChange(employeeData1)}>
          Load Data 1
        </Button>
        <Button type="button" onClick={() => handleDataChange(employeeData2)}>
          Load Data 2
        </Button>
        <Button type="button" onClick={() => handleDataChange(employeeData3)}>
          Load Data 3
        </Button>
      </ButtonContainer>
      <GitHubLinkText>
        <GitHubLink
          href="https://github.com/zehashdev/employee-hierarchy"
          target="_blank"
          rel="noreferrer"
        >
          Check out this Github Link
        </GitHubLink>
      </GitHubLinkText>

      <Table employeeData={currentData} />
    </BaseContainer>
  );
};

export default App;
