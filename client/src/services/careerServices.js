export async function create(careerData) {
    try {
        const response = await fetch('http://localhost:3030/jsonstore/careers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(careerData)
        });

        if (response.ok === false) {
            const error = await response.json;
            throw new Error(error.message);
        }

        const result = await response.json();
        return result;
    } catch (error) {
        alert(error.message);
        throw error.message
    }
}

export async function update(careerId, careerData) {
    try {
        const response = await fetch('http://localhost:3030/jsonstore/careers/' + careerId, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(careerData)
        });

        if (response.ok === false) {
            const error = await response.json;
            throw new Error(error.message);
        }

        const result = await response.json();
        return result;
    } catch (error) {
        alert(error.message);
        throw error.message
    }
}