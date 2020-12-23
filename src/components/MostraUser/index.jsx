import React, {useState, useEffect} from 'react';
import axios from 'axios';
import api from '../../services/api';

//Estilos
import {Button, Card, CardActions, CardContent, CardMedia, Divider,
      List, ListItem, ListItemText, makeStyles, Typography} from '@material-ui/core';
import "./index.css";

//Alert de erro estilizado
import swal from 'sweetalert';

//Parâmetros do card (@material-ui)
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginTop: 20,    
  }
});

export default function MostraUser({usuario}) {
  const classes = useStyles();
  const [userInfo, setUserInfo] = useState([]);
  const [repos, setRepos] = useState([]);
  const [starred, setStarred] = useState([{owner: 'login'}]);

  //Método que puxa da API os dados do usuário e define o state de userInfo
  useEffect(() => {
    axios
    .get(api.baseURL+`/${usuario}`)
    .then(res => {
      setUserInfo(res.data);
    })
    .catch((err) => {
      console.error("ops! ocorreu um erro" + err);
      swal("Usuário não encontrado", "Tente novamente", "error");
    });
  }, []);

  //Função que pega repositórios do usuário e define o state de repos
  function pegaRepo(){
    setStarred([]);
    axios.get(api.baseURL+`/${usuario}/repos`) 
    .then(res => {
      setRepos(res.data);
    }); 
  }

  //Função que pega starred repositórios do usuário e define o state de starred
  function pegaStar(){
    setRepos([]);
    axios.get(api.baseURL+`/${usuario}/starred`) 
    .then(res => {
      setStarred(res.data);
    });
  }
  

  return(
    <div className="card">
      <Card className={classes.root}>
        <CardMedia  alt="avatar do usuário" component="img"
                    height="350"image={userInfo.avatar_url}
        />
        <CardContent >
          <Typography variant="h5" component="h2">
            {usuario}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <b>ID:</b> <span className="user-info"> {userInfo.id} </span>
          </Typography>
          <Typography gutterBottom color="textSecondary" variant="body2" component="p">
            <b>GitHub:</b> <a className="git-link" target="blank" href={userInfo.html_url}>
                              {userInfo.html_url}
                            </a>
          </Typography>
          <Typography color="textSecondary" component="p">
            <b>Repositórios:</b> <span className="user-info">{userInfo['public_repos']}</span>
          </Typography>
          <Typography color="textSecondary" component="p">
            <b>Seguidores:</b> <span className="user-info">{userInfo['followers']}</span>
          </Typography>
          <Typography color="textSecondary" component="p">
            <b>Seguindo:</b> <span className="user-info">{userInfo['following']}</span>
          </Typography>
        </CardContent>

        <CardActions>
          <Button variant="outlined" size="small" color="primary" onClick={pegaRepo} >
            Repositórios
          </Button>
          <Button variant="outlined" size="small" color="primary" onClick={pegaStar}>
            Starred
          </Button>         
        </CardActions>
        
        <Divider />
        <div>
          {repos.map(repo => (
            <List key={repo.id} component="nav" disablePadding={true} >
              <ListItem button component="a" target="_blank" href={repo.html_url}>
                <ListItemText primary={repo.name} secondary={repo.language} />
              </ListItem>
              <Divider />
            </List>
          ))} 
          {starred.map(star => (
            <List key={star.id} component="nav" disablePadding={true} >
              <ListItem  button component="a" target="_blank" href={star.html_url}>
                <ListItemText primary={star.name} secondary={star.owner.login} />
              </ListItem>
              <Divider />
            </List>
          ))} 
        </div>  
        
      </Card>

    </div>
  );
}

