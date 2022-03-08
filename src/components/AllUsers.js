import { Table, TableCell, TableHead, TableRow,TableBody, makeStyles, Button } from "@material-ui/core";
import { useEffect, useState } from "react";
import { getUsers } from "../Service/api";
import { Link } from "react-router-dom";
import { deleteUser } from "../Service/api";

const useStyle=makeStyles({
    table:{
        width:'90%',
        margin:'50px 0 0 50px',
        border:'2px solid grey'
    },
    thead:{
        '&>*':{
            background:'#000000',
            color:'#ffffff',
            fontSize:15
        }
    }
});
const AllUsers=()=>
{
    const css=useStyle();
    const[users,setUsers]=useState([]);
    useEffect(()=>{
        getAllUsers();

    },[]);
    const getAllUsers=async ()=>
    {
        const response= await getUsers();
        console.log(response.data);
        setUsers(response.data);
    }

    const deleteUserData=async (id)=>
    {
        await deleteUser(id);
        getAllUsers();
    }

    return (
        <Table className={css.table}>
            <TableHead>
                <TableRow className={css.thead}>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Location</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    users.map((user)=>(
                        <TableRow>
                            <TableCell>{user.id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.location}</TableCell>
                            <TableCell>
                                <Button variant='contained' color='primary' style={{marginRight:20}} to={`/edit/${user.id}`} component={Link}>Edit</Button>
                                <Button variant='contained' color='secondary' onClick={()=>deleteUserData(user.id)}>Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    )
};

export default AllUsers;