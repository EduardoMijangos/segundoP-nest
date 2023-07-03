export class Task {
    id: number;
    userId: number;
    title: string;
    description: string;
    completed: boolean;
  
    constructor(data: Partial<Task>) {
      Object.assign(this, data);
    }
  }
  