export type Employee = {
  id: number;
  name: string;
  manager_id: number | null;
};

export type HierarchicalEmployee = {
  name: string;
  subordinates: HierarchicalEmployee[];
  level: number;
  hasSubordinates: boolean;
};
