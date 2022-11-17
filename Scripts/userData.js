async function pushUsers(newUser) {
    await fetch("http://localhost:3000/users", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(newUser)
    })
    .then(response => response.json())

}

export default await fetch("http://localhost:3000/users")
    .then(response => response.json())

export { pushUsers };