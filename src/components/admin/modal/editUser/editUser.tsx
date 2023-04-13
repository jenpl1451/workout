import { FC, useState } from "react";

import type { User } from "@/types/user";

import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

type Props = {
  editingUser: User;
  setEditingUser: (user: User | null) => void;
  users: User[];
  setUsers: (users: User[]) => void;
};

export const ModalEditUser: FC<Props> = ({
  editingUser,
  setEditingUser,
  users,
  setUsers,
}) => {
  const [username, setUsername] = useState(editingUser.username);
  const [name, setName] = useState(editingUser.name);
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(editingUser.role);

  const save = () => {
    console.log(name, username, password, role);
  };

  return (
    <Modal
      open={!!editingUser}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Edit User.
        </Typography>
        <Stack spacing={2} marginTop={2}>
          <TextField
            label="Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value.trim())}
          />
          <TextField
            label="Username"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value.trim())}
          />
          <TextField
            label="Password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value.trim())}
          />
          <TextField
            select
            label="Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            {[
              { value: "admin", label: "Admin" },
              { value: "user", label: "User" },
            ].map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Stack>

        <Stack spacing={2} direction="row" marginTop={2}>
          <Button variant="contained" onClick={save}>Save</Button>
          <Button variant="outlined" onClick={() => setEditingUser(null)}>
            Cancel
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
};
