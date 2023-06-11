const express=require('express')
const router=express.Router()
const {addUser , getAllUsers} =require('../controllers/addUser')
const {addContact} = require('../controllers/addContact')
const {newProduct, getAllProducts} =require('../controllers/addProduct')


router.route('/addUser').post(addUser)
router.route('/getAllUsers').get(getAllUsers)

router.route('/addContact').post(addContact)

router.route('/addproduct').post(newProduct)
router.route('/getAllProducts').get(getAllProducts)

module.exports=router