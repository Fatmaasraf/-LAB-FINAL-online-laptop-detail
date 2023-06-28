import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";


const Home = () => {
  useEffect(() => {
    getAllProdutcs();
  }, []);
  const [products, setProducts] = useState([]);
  const getAllProdutcs = async () => {
    const config = {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };
    try {
      const { data } = await axios.get(
        "http://localhost:5000/api/getAllProducts",
        config
      );
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h1 className=" text-4xl mt-6 font-bold mb-7  text-center">
        Our Laptops{" "}
      </h1>
      <div
        className="flex rounded-xl mt-4 flex-row flex-wrap  items-center justify-center "
        style={{ gap: "2rem" }}
      >
        {products &&
          products.map((item, index) => (
            <div key = {item.P_price}>
              <div className="bg-gray-100 rounded overflow-hidden shadow-lg max-w-sm ">
                <img
                  style={{ width: "300px" }}
                  src={item.P_images}
                  className="  h-52 w-full object-cover"
                  alt="fatima"
                  
                 
                />
                <div className="text-center my-2  ">
                  <strong className="font-bold">{item.P_name}</strong>
                  <p className="text-slate-500">{item.P_cat} </p>
                  <p key="  font-bold text-lg italic my-2">
                    RS: {item.P_price}
                  </p>
                   <a href="https://www.amazon.com/s?k=laptops&adgrpid=81905783912&hvadid=585362631999&hvdev=c&hvlocphy=9075148&hvnetw=g&hvqmt=b&hvrand=442424905030383175&hvtargid=kwd-10244650&hydadcr=22191_13333329&tag=hydglogoo-20&ref=pd_sl_859v2b1b7f_b">
                  <button  className=" bg-black font-bold text-white p-3 px-5 rounded-full">
                    Product detail
                  </button>
                  </a>
                
                  
                </div>
              </div>
            </div>
          ))}
      </div>
      <div
        id="carouselExampleCrossfade"
        class="carousel slide carousel-fade relative"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
          <button
            type="button"
            data-bs-target="#carouselExampleCrossfade"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCrossfade"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCrossfade"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner relative w-full overflow-hidden">
          <div class="carousel-item active float-left w-full">
            <img
              src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
              class="block w-full"
              alt="Wild Landscape"
            />
          </div>
          <div class="carousel-item float-left w-full">
            <img
              src=""
              class="block w-full"
              alt="Camera"
            />
          </div>
          <div class="carousel-item float-left w-full">
            <img src="" class="block w-full" alt="Exotic Fruits" />
          </div>
        </div>
        <button
          class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselExampleCrossfade"
          data-bs-slide="prev"
        >
          <span
            class="carousel-control-prev-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden"></span>
        </button>
        <button
          class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselExampleCrossfade"
          data-bs-slide="next"
        >
          <span
            class="carousel-control-next-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden"></span>
        </button>
      </div>
    </>






  );
};

export default Home;
