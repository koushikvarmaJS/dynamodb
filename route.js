const express = require('express')
const router = express.Router()
const controller = require('./controller')

router.get('/recents',controller.getRecentTransactions)
router.post('/expense',controller.addNewExpense)
router.put('/income',controller.addIncome)

module.exports = router