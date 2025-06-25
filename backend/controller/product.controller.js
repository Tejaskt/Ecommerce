const { Product } = require('../model/Product')
const { User } = require('../model/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const product = async (req, res) => {

    try {
        const products = await Product.find({})
        return res.status(200).json({
            message: "All Products",
            products: products
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: "Internal server error" })
    }
}

const addProduct = async (req, res) => {
    try {
        let { name, price, image, description, brand, stock } = req.body
        let { token } = req.headers;
        let decodedToken = jwt.verify(token, "supersecret")
        console.log(decodedToken)
        let user = await User.findOne({ email: decodedToken.email })
        const product = await Product.create({
            name,
            price,
            image,
            description,
            brand,
            stock,
            user: user._id
        })

        return res.status(200).json({
            message: "Product created Successfully!!",
            product: product
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal server error" })

    }
}

const singleProduct = async (req, res) => {
    try {
        let { id } = req.params
        if (!id) {
            return res.status(400).json({ message: "Id not found" })
        }
        let { token } = req.headers
        const decodedToken = jwt.verify(token, "supersecret")
        const user = await User.findOne({ email: decodedToken.email })
        if (user) {
            const product = await Product.findById(id)

            if (!product) {
                res.status(400).json({ message: "Product Not Found!!" })
            }

            return res.status(200).json({
                message: "product found successfully",
                product: product
            })
        }



    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal server error" })
    }
}

const updateProduct = async(req,res)=>{
    try{
        let{id} = req.params
        let{name,price,image,description,stock,brand}=req.body
        let{token} = req.headers
    
        let decodedToken = jwt.verify(token,"supersecret")
        let user = await User.findOne({email:decodedToken.email})

        if(user){
            const productUpdate = await Product.findByIdAndUpdate(id,{
                name,price,brand,description,image,stock
            },{ new: true })

            return res.status(200).json({
                message:"Product Updated Successfully!!",
                product:productUpdate
            })
        }
    }catch(error){
        console.log(error)
        res.status(500).json({ message: "Internal server error" })
    }
}


const deleteProduct = async(req,res)=>{
    try{
        let{id} = req.params
        let{token} = req.headers
    
        let decodedToken = jwt.verify(token,"supersecret")
        let user = await User.findOne({email:decodedToken.email})

        if(user){
            const productDeleted = await Product.findByIdAndDelete(id)

            return res.status(200).json({
                message:"Product Deleted Successfully!!",
            })
        }
    }catch(error){
        console.log(error)
        res.status(500).json({ message: "Internal server error" })
    }
}

module.exports = { product, addProduct, singleProduct, updateProduct, deleteProduct }
