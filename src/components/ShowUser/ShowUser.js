import React, { useState, useEffect } from "react";
import axios from "axios";
import api from "../../services/api";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import "./ShowUser.css";

import Loading from "../Loading";

//Alert de erro estilizado
import swal from "sweetalert";

//Parâmetros do card (@material-ui)
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginTop: 20,
  },
});

export default function ShowUser({ user, back }) {
  const classes = useStyles();
  const [userInfo, setUserInfo] = useState("");
  const [repos, setRepos] = useState([]);
  const [starred, setStarred] = useState([]);

  const fetchUser = async () => {
    axios
      .get(api.baseURL + `/${user}`)
      .then((res) => {
        setUserInfo(res.data);
      })
      .catch((err) => {
        back(-1, true);
        console.error("ops! ocorreu um erro" + err);
        swal("Usuário não encontrado", "Tente novamente", "error");
      });
  };

  useEffect(() => {
    fetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (userInfo === "") {
    return <Loading />;
  }

  const pickRepos = () => {
    setStarred([]);
    axios.get(api.baseURL + `/${user}/repos`).then((res) => {
      setRepos(res.data);
    });
  };

  const pickStarr = () => {
    setRepos([]);
    axios.get(api.baseURL + `/${user}/starred`).then((res) => {
      setStarred(res.data);
    });
  };

  return (
    <div className="card">
      <Card className={classes.root}>
        <CardMedia
          alt="avatar do usuário"
          component="img"
          height="350"
          image={userInfo.avatar_url}
        />
        <CardContent>
          <Typography variant="h5" component="h2">
            {user}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <b>ID:</b> <span className="user-info"> {userInfo.id} </span>
          </Typography>
          <Typography
            gutterBottom
            color="textSecondary"
            variant="body2"
            component="p"
          >
            <b>GitHub:</b>{" "}
            <a className="git-link" target="blank" href={userInfo.html_url}>
              {userInfo.html_url}
            </a>
          </Typography>
          <Typography color="textSecondary" component="p">
            <b>Repositórios:</b>{" "}
            <span className="user-info">{userInfo["public_repos"]}</span>
          </Typography>
          <Typography color="textSecondary" component="p">
            <b>Seguidores:</b>{" "}
            <span className="user-info">{userInfo["followers"]}</span>
          </Typography>
          <Typography color="textSecondary" component="p">
            <b>Seguindo:</b>{" "}
            <span className="user-info">{userInfo["following"]}</span>
          </Typography>
        </CardContent>

        <CardActions>
          <Button
            variant="outlined"
            size="small"
            color="primary"
            onClick={pickRepos}
          >
            Repositórios
          </Button>
          <Button
            variant="outlined"
            size="small"
            color="primary"
            onClick={pickStarr}
          >
            Starred
          </Button>
        </CardActions>

        <Divider />
        <div>
          {repos.map((repo) => (
            <List key={repo.node_id} component="nav" disablePadding={true}>
              <ListItem
                button
                component="a"
                target="_blank"
                href={repo.html_url}
              >
                <ListItemText primary={repo.name} secondary={repo.language} />
              </ListItem>
              <Divider />
            </List>
          ))}
          {starred.map((star) => (
            <List key={star.node_id} component="nav" disablePadding={true}>
              <ListItem
                button
                component="a"
                target="_blank"
                href={star.html_url}
              >
                <ListItemText
                  primary={star.name}
                  secondary={star.owner.login}
                />
              </ListItem>
              <Divider />
            </List>
          ))}
        </div>
      </Card>
    </div>
  );
}
