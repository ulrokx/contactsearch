import {Form, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
export const ContactForm = () => {
    const handleSubmit = async (event) => {
        event.preventDefault();
        document.getElementById("contact-form").reset();
        const form = new FormData(event.target)
        const formData = Object.fromEntries(form.entries());

        console.log(formData);

        const res = await fetch('/api/contact', {
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        });
        const result = await res.json();
    }

    return(
<Form onSubmit={handleSubmit} id="contact-form">
    <Form.Group className="mb-3">
        <Form.Label>First name</Form.Label>
        <Form.Control name="first" type="text" placeholder="Enter first name"/>
    </Form.Group>
    <Form.Group className="mb-3">
        <Form.Label>Last name</Form.Label>
        <Form.Control name="last" type="text" placeholder="Enter last name"/>
    </Form.Group>
    <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control name="email" type="text" placeholder="Enter email"/>
    </Form.Group>
    <Form.Group className="mb-3">
        <Form.Label>Phone number</Form.Label>
        <Form.Control name="phone" type="tel" placeholder="Enter phone number"/>
    </Form.Group>
    <Form.Group className="mb-3">
        <Form.Label>Importance</Form.Label>
        <Form.Control name="importance" type="text" placeholder="Enter importance"/>
    </Form.Group>
    <Button type="submit" variant="primary">Submit</Button>
</Form>
    )
}