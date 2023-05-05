import { useContext } from "react";
import { Link, useParams } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext";
import useGetOneById from "../../hooks/useGetOneById"

export const Details = () => {
    const params = useParams();

    const { user } = useContext(AuthContext);

    const [career, setCareer] = useGetOneById(params.id);

    const isOwner = user._id === career._ownerId;
    console.log(isOwner, user._id)

    return (

        <section id="details">
            <div id="details-wrapper">
                <img id="details-img" src={career.imageUrl} alt="example1" />
                <p id="details-title">{career.title}</p>
                <p id="details-category">
                    Category: <span id="categories">{career.category}</span>
                </p>
                <p id="details-salary">
                    Salary: <span id="salary-number">{career.salary}</span>
                </p>
                <div id="info-wrapper">
                    <div id="details-description">
                        <h4>Description</h4>
                        <span
                        >{career.description}</span>
                    </div>
                    <div id="details-requirements">
                        <h4>Requirements</h4>
                        <span
                        >{career.requirements}</span>
                    </div>
                </div>


                {/* <!--Edit and Delete are only for creator--> */}
                {isOwner && <div id="action-buttons">
                    <Link to={`/edit/${career._id}`} id="edit-btn">Edit</Link>
                    <Link to={`/delete/${career._id}`} id="delete-btn">Delete</Link>

                    {/* <!--Bonus - Only for logged-in users ( not authors )--> */}

                </div>}

            </div>
        </section>

    )
}