import { Backdrop, Button, CircularProgress } from "@mui/material";
import { useState } from "react";

const About = () => {

  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold text-gray-800 hover:cursor-pointer hover:text-red-400 bg-slate-500 drop-shadow-lg mx-auto container">
          HOLA MUNDO!
        </h1>
        <Button variant="outlined">Outlined</Button>
        <br />
        <br />
        <Button
          color="warning"
          disabled={false}
          size="large"
          variant="outlined"
        >
          HOLIS
        </Button>
        <br />
        <br />
        <Button
          variant="contained"
          disableElevation
        >
          Disable elevation
        </Button>
        <br />
        <br />
        <Button onClick={handleOpen}>Show backdrop</Button>
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
          onClick={handleClose}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>
    </>
  );
};

export default About;
