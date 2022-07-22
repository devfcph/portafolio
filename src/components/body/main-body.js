import React from "react";
import ContactForm from "../body/contact.form"
import Respositories from "../utils/repositories";

const HomeBody = () => (
    <div>
        <section className="bg-emerald-100">
            <ContactForm />
        </section>
        <section className="bg-orange-300">
            <Respositories />
        </section>
    </div>

);

export default HomeBody;