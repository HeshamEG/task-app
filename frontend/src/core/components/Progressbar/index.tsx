import React from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import { Typography, Box } from "@material-ui/core";
export default function LinearProgressWithLabel(props: any) {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}
