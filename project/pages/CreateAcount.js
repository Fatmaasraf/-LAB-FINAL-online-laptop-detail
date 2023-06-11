import React from 'react';
import { useEffect, useState } from "react";
import axios from 'axios'

const CreateAcount = () => {



  const [account,setAcount]=useState({A_Username:'',A_Password:'',A_AcountNumber:''})
    const onChangeHandler=(e)=>{
        setAcount({...account, [e.target.name]:e.target.value})
       

    }
    const onSubmitHander=async(e)=>{
        e.preventDefault();


    const config={
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }

    }
    try{

        const {data}=await axios.post('http://localhost:5000/api/addUser',account,config)
        setAcount({A_Username:'',A_Password:'',A_AcountNumber:''})
    }catch(error){
        console.log(error)
    }



    }





  return (
    <div className="mx-auto max-w-5xl bg-white">
      <div className=" flex items-center justify-center text-5xl  text-black font-bold ">
        Create Acount
      </div>
      <br />
      <p className=" flex items-center justify-center"> Login / Register </p>
      <br />
      <br />

      <div className="flex gap-2">
        <div className="w-1/2">
          <div className="text-3xl"> Login </div>
          <br />

          <div className="p-3 border  border-black ">
            <div className="flex flex-col">
              <label className="label">Username and email*</label>

              <input
                type="text"
                name=""
                placeholder="Enter your username"
                className="border border-black"
                required
              />
            </div>
            <br />

            <div className="flex flex-col">
              <label className="label">Password *</label>
              <input
                type="text"
                name=""
                placeholder="Enter your password"
                className="border border-black"
                required
              />
            </div>
            <br />

            <div className="flex flex-col">
              <label className="label">Acount Number *</label>

              <input
                type="text"
                name=""
                placeholder="C-XXX-00-00000"
                className="border border-black"
                required
              />
            </div>
            <br />

            <div className="flex justify-between items-center">
              <h2>Lost your password?</h2>

              <div className="flex space-x-2 self-center items-center">
                <p>Remember me</p>

                <button className="bg-black text-white p-3 px-5 rounded-full">
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/2">
          <div className="text-3xl">Register</div>
          <br />

          <div className="p-3 border  border-black">
            <div className="flex flex-col">
              <label className="label"> Email adress *</label>
              <input
              onChange={onChangeHandler}
                type="text"
                name="A_Username"
                placeholder="Enter your email address"
                className="border border-black"
                required
                value={account.A_Username}
              />
            </div>
            <br />

            <div className="flex flex-col">
              <label className="label">Password*</label>
              <input
              onChange={onChangeHandler}
                type="text"
                name="A_Password"
                placeholder=" Enter your password"
                className="border border-black"
                required
                value={account.A_Password}
              />
            </div>
            <br />

            <div className="flex flex-col">
              <label className="label">Acount Number *</label>

              <input
                type="text"
                onChange={onChangeHandler}
                name="A_AcountNumber"
                placeholder="C-XXX-00-00000"
                className="border border-black"
                required
                value={account.A_AcountNumber}
              />
            </div>
            <br />

            <div className="flex justify-between items-center">
              <h2></h2>

              <div className="flex space-x-2 self-center items-center">
                <p></p>
                <button onClick={onSubmitHander} className="bg-black  text-white rounded-full px-5 p-3">
                  {" "}
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAcount;

    
