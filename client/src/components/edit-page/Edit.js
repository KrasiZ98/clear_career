import { useContext } from "react";
import { Navigate, useParams } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext";
import useFormEdit from "../../hooks/useFormEdit"

export const Edit = () => {
    const params = useParams();
    const { user } = useContext(AuthContext);
    const { value, setValue, changeValue, onSubmit, current } = useFormEdit(params.id);
  
 
    return (
        <section id="edit">
            <div className="form">
                <h2>Edit Offer</h2>
                <form className="edit-form" onSubmit={onSubmit}>
                    <input
                        type="text"
                        name="title"
                        id="job-title"
                        placeholder="Title"
                        value={value.title}
                        onChange={changeValue}
                    />
                    <input
                        type="text"
                        name="imageUrl"
                        id="job-logo"
                        placeholder="Company logo url"
                        value={value.imageUrl}
                        onChange={changeValue}
                    />
                    <input
                        type="text"
                        name="category"
                        id="job-category"
                        placeholder="Category"
                        value={value.category}
                        onChange={changeValue}
                    />
                    <textarea
                        id="job-description"
                        name="description"
                        placeholder="Description"
                        rows="4"
                        cols="50"
                        value={value.description}
                        onChange={changeValue}
                    ></textarea>
                    <textarea
                        id="job-requirements"
                        name="requirements"
                        placeholder="Requirements"
                        rows="4"
                        cols="50"
                        value={value.requirements}
                        onChange={changeValue}
                    ></textarea>
                    <input
                        type="text"
                        name="salary"
                        id="job-salary"
                        placeholder="Salary"
                        value={value.salary}
                        onChange={changeValue}
                    />

                    <button type="submit">post</button>
                </form>
            </div>
        </section>
    )
}