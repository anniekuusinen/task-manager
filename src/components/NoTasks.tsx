import React, { FunctionComponent } from "react";
import { Task } from "../context/TaskContext.tsx";
import { Box, Stack, Typography } from "@mui/material";

interface NoTasksProps {
  completedTasks: Task[];
}
const NoTasks: FunctionComponent<NoTasksProps> = ({ completedTasks }) => {
  const generatingShapeByType = (type) => {
    switch (type) {
      case "circle":
        return (
          <svg width={24} height={24}>
            <circle cx={12} cy={12} r={10} fill="red" />
          </svg>
        );
      case "rectangle":
        return (
          <svg width={24} height={24}>
            <rect x={2} y={2} fill="green" width={20} height={20} />
          </svg>
        );
      default:
        return (
          <svg width={24} height={24}>
            <polygon points="12,2 22,22 2,22" fill="pink" />
          </svg>
        );
    }
  };
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Completed Tasks
      </Typography>
      <Stack spacing={2}>
        {completedTasks.map((task) => (
          <Stack key={task.id} direction="row" alignItems="center" spacing={1}>
            {generatingShapeByType(task.type)}
            <Typography variant="body1">
              {task.name} - {task.type}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};

export default NoTasks;
