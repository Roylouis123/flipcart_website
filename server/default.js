import {products} from './constant/data.js'
import product from './model/product-schema.js'


const DefaultData =async () => {
    try {

       await product.insertMany(products)
        console.log('Data Inserted successfully')
    } catch (error) {
        console.log("Failed to insert Data")
    }
}

export default DefaultData