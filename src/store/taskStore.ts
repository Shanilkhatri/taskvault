// src/store/taskStore.ts
import { create } from "zustand";

import type {Task}  from "../types/task";

type State = {
  tasks: Task[];
  addTask: (title: string) => void;
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
};

export const useTaskStore = create<State>((set) => ({
  tasks: [],
  addTask: (title) =>
    set((state) => ({
      tasks: [...state.tasks, { id: crypto.randomUUID(), title, completed: false }],
    })),
    toggleTask: (id:string) =>
        set((state) => ({
            tasks: state.tasks.map((t) =>
            t.id === id ? { ...t, completed: !t.completed } : t
            ),
        })),
    deleteTask: (id:string) =>
    set((state) => ({
        tasks: state.tasks.filter((t) => t.id !== id),
    })),
}));
