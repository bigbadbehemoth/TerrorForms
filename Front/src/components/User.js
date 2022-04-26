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
    
      <TextField id="outlined-basic" label="Address" variant="outlined" fullWidth 
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


/* BEGINNING OF FORM BUILDER CODE, MAY BREAK THINGS */
// const { register, handleSubmit, watch, formState: { errors } } = useForm();
// const onSubmit = data => console.log(data);
// console.log(watch("example")); // watch input value by passing the name of it

// return (
//   /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
//   <div>
//       <div>Select your desired fields:</div>
//       <select {...register("Field", { required: true })}>
//         <option value="Text field">Text Field</option>
//         <option value="Drop down selection">Drop-Down Selection</option>
//         <option value="Radio selection">Radio Selection</option>
//         <option value="Phone number">Phone Number</option>
//       </select>
      

//       <br /><button value="Add element">Add Element</button>
//       <br /><br /><button value="Finalize webform">Finalize Webform</button>
//     </div>
// );
}
