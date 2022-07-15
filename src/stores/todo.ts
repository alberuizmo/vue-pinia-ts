import { defineStore } from "pinia";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface TodoState {
  todos: Todo[];
}

export const useToDoStore = defineStore("todo", {
  state: (): TodoState => ({
    todos: [],
  }),
  getters: {
    completed: (state) => state.todos.filter((todo) => todo.completed),
    incomplete: (state) => state.todos.filter((todo) => !todo.completed),
  },
  actions: {
    addTodo(title: string) {
      this.todos.push({
        id: this.todos.length + 1,
        title,
        completed: false,
      });
    },
    removeTodo(id: number) {
      this.todos = this.todos.filter((todo: Todo) => todo.id !== id);
    },
    toggleTodo(id: number) {
      const todo = this.todos.find((todo: Todo) => todo.id === id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});
