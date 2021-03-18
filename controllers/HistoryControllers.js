const { History } = require('../models')

//show all history
const index = async (req, res) => {
    try {
        const history = await History.findAll()

        return res.json(history)

    } catch (err) {
        console.log(err)
        return res.status(500).json({ error: 'something went WRONG' })
    }
}

//create history
const store = async (req, res) => {
    const { wallet_id, amount, type, other_id } = req.body

    try {
        const history = await History.create({ wallet_id, amount, type, other_id })

        return res.json(history)

    } catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }
}

module.exports = {
    index,
    store
};