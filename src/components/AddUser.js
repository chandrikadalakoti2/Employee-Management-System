import { Button, FormControl, FormGroup, Input, InputLabel,makeStyles, Typography } from "@material-ui/core";
import { useState } from "react";
import { addUser } from "../Service/api";
import {useNavigate} from 'react-router-dom';

const useStyle=makeStyles({
    container:{
        width:'50%',
        margin:'10% 0 0 25%',
        '&>*':{
            marginTop:20
        }
    }
});

const initialValues={
    id:'',
    name:'',
    location:''
};

const AddUser=()=>
{
    const[user,setUser]=useState(initialValues);
    const{id,name,location}=user;
    const css=useStyle();
    const history=useNavigate();
    const onValueChange=(e)=>{
            setUser({...user,[e.target.name]:e.target.value});
    };

    const addUserDetails=async()=>
    {
        await addUser(user);
        history('/allusers');
    }

    return (<FormGroup className={css.container}>
        <Typography variant='h4'>Add user</Typography>
        <FormControl>
            <InputLabel>Id</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name='id' value={id}/>
        </FormControl>
        <FormControl>
            <InputLabel>Name</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name='name' value={name}/>
        </FormControl>
        <FormControl>
            <InputLabel>Location</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name='location' value={location} />
        </FormControl>
        <Button variant='contained' color='primary' onClick={()=>addUserDetails()}>Add User</Button>
    </FormGroup>);
}

export default AddUser;