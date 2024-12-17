import React, {
  createContext,
  FunctionComponent,
  ReactNode,
  useEffect,
  useState,
} from "react";

export interface Task {
  id: string;
  name: string;
  type: "rectangle" | "circle" | "polygon";
}

export interface TaskInfo {
  taskListName: string;
  tasks: Task[];
}

interface TaskContextType {
  error: Error | null;
  loading: boolean;
  incompletedTasks: TaskInfo | null;
  completedTasks: Task[];
  fetchTasks: () => void;
  markTaskAsCompleted: (taskId: string) => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

interface TaskProviderProps {
  children: ReactNode;
}

const BASE_URL = "http://localhost:3001";
const TaskProvider: FunctionComponent<TaskProviderProps> = ({ children }) => {
  const [incompletedTasks, setIncompletedTasks] = useState<TaskInfo | null>(
    null
  );
  const [completedTasks, setCompletedTasks] = useState<Task[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);

  const markTaskAsCompleted = (taskId: string) => {
    // Check if incompletedTasks exists and if there is a tasks array
    if (!incompletedTasks || !incompletedTasks.tasks) {
      setError(new Error("No tasks available."));
      return;
    }

    // Find the task
    const taskToMove = incompletedTasks.tasks.find((t) => t.id === taskId);

    // Handling if task is not found
    if (!taskToMove) {
      setError(new Error(`Task with ID ${taskId} is not found`));
      return;
    }

    // Filter out the completed task
    const updatedTasks = incompletedTasks.tasks.filter((t) => t.id !== taskId);

    // Update states
    setIncompletedTasks({ ...incompletedTasks, tasks: updatedTasks });
    setCompletedTasks((prevCompletedTask) => [
      ...prevCompletedTask,
      taskToMove,
    ]);
  };

  const fetchTasks = async () => {
    setLoading(true);

    try {
      const response = await fetch(`${BASE_URL}/tasks`);
      if (!response.ok) {
        throw new Error(`Failed to fetch tasks. Status: ${response.status}`);
      }
      const data: TaskInfo = await response.json();

      setIncompletedTasks(data);

      // Reset completed tasks
      setCompletedTasks([]);
    } catch (error) {
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const value: TaskContextType = {
    error,
    loading,
    incompletedTasks,
    completedTasks,
    fetchTasks,
    markTaskAsCompleted,
  };

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};
export { TaskContext, TaskProvider };
