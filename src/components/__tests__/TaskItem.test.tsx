import { render, screen, fireEvent } from "@testing-library/react";
import TaskItem from "../TaskItem";
import type { Task } from "../../types/task";
import { useTaskStore } from "../../store/taskStore";
import { describe, it, expect, beforeEach } from "vitest";
const mockTask: Task = {
  id: "1",
  title: "Mock task",
  completed: false,
};

describe("TaskItem", () => {
  beforeEach(() => {
    useTaskStore.setState({ tasks: [mockTask] });
  });

  it("renders task text", () => {
    render(<TaskItem task={mockTask} />);
    expect(screen.getByText("Mock task")).toBeInTheDocument();
  });

  it("toggles task completion when clicked", () => {
    render(<TaskItem task={mockTask} />);
    const taskDiv = screen.getByText("Mock task");
    fireEvent.click(taskDiv);

    const updatedTask = useTaskStore.getState().tasks.find(t => t.id === "1");
    expect(updatedTask?.completed).toBe(true);
  });
});
