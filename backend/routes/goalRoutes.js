const express = require('express')
const {getGoals, createGoals, updateGoal,deleteGoal}  = require('../controllers/goalController.js')


const router = express.Router();

router.route("/").get(getGoals).post(createGoals)
router.route('/:id').put(updateGoal).delete(deleteGoal)


module.exports = router