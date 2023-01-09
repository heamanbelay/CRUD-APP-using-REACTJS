import React, { useState }from 'react'
import {Button , Table, Form} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Fruit from './Fruit'
import {v4 as uuid} from 'uuid'
import {Link, useNavigate} from 'react-router-dom'

function Create(){

    const[Name, setName] = useState("")
    const[quantity, setQuantity] = useState("")

    let history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const ids = uuid();
        let uniqueId = ids.slice(0,9);

        let newF= Name,
        newQ=quantity;

        Fruit.push({id: uniqueId, Name: newF, quantity: newQ})

        history('/')

    }

    return <div>

        <Form className="d-grid gap-2" style={{margin:"10rem"}}>
        <h2 style={{margin:"2rem", align:"center"}} > Creating new List </h2>

            <Form.Group className="mb-3" controlId="formName">
                <Form.Control type="text" placeholder="Enter the name of a fruit you want to add" required onChange={(e) => setName(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formQuantity">
                <Form.Control type="integer" placeholder="Enter the Quantity of a fruit you want to add" required onChange={(e) => setQuantity(e.target.value)}>
                </Form.Control>
                <br></br>
            <Button type="Submit" onClick={(e) => handleSubmit(e)}>Submit</Button>
            </Form.Group>
        </Form>
    </div>
}
export default Create