import { Button, FormControl, FormGroup, Input, InputLabel,makeStyles, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { editUser, getUsers } from "../Service/api";
import {useNavigate,useParams} from 'react-router-dom';


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

const EditUser=()=>
{
    const[user,setUser]=useState(initialValues);
    const{name,location}=user;
    const{id}=useParams();
    const css=useStyle();
    const history=useNavigate();
    const onValueChange=(e)=>{
            setUser({...user,[e.target.name]:e.target.value});
    };

    useEffect(()=>
    {
        loadUserData();

    },[])

    const loadUserData=async ()=>
    {
        const response= await getUsers(id);
        setUser(response.data);
    }

    const editUserDetails=async()=>
    {
        await editUser(id,user);
        history('/allusers');
    }

    return (<FormGroup className={css.container}>
        <Typography variant='h4'>Edit user</Typography>
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
        <Button variant='contained' color='primary' onClick={()=>editUserDetails()}>Update User</Button>
    </FormGroup>);
}

export default EditUser;