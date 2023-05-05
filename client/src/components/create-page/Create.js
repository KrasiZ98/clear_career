import useFormCreate from "../../hooks/useFormCreate"

export const Create = () => {
    const { value, setValue, changeValue, onSubmit } = useFormCreate();

    return (
        <section id="create">
            <div className="form">
                <h2>Create Offer</h2>
                <form className="create-form" onSubmit={onSubmit}>
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