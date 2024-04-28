export type labelsType = 'urgent' | 'current' | 'later' | 'deleted';

export type Todo = {
  id: string;
  description: string;
  timeStamp: number;
  label: labelsType;
  dedline: string;
};

export type TodoListType = 'active' | 'removed';
