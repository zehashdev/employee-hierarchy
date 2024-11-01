import { Employee } from './Table.type';

export const employeeData: Employee[] = [
  { id: 100, name: 'Alan', manager_id: 150 },
  { id: 220, name: 'Martin', manager_id: 100 },
  { id: 150, name: 'Jamie', manager_id: null },
  { id: 275, name: 'Alex', manager_id: 100 },
  { id: 400, name: 'Steve', manager_id: 150 },
  { id: 190, name: 'David', manager_id: 400 },
];

export const employeeDataUptoLevelThree: Employee[] = [
  { id: 100, name: 'Alan', manager_id: 150 },
  { id: 220, name: 'Martin', manager_id: 100 },
  { id: 150, name: 'Jamie', manager_id: null }, // Level 1 (CEO)
  { id: 275, name: 'Alex', manager_id: 100 },
  { id: 400, name: 'Steve', manager_id: 150 },
  { id: 190, name: 'David', manager_id: 400 }, // Level 3 (Employee with no subordinates)
  { id: 300, name: 'Susan', manager_id: 275 }, // Level 3 (Employee with no subordinates)
  { id: 500, name: 'Chris', manager_id: 150 }, // Level 2 (No subordinates)
];

export const employeeDataWithMultipleLevels: Employee[] = [
  { id: 150, name: 'Jamie', manager_id: null }, // Level 1 (CEO)
  { id: 100, name: 'Alan', manager_id: 150 },
  { id: 400, name: 'Steve', manager_id: 150 },
  { id: 220, name: 'Martin', manager_id: 100 },
  { id: 275, name: 'Alex', manager_id: 100 },
  { id: 500, name: 'Chris', manager_id: 400 },
  { id: 600, name: 'Rachel', manager_id: 220 },
  { id: 190, name: 'David', manager_id: 400 },
  { id: 300, name: 'Susan', manager_id: 275 }, // Level 4
  { id: 800, name: 'Sara', manager_id: 300 }, // Level 5
  { id: 900, name: 'George', manager_id: 800 }, // Level 6 (Employee with no subordinates)
];
