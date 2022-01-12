import { useEffect, useState } from "react"
import {ListGroup, ListGroupItem} from 'react-bootstrap'
import {ContactItem} from './ContactItem'

export const AllContacts = () => {
    const [contacts, setContacts] = useState([]);
    useEffect(async () => {
        const res = await fetch("/api/allContacts");
        const items = await res.json();
        setContacts(items['contacts']);
    }, [])
    return(
        <ListGroup>
            {contacts.length ? contacts.map(c => 
                <ListGroupItem key={c.entityId}>
                    <ContactItem c={c} />
                </ListGroupItem>) : "no contacts exists"}
        </ListGroup>
    )
}