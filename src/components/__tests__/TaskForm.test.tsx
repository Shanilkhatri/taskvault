import { render, screen, fireEvent } from "@testing-library/react";
import AddTask from "../TaskForm";
import { useTaskStore } from "../../store/taskStore";
import {describe, it, expect, beforeEach} from 'vitest'

describe("AddTask", () => {
  beforeEach(() => {
    useTaskStore.setState({ tasks: [] }); // Reset store
  });

  it("adds a task when input is filled and button clicked", () => {
    render(<AddTask />);
    const input = screen.getByPlaceholderText(/Enter task/i);
    fireEvent.change(input, { target: { value: "Learn testing" } });

    const button = screen.getByRole("button", { name: /add/i });
    fireEvent.click(button);

    const tasks = useTaskStore.getState().tasks;
    expect(tasks.length).toBe(1);
    expect(tasks[0].title).toBe("Learn testing");
  });

  it("doesn't add task if input is empty", () => {
    render(<AddTask />);
    const button = screen.getByRole("button", { name: /add/i });
    fireEvent.click(button);

    const tasks = useTaskStore.getState().tasks;
    expect(tasks.length).toBe(0);
  });
});
