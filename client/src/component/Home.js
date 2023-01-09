import React, { Fragment }from 'react'
import {Button , Table} from 'react-bootstrap'
import Fruit from './Fruit'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link, useNavigate} from 'react-router-dom'

function Home() {

    let history = useNavigate();

    const handleEdit = (id ,name ,quantity) =>{
        localStorage.setItem('Name',name)
        localStorage.setItem('Quantity',quantity)
        localStorage.setItem('Id',id)
      }

    const handleDelete = (id) => {
        var index = Fruit.map(function(e) {
                return e.id
     } ) .indexOf(id);
         
             Fruit.splice(index,1);

             history('/')
    }

    return(
        <Fragment>
            <div style={{margin:"5rem"}}>
            <h2 style={{margin:"2rem", align:"center"}}>Home page </h2>

                 <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>
                                Fruit Name
                            </th>
                            <th>
                                Quantity
                            </th>
                            <th>
                                Actions
                            </th>
                         </tr>
                    </thead>

                    <tbody>
                    {
                     Fruit && Fruit.length > 0
                          ?
                          Fruit.map((item)=>{
                            return(
                                <tr>
                                   <td>{item.Name}</td>
                                   <td>{item.quantity}</td>
                                   
                                   <td>
                                    <Link to={'/edit'}>
                                    <Button onClick={()=> handleEdit(item.id, item.Name, item.quantity)}>Edit</Button></Link>
                                        &nbsp;
                                    <Button onClick={()=> handleDelete(item.id)}>Delete</Button></td>
                                </tr>
                             )
                          })
                          :
                             null
                    }
                    </tbody>
                 </Table>
                 <br></br>
                 <Link to={'/create'}>
                    <Button size='medium'>Create</Button>
                 </Link>
                 

            </div>

        </Fragment>
    )
   
  

}
export default Home
