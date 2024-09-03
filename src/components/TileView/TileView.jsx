// src/components/TileView.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  IconButton,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
  Menu,
  MenuItem,
  Backdrop,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";

const TileView = () => {
  const anchorRef = React.useRef(null);
  const [student, setStudent] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onTileClick = (student) => {
    handleOpen();
  };

  useEffect(() => {
    axios
      .get(`https://freetestapi.com/api/v1/students/${id}`) // Replace with an actual public API
      .then((response) => setStudent(response.data))
      .catch((error) => console.error("Error fetching student data:", error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box>
      <Grid item xs={12}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<ArrowBack />}
          onClick={() => navigate("/")}
        >
          Back
        </Button>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4} key={student.id}>
          <Card className="z-100 mt-8">
            <CardContent className="flex justify-between cursor-pointer">
              <Box onClick={() => onTileClick(student)}>
                <Typography variant="h6">{student.name}</Typography>
                <Typography color="textSecondary">{student.email}</Typography>
              </Box>
              <IconButton
                className="z-1000"
                ref={anchorRef}
                aria-label="more"
                aria-controls="long-menu"
                aria-haspopup="true"
                onClick={(e) => setOpenMenu(!openMenu)}
              >
                <MoreVertIcon />
              </IconButton>
              <Backdrop onClick={() => setOpenMenu(false)}>
                <Menu
                  id="long-menu"
                  anchorEl={anchorRef.current}
                  keepMounted
                  open={openMenu}
                  onClose={handleClose}
                  PaperProps={{
                    style: {
                      maxHeight: 48 * 4.5,
                      width: "20ch",
                    },
                  }}
                >
                  <MenuItem onClick={() => console.log("edit")}>Edit</MenuItem>
                  <MenuItem onClick={() => console.log("flag")}>Flag</MenuItem>
                  <MenuItem onClick={() => console.log("delete")}>
                    Delete
                  </MenuItem>
                </Menu>
              </Backdrop>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{student.name}</DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            <span className="text-font-darkGray">Email: </span> {student.email}
          </Typography>
          <Typography variant="body1">
            <span className="text-font-darkGray">Age: </span> {student.age}
          </Typography>
          <Typography variant="body1">
            <span className="text-font-darkGray">Gender:</span> {student.gender}
          </Typography>
          <Typography variant="body1">
            <span className="text-font-darkGray">Grade: </span> {student.grade}
          </Typography>
          <Typography variant="body1">
            <span className="text-font-darkGray">Address: </span>
            {student.address.street}, {student.address.city},{" "}
            {student.address.zip}, {student.address.country}
          </Typography>
          <Typography variant="body1">
            <span className="text-font-darkGray">Age: </span> {student.age}
          </Typography>
          <Typography variant="body1">
            <span className="text-font-darkGray">Courses: </span>{" "}
            {student.courses.join(", ")}
          </Typography>
          <Typography variant="body1">
            <span className="text-font-darkGray">Email: </span> {student.email}
          </Typography>
          <Typography variant="body1">
            <span className="text-font-darkGray">Gender:</span> {student.gender}
          </Typography>
          <Typography variant="body1">
            <span className="text-font-darkGray">GPA: </span> {student.gpa}
          </Typography>
          <Typography variant="body1">
            <span className="text-font-darkGray">ID: </span> {student.id}
          </Typography>
          <Typography variant="body1">
            <span className="text-font-darkGray">Phone: </span> {student.phone}
          </Typography>
          {/* Add more fields as necessary */}
          <Button className="-ml-2" onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default TileView;
