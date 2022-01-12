import { FormControl, ListGroup, ListGroupItem } from "react-bootstrap";
import { useState } from "react";
import { ContactItem } from "./ContactItem";

export const SearchForm = () => {
    const [hits, setHits] = useState([]);
    const search = async (event) => {
        const q = event.target.value;

        if (q.length > 2) {
            const params = new URLSearchParams({ q });
            console.log(params)

            const res = await fetch("/api/searchContacts?" + params);
            console.log("res", res)

            const result = await res.json();
            console.log("result:", result);
            setHits(result['results']);
        }
    };
    return (
        <>
        <FormControl
            size="md"
            onChange={search}
            type="text"
            placeholder="Search here"
            className="mb-3"
        />
        <ListGroup>
            {hits.length ? hits.map(h => 
                <ListGroupItem key={h.entityId}>
                    <ContactItem c={h} />
                </ListGroupItem>) : "no results found"}
        </ListGroup>
        </>
    );
};
