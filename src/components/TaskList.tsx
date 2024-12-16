import React, { FunctionComponent, useContext } from "react";
import { TaskContext, TaskInfo } from "../context/TaskContext.tsx";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid2,
  Typography,
} from "@mui/material";

interface TaskListProps {
  taskList: TaskInfo;
  taskListName: string;
}
const TaskList: FunctionComponent<TaskListProps> = ({
  taskList,
  taskListName,
}) => {
  const { markTaskAsCompleted } = useContext(TaskContext)!;

  return (
    <Box>
      <Typography variant="h2" align="center" gutterBottom>
        {taskListName}
      </Typography>
      <Grid2
        container
        spacing={3}
        sx={{
          justifyContent: "center",
          marginTop: 2,
        }}
      >
        {taskList.tasks.map((task) => (
          <Grid2 key={task.id}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h5" component="div">
                  {task.name}
                </Typography>
                <Typography variant="h6" component="div" color="text.secondary">
                  Type: {task.type}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  variant="outlined"
                  onClick={() => markTaskAsCompleted(task.id)}
                >
                  Mark as completed
                </Button>
              </CardActions>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};
export default TaskList;
