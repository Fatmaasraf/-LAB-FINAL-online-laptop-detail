import React, {useState} from 'react'
import axios from 'axios'
const Product = () => {
    const [Products,setPeoducts]=useState({P_name:'',P_price:'',P_quantity:'',P_cat:'',P_images:''})
    const onChangeHandler=(e)=>{
        setPeoducts({...Products, [e.target.name]:e.target.value})
        

    }
    const onSubmitHander=async(e)=>{
        e.preventDefault();
        console.log(Products)


    const config={
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }

    }
    try{

        const {data}=await axios.post('http://localhost:5000/api/addProduct',Products,config)
        console.log(data)
        setPeoducts({P_name:'',P_price:'',P_quantity:'',P_cat:'',P_images:''})
    }catch(error){
        console.log(error)
    }



    }

  return (
    
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
    <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-black lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-black underline uppercase decoration-wavy">
           ADD PRODUCTS
        </h1>
        <form className="mt-6" onSubmit={onSubmitHander}>
            <div className="mb-2">
                <label
                    for="Laptop Name"
                    className="block text-sm font-semibold text-gray-800"
                >
                    Laptop Name
                </label>
                <input name='P_name'
                    value={Products.P_name}
                    onChange={onChangeHandler}
                    type="text"
                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
            </div>
            <div className="mb-2">
                <label
                    for="Product Price"
                    className="block text-sm font-semibold text-gray-800"
                >
                    Laptop Price
                </label>
                <input name='P_price'
                value={Products.P_price}
                onChange={onChangeHandler}
                    type="number"
                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
            </div>
            <div className="mb-2">
                <label
                    for="Customer Name"
                    className="block text-sm font-semibold text-gray-800"
                >
                    Product quantity
                </label>
                <input name='P_quantity'
                value={Products.P_quantity}
                onChange={onChangeHandler}
                    type="text"
                    className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
            </div>
            <div className="mb-2">
                <label
                    for="Customer PhoneNo"
                    className="block text-sm font-semibold text-gray-800"
                >
                     product category
                </label>
                <input name='P_cat'
                value={Products.P_cat}
                onChange={onChangeHandler}
                    type="text"
                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
            </div>
            <div className="mb-2">
                <label
                    for="Address"
                    className="block text-sm font-semibold text-gray-800"
                >
                     image path
                </label>
                <input name='P_images'
                value={Products.P_images}
                onChange={onChangeHandler}
                    type="text"
                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
            </div>
            
           
            <div className="mt-6">
                <button type='submit' className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-black rounded-md hover:bg-gray-600 focus:outline-none focus:bg-purple-600">
                    + Ad Product
                </button>
            </div>
        </form>

       
    </div>
</div>
);
}


export default Product