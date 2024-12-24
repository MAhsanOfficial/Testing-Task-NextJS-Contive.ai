// import Image from "next/image";
// import { TbShoppingCartCheck } from "react-icons/tb";

// export default function Home() {
//   return (
//    <>

//    <div className="w-full flex ">

//     <div className="flex relative right-32 text-white ">
//       <Image src={'/images/delivery-men.png'} className="w-[590px] relative left-12 h-[500px]"  alt="main" width={800} height={800}/>
//       <div className="rounded-[50%] w-[756px] h-44 bg-orange-500 relative right-40  top-10">
//         <h2 className="flex justify-center text-3xl mt-5 font-bold"> HIGH</h2>
//         <h2 className="flex justify-center text-3xl font-bold"> Quality</h2>
//         <h6  className="flex justify-center ">FBA Prep Services</h6>
//       </div>
//     </div>

//     <div className="text-black relative right-52  top-1">

// <h5 className="text-orange-500 font-bold">__ABOUT</h5><br />
// <h5 className="text-black font-bold  text-4xl">WHAT WE DO</h5><br />
// <p className="font-semibold">Empire FBA Prep Services In USA &Canada specializes in providing world class prep solutions for your Amazon FBA business </p>
// <br />

// <div className="flex">
//   <div className="bg-slate-100 rounded-[50%] w-16 h-16 px-4 pt-4 "><TbShoppingCartCheck  className="w-7 h-7"/></div>
//   <div className="flex flex-col ">
//   <h3 className="ml-5 text-1xl font-bold">RECEIVE YOUR INVENTORY</h3>
//                     <p className="w-[510px] ml-5">Send your products, packaging, and inserts directly to one of our  <br/>three locations
//       strategically located in California, New York, or <br/> Toronto, Canada</p>
//   </div>
// </div>
// <br />
// <div className="border-[1px] w-[550px]"></div>

// <br />
// <div className="flex">
//   <div className="bg-slate-100 rounded-[50%] w-16 h-16 px-4 pt-4 "><TbShoppingCartCheck  className="w-7 h-7"/></div>
//   <div className="flex flex-col ">
//   <h3 className="ml-5 text-1xl font-bold">PREP AND LABEL</h3>
//                     <p className="w-[510px] ml-5">Our team will inspect all items before carefully wrapping, adding <br/> inserts, packing, 
//                     and attaching all the necessary labels required for <br/> delivery and receipt by Amazon</p>
//   </div>
// </div>

// <br />

// <div className="border-[1px] w-[550px]"></div>

// <br />

// <div className="flex">
//   <div className="bg-slate-100 rounded-[50%] w-16 h-16 px-4 pt-4 "><TbShoppingCartCheck  className="w-7 h-7"/></div>
//   <div className="flex flex-col ">
//   <h3 className="ml-5 text-1xl font-bold">SHIP TO AMAZON</h3>
//                     <p className="w-[510px] ml-5">Our staff of trained experts will complete your shipping plan,<br/> arrange pickup,
//                     and delivery directly to your assigned Amazon <br/> fulfillment center.</p>
//   </div>
// </div>


//     </div>
  
  
  
//    </div>
//    </>
//   );
// }


'use client'
import React from "react";
import Image from "next/image";
import { TbShoppingCartCheck } from "react-icons/tb";
import { PiJarLabel } from "react-icons/pi";
import { MdOutlineLocalShipping } from "react-icons/md";

export default function Home() {
  return (
    <>
      <div className="w-full flex flex-col lg:flex-row items-center lg:items-start">
      
        <div className="flex flex-col lg:flex-row relative lg:right-32 text-white items-center lg:items-start">
          <Image
            src={'/images/delivery-men.png'}
            className="w-[590px] h-[500px] relative lg:left-12"
            alt="main"
            width={800}
            height={800}
          />
          <div className="rounded-full w-[300px] h-[300px] sm:w-[400px] lg:relative lg:right-40 sm:h-[400px] lg:w-[756px] lg:h-44 bg-orange-500 relative top-5 lg:top-10 flex flex-col items-center justify-center mx-auto lg:mx-0">
  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mt-2 lg:mt-5">HIGH</h2>
  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center">Quality</h2>
  <h6 className="text-sm sm:text-base text-center">FBA Prep Services</h6>
</div>

        </div>

       
        <div className="text-black relative lg:right-52 top-5 lg:top-1 w-full lg:w-auto px-4 lg:px-0">
          <h5 className="text-orange-500 font-bold">__ABOUT</h5><br />
          <h5 className="text-black font-bold text-4xl mt-2">WHAT WE DO</h5>
          
<p className="font-semibold mt-2 text-sm sm:text-base lg:text-medium leading-5 sm:leading-6 lg:leading-7 text-center lg:text-left">
  Empire FBA Prep Services In USA & Canada specializes in providing world-class prep solutions for your Amazon FBA business.
</p>

        
          <div className="mt-9">
           
            <div className="flex items-start">
              <div className="bg-slate-100 rounded-full w-16 h-16 flex justify-center items-center">
                <TbShoppingCartCheck className="w-7 h-7" />
              </div>
            

<div className="flex flex-col">
  <h3 className="ml-5 text-lg sm:text-xl lg:text-1xl font-bold">
    RECEIVE YOUR INVENTORY
  </h3>
  <p className="ml-5 text-sm sm:text-base lg:text-base leading-5 sm:leading-6 lg:leading-7 w-full sm:w-[450px] lg:w-[510px]">
    Send your products, packaging, and inserts directly to one of our <br /> three locations strategically located in California, New York, or <br /> Toronto, Canada.
  </p>
</div>

            </div>

           

            <div className="border-t-[1px] border-gray-300 my-6 w-full sm:w-[450px] lg:w-[550px]"></div>

        
            <div className="flex items-start">
              <div className="bg-slate-100 rounded-full w-16 h-16 flex justify-center items-center">
                <PiJarLabel className="w-7 h-7" />
              </div>
             

<div className="flex flex-col">
  <h3 className="ml-5 text-lg sm:text-xl lg:text-1xl font-bold">
    PREP AND LABEL
  </h3>
  <p className="ml-5 text-sm sm:text-base lg:text-base leading-5 sm:leading-6 lg:leading-7 w-full sm:w-[450px] lg:w-[510px]">
    Our team will inspect all items before carefully wrapping, adding <br /> inserts, packing, and attaching all the necessary labels required for <br /> delivery and receipt by Amazon.
  </p>
</div>


            </div>

           

            <div className="border-t-[1px] border-gray-300 my-6 w-full sm:w-[450px] lg:w-[550px]"></div>

          
            <div className="flex items-start">
              <div className="bg-slate-100 rounded-full w-16 h-16 flex justify-center items-center">
                <MdOutlineLocalShipping className="w-7 h-7" />
              </div>
             
<div className="flex flex-col">
  <h3 className="ml-5 text-lg sm:text-xl lg:text-1xl font-bold">
    SHIP TO AMAZON
  </h3>
  <p className="ml-5 text-sm sm:text-base lg:text-base leading-5 sm:leading-6 lg:leading-7 w-full sm:w-[450px] lg:w-[510px]">
    Our staff of trained experts will complete your shipping plan, <br /> arrange pickup, and delivery directly to your assigned Amazon <br /> fulfillment center.
  </p>
</div>
    
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
