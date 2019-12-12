
import React, { useState } from 'react'

export default function Form() {

    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(firstName)
    }

    return (
        <div className="container-fluid">
            <br/>
            <div className="form-row">
                <div className="col-12 col-md-2">
                    <label>Nome</label>
                    <input type="text" className="form-control"/>
                </div>
                <div className="col-12 col-md-4">
                    <label>Nome do Pai</label>
                    <input type="text" className="form-control"/>
                </div>
            </div>
        </div>
    )
}