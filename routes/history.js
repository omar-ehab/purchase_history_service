const express = require("express")
const router = express.Router();

const historyController = require('../controllers/HistoryControllers');

//show all history
router.get('/', historyController.index);
//create history
router.post('/', historyController.store);

module.exports = router;