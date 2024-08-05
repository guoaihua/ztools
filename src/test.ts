interface Todo {
    title: string
    description: string
    completed: boolean
  }
  

 type  MyPick<T, K extends keyof T> = {
    [key in keyof T as Extract<key,K>]: T[key]
 }

  type TodoPreview = MyPick<Todo, 'completed'| 'title'>
  type dd = Extract<'title'| 'dd' | 'completed','completed'| 'title'>
  
  const todo: TodoPreview = {
      title: 'Clean room',
      completed: false,
  }
  
type Item = 'semlinker,lolo,kakuqo';

type Split<
	T extends string, 
	Delimiter extends string,
> = T extends `${infer F}${Delimiter}${infer K}` ? [F, ...Split<K, Delimiter>] : [T]     

type ElementType = Split<Item, ','>; // ["semlinker", "lolo", "kakuqo"]

