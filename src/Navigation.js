import AppBar from "@mui/material/AppBar";
import { Button, Toolbar } from "@mui/material";

export default function Navigation() {
  return (
    <>
      <AppBar>
        <Toolbar>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Routine</Button>
        </Toolbar>
      </AppBar>
    </>
  );
}
