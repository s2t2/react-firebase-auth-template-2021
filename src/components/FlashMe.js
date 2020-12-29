
import React, {useState, useRef} from 'react'
import {Alert, Container, Button, Card, Form} from 'react-bootstrap'

export default function FlashMe() {

    const messageRef = useRef()
    const variantRef = useRef()

    function handleSubmit(event){
        event.preventDefault()

        console.log("SETTING FLASH...")
        console.log("MESSAGE:", messageRef.current.value)
        console.log("VARIANT:", variantRef.current.value)
    }

    return (
        <Card style={{ maxWidth: "400px", marginTop: "50px"}}>
            <Card.Body>
                <h2 className="text-center mb-4">Flash Form</h2>

                <Form onSubmit={handleSubmit}>
                    <Form.Group id="message">
                        <Form.Label>Message</Form.Label>
                        <Form.Control type="text" ref={messageRef} required />
                    </Form.Group>

                    <Form.Group id="variant">
                        <Form.Label>Variant</Form.Label>
                        <Form.Control type="text" ref={variantRef} required />
                    </Form.Group>

                    <Button className="w-100" type="submit" onClick={handleSubmit}>
                        Set Flash
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    )
}
