import React from 'react';
import styled from 'styled-components';
import {
  Employee,
  employeeData,
  employeeDataUptoLevelThree,
  employeeDataWithMultipleLevels,
} from './Table.data';

// Styled components for the table
const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-family: Arial, sans-serif;
`;

const TableHeader = styled.th`
  border: 1px solid #333;
  padding: 8px;
  background-color: #333;
  color: #fff;
`;

const TableRow = styled.tr``;

const TableCell = styled.td<{ level?: number }>`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
`;

type HierarchicalEmployee = {
  name: string;
  subordinates: HierarchicalEmployee[];
  level: number;
  hasSubordinates: boolean;
};

// Convert flat data to hierarchical data and calculate levels
function buildHierarchy(data: Employee[]): {
  root: HierarchicalEmployee | null;
  maxLevel: number;
} {
  const employeeMap: { [id: number]: HierarchicalEmployee } = {};
  let maxLevel = 0;

  // Initialize each employee with empty subordinates and level 0
  data.forEach((employee) => {
    employeeMap[employee.id] = {
      name: employee.name,
      subordinates: [],
      level: 0,
      hasSubordinates: false,
    };
  });

  let root: HierarchicalEmployee | null = null;

  // Set up hierarchy and assign levels starting from root (Level 0)
  data.forEach((employee) => {
    if (employee.manager_id === null) {
      root = employeeMap[employee.id];
    } else if (employeeMap[employee.manager_id]) {
      const manager = employeeMap[employee.manager_id];
      const subordinate = employeeMap[employee.id];
      subordinate.level = manager.level + 1;
      // Manager types shoudl be marked with true
      manager.hasSubordinates = true;
      maxLevel = Math.max(maxLevel, subordinate.level);
      manager.subordinates.push(subordinate);
    }
  });

  return { root, maxLevel };
}

const getCellContent = (
  index: number,
  employee: HierarchicalEmployee,
  maxLevel: number
): string => {
  return (index === employee.level && employee.hasSubordinates) ||
    (index === maxLevel && !employee.hasSubordinates)
    ? employee.name
    : '';
};

const renderRows = (
  data: HierarchicalEmployee | null,
  maxLevel: number
): JSX.Element[] => {
  if (!data) return [];

  const cells = Array.from({ length: maxLevel + 1 }, (_, index) => (
    <TableCell key={index}>{getCellContent(index, data, maxLevel)}</TableCell>
  ));

  const row = <TableRow key={data.name}>{cells}</TableRow>;

  const subordinateRows = data.subordinates
    .map((subordinate) => renderRows(subordinate, maxLevel))
    .flat();

  return [row, ...subordinateRows];
};

// Table component
const Table: React.FC = () => {
  const { root, maxLevel } = buildHierarchy(employeeDataWithMultipleLevels);

  return (
    <StyledTable>
      <thead>
        <tr>
          {Array.from({ length: maxLevel }, (_, index) => (
            <TableHeader key={index}>{`Level ${index}`}</TableHeader>
          ))}
          <TableHeader>Employee</TableHeader>
        </tr>
      </thead>
      <tbody>
        {root ? (
          renderRows(root, maxLevel)
        ) : (
          <TableRow>
            <TableCell colSpan={1}>No data available</TableCell>
          </TableRow>
        )}
      </tbody>
    </StyledTable>
  );
};
export default Table;