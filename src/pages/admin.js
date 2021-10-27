import React from 'react';
import Posts from '../adminComponents/posts';
import Users from '../adminComponents/users';
import Comments from '../adminComponents/comments';
import Todo from '../adminComponents/todo';

const Admin=()=>{
    return(
        <div className="adminComponent" style={{backgroundColor:"#F5F5F5"}} >
            <u><h1> Welcome to Admin Page </h1></u>
            <br/>
            <center>
                
            <table height="600" width="1000" cellPadding="1px" cellSpacing="1px">
                <tr>
            <td><Users/></td>
            <td><Posts/></td>
            </tr>
            <tr>
            <td><Comments/></td>
            <td><Todo/></td>
            </tr>
            </table>
            
            </center>
        </div>

    )
}
export default Admin;