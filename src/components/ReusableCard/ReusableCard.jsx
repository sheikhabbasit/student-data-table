import React from "react";
import Box from "@mui/material/Box";
import { useStyles } from "./useStyles";

function ReusableCard({ sx, children, className }) {
  const styles = useStyles();
  return (
    <Box sx={[styles.container, sx]} className={className}>
      {children}
    </Box>
  );
}

export default ReusableCard;
