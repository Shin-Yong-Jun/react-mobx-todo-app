interface TodoItem{
  id: number;
  title: string;
  completed: boolean;
}

export default class TodoStore {
  todos:TodoItem[] = [];
  constructor(){
    makeObservable()
  }
}