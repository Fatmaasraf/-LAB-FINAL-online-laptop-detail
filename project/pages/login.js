import React from 'react'

const login = () => {
  return (
    // <form className="bg-yellow-300 h-12 w-full border-3 flex  text-center">
    // <div>
    //   {" "}
    //   <h1 className=" flex items-center justify-center text-3xl  text-red-700 font-bold ">
    //     USER FORM{" "}
    //   </h1>{" "}
    // </div>

    

    
    // </form>
    <div className="mx-auto max-w-5xl bg-white">
    <div className=" flex items-center justify-center text-5xl  text-red-700 font-bold ">
      USER FORM
    </div>
    <div className="flex flex-col">
              <label className="label">Enter Name *</label>

              <input
                type="text"
                name=""
                placeholder=""
                className="border border-black"
                required
              />
               <div className="flex flex-col">
              <label className="label">Password *</label>
              <input
                type="password"
                name=""
                placeholder=""
                className="border border-black"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="label">Enter Address</label>
              <input
                type="text"
                name=""
                placeholder=""
                className="border border-black"
                required
              />
               <div className="flex flex-col">
              <label className="label">Select games</label>
              <input
                type="text"
                name=""
                placeholder=""
                className="border border-black"
                required
              />
               <div className="flex flex-col">
              <label className="label">Gender</label>
              <input
                type="text"
                name=""
                placeholder=""
                className="border border-black"
                required
              />
               <div className="flex flex-col">
              <label className="label">Select your  age</label>
              <input
                type="text"
                name=""
                placeholder="select"
                className="border border-black"
                required
              />
            </div>
            <button className="bg-gray-200 text-black rounded-full px-2 p-3">
                  {" "}
                  Click Me
                </button>
                <button className="bg-gray-200  text-black rounded-full px-2 p-3">
                  {" "}
                  Submit
                </button>
                <br/>
                <button className="bg-gray-200 text-black rounded-full px-2 p-3">
                  {" "}
                  Submit form
                </button>
            </div>
            </div>
            </div>
            </div>
    </div>
    
    
    
  )
}

export default login