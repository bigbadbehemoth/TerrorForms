import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import { useEffect, useState } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
     
    },
  },
}));

export default function User() {

    const paperStyle={padding: '50px 20px', width:600, margin:"20px auto"}
    const[name, setName] = React.useState('')
    const[address, setAddress] = React.useState('')
    const[phone, setPhoneNumber] = React.useState('');
    const[users,setUser]=useState([])
    const classes = useStyles();


    const handleClick=(e) =>{
        e.preventDefault()
        const user={name,address,phone}
        console.log(user)
        fetch("http://localhost:8080/user/add",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(user)
        }).then(()=>{
            console.log("New User added")
        })
    }
    
    useEffect(()=>{
      fetch("http://localhost:8080/user/getAll")
      .then(res=>res.json())
      .then((result)=>{
        setUser(result);
      }
    )
    },[])


  return (
    <Container >
        <Paper elevation={3} style={paperStyle} >
            <h1> Basic Web Form</h1>
      
    <form
      className={classes.root}
      noValidate
      autoComplete="off">
      
      <TextField id="ourlined-basic" label="Name" variant="outlined" fullWidth 
      value = {name}
      onChange= {(e) => setName(e.target.value)}/>
    
      <TextField id="outlined-basic" label="Adress" variant="outlined" fullWidth 
      value = {address}
      onChange= {(e) => setAddress(e.target.value)}/>

      <TextField id="outlined-basic" label="PhoneNumber" variant="outlined" fullWidth 
      value = {phone}
      onChange= {(e) => setPhoneNumber(e.target.value)}/>



      <Button variant="contained" color = 'inherit' onClick={handleClick}>
          submit
      </Button>
      </form>
        </Paper>

        <h1>Clients</h1>

<Paper elevation={3} style={paperStyle}>

  {users.map(user=>(
    <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={user.id}>
     Id:{user.id}<br/>
     Name:{user.name}<br/>
     Address:{user.address}<br/>
     PhoneNumber:{user.phone}

    </Paper>
  ))
}
</Paper>

        
      </Container>
  );
}
