export type taskStatus = 'todo' | 'in-progress' | 'done';
export type taskPriority = 'low' | 'normal' | 'high';

export interface Task {
  id: string;
  projectId?: string;
  title: string;
  description: string;
  status?: taskStatus;
  priority: taskPriority;
  assigneeId?: string | null;
  dueDate?: string | null;
  subtasks: []
}
