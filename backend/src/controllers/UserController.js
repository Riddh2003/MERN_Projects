const getAllUsers = (req, res) => {
    var users = [
        {
            id: 1,
            name: 'Riddh'
        },
        {
            id: 2,
            name: 'Sumit'
        }
    ]
    res.json({
        message: "User Fetch.........",
        data: users
    })
}

module.exports = {
    getAllUsers
}