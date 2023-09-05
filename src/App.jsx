import { useState } from "react";
import {
  Box,
  Typography,
  Checkbox,
  Button,
  TextField,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Stack from "@mui/material/Stack";

import DeleteIcon from "@mui/icons-material/Delete";
import AddBoxIcon from "@mui/icons-material/AddBox";

function App() {
  const [todos, setTodos] = useState([]);
  const [values, setValues] = useState("");

  const removeItems = (id) => {
    setTodos(todos.filter((item, index) => index !== id));
  };

  const addItems = (e) => {
    e.preventDefault();
    setTodos([...todos, values]);
    setValues("");
  };

  return (
    <Box sx={{ maxWidth: "100%" }}>
      <Stack
        mx="15rem"
        justifyContent="center"
        alignItems="center"
        direction="column"
        sx={{
          border: 1,
          borderColor: "primary.main",
          borderRadius: 2,
          backgroundColor: "#5e59bf",
        }}
        padding={1}
      >
        <Typography variant="h2" color="white">
          Todo List :{" "}
        </Typography>
        <TextField
          required
          size="medium"
          label="Add Item"
          variant="filled"
          sx={{
            backgroundColor: "#ef7eb0",
            borderRadius: 2,
            minWidth: "400px",
            mt: 2,
          }}
          value={values}
          onChange={(e) => setValues(e.target.value)}
        />
        <Button
          variant="contained"
          size="large"
          onClick={addItems}
          sx={{
            margin: "20px",
            minWidth: "80px",
            color: "black",
            backgroundColor: "#ef7eb0",
          }}
        >
          <AddBoxIcon />
        </Button>

        <List>
          {todos.map((todosItem, index) => (
            <ListItem
              key={index}
              secondaryAction={
                <Button variant="contained" onClick={() => removeItems(index)}>
                  {<DeleteIcon />}
                </Button>
              }
              sx={{ minWidth: "400px" }}
            >
              <ListItemIcon>
                <Checkbox edge="start" />
              </ListItemIcon>
              <ListItemText
                sx={{ color: "white", fontWeight: "bold" }}
                primary={todosItem}
              />
            </ListItem>
          ))}
        </List>
      </Stack>
    </Box>
  );
}

export default App;
