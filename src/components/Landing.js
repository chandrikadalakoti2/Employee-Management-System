import { makeStyles } from "@material-ui/core";

const useStyle=makeStyles({
    heading:{
        fontSize:50,
        margin:'10%',
        display:'block'
    }
})

const Landing=()=>
{
    const css=useStyle();
    return <div>
        <h2 className={css.heading}>Welcome to Employee Management System</h2>
    </div>
};

export default Landing;