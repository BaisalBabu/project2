import React, { useState } from 'react'
import { Button, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Student = () => {
    var[inputs,setInputs]=useState({"admno":'',"sname":'',"age":''})

        const readInput =(event) =>{
            const {name,value}=event.target
            setInputs((inputs)=>({...inputs,[name]:value}))
            console.log(inputs)
        }

        const saveData =() =>
    {
        console.log("clicked")
        
        console.log(inputs)
        axios.post("http://localhost:3005/new",inputs)
        .then((response)=> { 
                alert("Record saved")
        })
        .catch(err=> console.log(err))
    }
    
  return (
    <div>
    <center>
        <h1>
            Student Registration
        </h1>
       
        <TextField id="outlined-basic" label="Name" variant="outlined"  name="sname" value={inputs.sname} onChange={readInput}/><br/><br/>
        <TextField id="outlined-basic" label="Age" variant="outlined"   name="age" value={inputs.age} onChange={readInput}/><br/><br/>
        <TextField id="outlined-basic" label="Admissionno" variant="outlined" name="admno"value={inputs.admno} onChange={readInput} /><br/><br/>
        <Button variant="contained" onClick={saveData}>Save</Button> <Button variant="contained">View</Button>
    </center>
    </div>
  )
}

export default Student