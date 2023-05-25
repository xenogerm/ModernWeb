import { Box } from "@mui/material";

export default function MediaBox() {
  return (
    <Box
      position="fixed"
      right="0"
      sx={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1682406826663-1b26f0483be4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3688&q=80')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "80vh",
        width: "100vw"
      }}
    ></Box>
  );
}
