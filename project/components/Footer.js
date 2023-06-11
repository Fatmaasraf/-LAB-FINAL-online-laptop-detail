import React from "react";

const Footer = () => {
  return (
    <footer class="p-4 bg-black rounded-lg shadow md:px-6 md:py-8 dark:bg-white">
      <div class="sm:flex sm:items-center sm:justify-between">
        <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0">
         
          <span class="self-center text-2xl font-semibold whitespace-nowrap text-white"></span>
          
        
          <div className="p-5">
            <p className="text-white font-bold text-2xl pb-4 ">Contact Info</p>
            <p className="text-white text-md pb-2 dont-semibold hover:text-red cursor-pointer">
              Email:{" "}
            </p>
            <p className="text-white text-md pb-2 dont-semibold hover:text-red cursor-pointer">
              fatimaashraf0098@gmail.com
            </p>
            <p className="text-white text-md pb-2 dont-semibold hover:text-red cursor-pointer">
              Whatsapp:{" "}
            </p>
            <p className="text-white text-md pb-2 dont-semibold hover:text-red cursor-pointer">
              0800-000112233
            </p>
            <p className="text-white text-md pb-2 dont-semibold hover:text-red cursor-pointer">
              WORKING DAYS/HOURS:{" "}
            </p>
            <p className="text-white text-md pb-2 dont-semibold hover:text-red cursor-pointer">
              Mon - Sat / 11:00 AM - 8:00 PM{" "}
            </p>
          </div>
        </a>

        <div className="p-5">
            <p className="text-white font-bold text-2xl pb-4 ">PRICE CAUTION</p>
            <p className="text-white text-md pb-2 dont-semibold hover:text-red cursor-pointer">
            Please confirm price before placing an order to avoid inconvenience.
            </p>


            <p className="text-white font-bold text-2xl pb-4 "> Policy</p>
            <p className="text-white text-md pb-2 dont-semibold hover:text-red cursor-pointer">
            Waranty
            </p>
            <p className="text-white text-md pb-2 dont-semibold hover:text-red cursor-pointer">
            Refund & Exchange
            </p>
            <p className="text-white text-md pb-2 dont-semibold hover:text-red cursor-pointer">
            Security & Privacy
            </p>
           
           
            </div>



        <ul class="flex flex-wrap  mb-6 text-sm items-end text-white  mt-52">
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6 ">
              Information
            </a>
          </li>
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6 ">
              Licensing
            </a>
          </li>
          <li>
            <a href="#" class="hover:underline">
              Terms and Conditions
            </a>
          </li>
        </ul>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span class="block text-sm text-white sm:text-center ">
        © 2022{" "}
        <a href="https://flowbite.com/" class="hover:underline">
          Laptop store™
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
