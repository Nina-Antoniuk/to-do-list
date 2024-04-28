export type labelsType = 'urgent' | 'current' | 'later' | 'deleted' | 'all';

export type Todo = {
  id: string;
  description: string;
  timeStamp: number;
  label: labelsType;
  dedline: string;
};

export type TodoListType = 'active' | 'removed' | 'filter';
