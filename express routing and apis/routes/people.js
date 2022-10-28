const express = require('express')
const router = express.Router()

// let {people} = require('../data')

const {getPeople, createPeople, createPeople_EXAMPLE, updatePeople, deletePeople} = require('../controllers/people_controller.js')

router.get('', getPeople)
router.post('/',createPeople)
router.post('/example', createPeople_EXAMPLE)
router.put('/:id', updatePeople)
router.delete('/:id', deletePeople)


module.exports = router

