import React, { useEffect, useState }from 'react'
import {Button , Table, Form} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Fruit from './Fruit'
import {v4 as uuid} from 'uuid'
import {Link, useNavigate} from 'react-router-dom'

function Edit() {
  
    const [name, setName] = useState("")
    const [quantity, setQuantity] = useState("")
    const [id, setId] = useState("")

    let history = useNavigate();

    var index = Fruit.map(function(e) {
        return e.id
} ) .indexOf(id);
 
const handleSubmit = (e) => {
    e.preventDefault();

    let a= Fruit[index];
    a.Name= name
    a.quantity= quantity


    history('/')

}
useEffect(() => {
    setName(localStorage.getItem('Name'))
    setQuantity(localStorage.getItem('Quantity'))
    setId(localStorage.getItem('Id'))

},[])

return <div>

<Form className="d-grid gap-2" style={{margin:"10rem"}}>
<h2 style={{margin:"2rem"}} > Editing Page </h2>

    <Form.Group className="mb-3" controlId="formName">
        <Form.Control type="text" placeholder="Edit the name of a fruit" value={name} required onChange={(e) => setName(e.target.value)}>
        </Form.Control>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formQuantity">
        <Form.Control type="integer" placeholder="Edit the Quantity of a fruit"  value={quantity} required onChange={(e) => setQuantity(e.target.value)}>
        </Form.Control>
           <br></br>
    <Button type="Submit" onClick={(e) => handleSubmit(e)}>Update</Button>
    </Form.Group>
  </Form>
</div>
}

export default Edit