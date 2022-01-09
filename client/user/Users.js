import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Paper } from "@material-ui/core";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    list(signal).then((data) => {
      if (data && data.error) {
        console.log(data.error);
      } else {
        setUsers(data);
      }
    });
    return function cleanup() {
      abortController.abort();
    };
  }, []);

  return (
    <Paper className={classes.root} elevation={4}>
      <Typography variant="h6" className={classes.title}>
        All Users
      </Typography>
      <List dense>
        {users.map((item, index) => {
          return <Link to={"/user/" + item._id} key={index}>
            <ListItem button>
              <ListItemAvatar>
                <Avatar>
                  <Person />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={item.name}/>
              <ListItemSecondaryAction>
                <IconButton>
                  <ArrowForward></ArrowForward>
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </Link>
        })}
      </List>
    </Paper>
  )
}