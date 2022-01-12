import Head from "next/head";
import Image from "next/image";
import { AllContacts } from "../lib/components/AllContacts";
import { ContactForm } from "../lib/components/ContactForm";
import { IColumn, TwoColumns } from "../lib/components/Layout";
import { SearchForm } from "../lib/components/SearchForm";

export default function Home() {
    return (
        <TwoColumns>
            <IColumn>
            <h1>Add new contact</h1>
            <ContactForm />
            </IColumn>
            <IColumn>
                <h1>Search for contact</h1>
                <SearchForm />
            </IColumn>
            <IColumn>
                <h1>All contacts</h1>
                <AllContacts />
            </IColumn>
        </TwoColumns>
    );
}
