const express = require("express");
const { sequelize } = require("./models");
const historyRoute = require("./routes/history")

const app = express();
app.use(express.json())

const PORT = 5000;

//history routes
app.use('/history', historyRoute)


app.listen(PORT, async () => {
    console.log(`Server up on http://localhost:${PORT}`)
    await sequelize.authenticate()
    console.log('Database Connected')
});
