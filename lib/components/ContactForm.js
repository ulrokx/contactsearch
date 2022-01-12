import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import { Formik } from "formik";
import { object } from "yup";
import { string } from "yup";

const contactSchema = object({
    first: string().required(),
    last: string().required(),
    phone: string().required(),
    email: string().email().required(),
    importance: string().required(),
});

export const ContactForm = () => {
    return (
        <Formik
            validationSchema={contactSchema}
            onSubmit={async (values, actions) => {
                console.log(values);
                const res = await fetch("/api/contact", {
                    body: JSON.stringify(values),
                    headers: {
                        "Content-Type": "application/json",
                    },
                    method: "POST",
                });
                console.log(res);
                actions.resetForm();
            }}
            initialValues={{
                first: "",
                last: "",
                email: "",
                phone: "",
                importance: "",
            }}
        >
            {({ values, handleChange, touched, isValid, errors, handleSubmit }) => (
                <Form
                    noValidate
                    id="contact-form"
                    onSubmit={handleSubmit}
                >
                    <Form.Group className="mb-3">
                        <Form.Label>First name</Form.Label>
                        <Form.Control
                        value={values.first}
                            name="first"
                            type="text"
                            onChange={handleChange}
                            placeholder="Enter first name"
                            isValid={touched.first && !errors.first}
                        />
                        <Form.Control.Feedback>All good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control
                        value={values.last}
                            name="last"
                            onChange={handleChange}
                            type="text"
                            placeholder="Enter last name"
                            isValid = {touched.last && !errors.last}
                        />
                        <Form.Control.Feedback>All good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                        value={values.email}
                            name="email"
                            onChange={handleChange}
                            type="text"
                            isValid = {touched.email && !errors.email}
                            placeholder="Enter email"
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.email}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Phone number</Form.Label>
                        <Form.Control
                        value={values.phone}
                            name="phone"
                            type="tel"
                            isValid={touched.phone && !errors.phone}
                            onChange={handleChange}
                            placeholder="Enter phone number"
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.phone}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Importance</Form.Label>
                        <Form.Control
                        value={values.importance}
                            required
                            name="importance"
                            isValid={touched.importance && !errors.importance}
                            onChange={handleChange}
                            type="text"
                            placeholder="Enter importance"
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.importance}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Button type="submit" variant="primary">
                        Submit
                    </Button>
                </Form>
            )}
        </Formik>
    );
};
