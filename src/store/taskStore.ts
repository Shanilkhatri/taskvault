// src/store/taskStore.ts
import { create } from "zustand";

type Task = {
  id: string;
  title: string;
  completed: boolean;
};

type State = {
  tasks: Task[];
  addTask: (title: string) => void;
};

export const useTaskStore = create<State>((set) => ({
  tasks: [],
  addTask: (title) =>
    set((state) => ({
      tasks: [...state.tasks, { id: crypto.randomUUID(), title, completed: false }],
    })),
}));
