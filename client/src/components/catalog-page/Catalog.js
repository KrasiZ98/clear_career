import { useContext } from "react"
import { CareerContext } from "../../context/CareereContext"
import { CareerItem } from "./CareerItem";

export const Catalog = () => {
    const { careers } = useContext(CareerContext);
    return (
        <section id="dashboard">
            <h2>Job Offers</h2>

            {/* <!-- Display a div with information about every post (if any)--> */}
            {careers.length > 0 ? careers.map(x => <CareerItem key={x._id} career={x}/>) : <h2>No offers yet.</h2>}

            {/* <!-- Display an h2 if there are no posts --> */}
            
        </section>
    )
}