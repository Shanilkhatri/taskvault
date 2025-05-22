import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Task } from "../types/task";

type State = {
  tasks: Task[];
  addTask: (title: string) => void;
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
  filter: Filter;
  setFilter: (f: Filter) => void;
};
type Filter = "all" | "completed" | "pending";
export const useTaskStore = create<State>()(
  persist(
    (set) => ({
      tasks: [],
      addTask: (title) =>
        set((state) => ({
          tasks: [...state.tasks, { id: crypto.randomUUID(), title, completed: false }],
        })),
      toggleTask: (id) =>
        set((state) => ({
          tasks: state.tasks.map((t) =>
            t.id === id ? { ...t, completed: !t.completed } : t
          ),
        })),
      deleteTask: (id) =>
        set((state) => ({
          tasks: state.tasks.filter((t) => t.id !== id),
        })),
    filter: "all",
    setFilter: (f: Filter) => set({ filter: f })
        
    }),
    {
      name: "task-vault-storage", // localStorage key
    }
  )
);
