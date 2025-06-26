const jwt = require('jsonwebtoken')
const { Cart } = require('../model/Cart')
const { User } = require('../model/User')
const { Product } = require('../model/Product')


const cart = async (req, res) => {
    try {
        const { token } = req.headers
        const decodedToken = jwt.verify(token, "supersecret")
        const user = await User.findOne({ email: decodedToken.email }).populate({
            path: 'cart',
            populate: {
                path: 'products',
                model: 'Product'
            }
        })

        if (!user) {
            res.status(400).json({ message: "user not found" })
        }
        res.status(200).json({
            message: "cart created successfully!!",
            cart: user.cart

        })
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal server error" })
    }
}

const addToCart = async (req, res) => {
    try {

        let { token } = req.headers
        let { productID, quantity } = req.body
        let decodedToken = jwt.verify(token, "supersecret")
        let user = await User.findOne({ email: decodedToken.email })

        if (!productID || !quantity) {
            res.status(400).json({ message: "Product or Quantity is missing!!" })
        }

        if (user) {

            let product = await Product.findById(productID)
            const cart = await Cart.findOne({ _id: user.cart_id })

            if (cart) {
                const exits = cart.products.some((p) => {
                    p.product.toString() === productID.toString()
                })

                if (exits) {
                    return res.status(409).json({ message: "go to cart" })
                }

                cart.products.push({ product: productID, quantity })
                cart.total += product.price * quantity
                await cart.save()

            } else {
                const newCart = await Cart.create({
                    products: [
                        {
                            products: productID,
                            quantity: quantity
                        }
                    ],
                    total: product.price * quantity
                })
                user.cart = newCart._id
                await user.save()
            }

            return res.status(200).json({
                message: "Product added to cart"
            })

        }

        if (!user) {
            res.status(400).json({ message: "user not found" })
        }



    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal server error" })
    }
}


module.exports = { cart, addToCart }