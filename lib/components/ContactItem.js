import { Card } from "react-bootstrap"

export const ContactItem = ({c}) => {
    return(
        <Card style={{ width: "18rem"}}>
            <Card.Body>
                <Card.Title>{c.first}</Card.Title>
                <Card.Subtitle>{c.last}</Card.Subtitle>
                <Card.Text>Importance: {c.importance}</Card.Text>
                <Card.Link href={`malito:${c.email}`}>{c.email}</Card.Link>
                <Card.Link href={`tel:${c.phone}`}>{c.phone}</Card.Link>
            </Card.Body>
        </Card>
    )
}