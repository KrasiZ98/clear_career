import { Link } from "react-router-dom"

export const CareerItem = ({career}) => {
    return (
        <div className="offer">
            <img src={career.imageUrl} alt="example1" />
            <p>
                <strong>Title: </strong><span className="title">{career.title}</span>
            </p>
            <p><strong>Salary:</strong><span className="salary">{career.salary}</span></p>
            <Link className="details-btn" to={`/details/${career._id}`} >Details</Link>
        </div>
    )
}