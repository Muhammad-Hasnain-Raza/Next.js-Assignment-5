import React from 'react';
import Header from "../components/header";
import Image from "next/image";



function index() {
  return (
    <div >
      <Header/>
      <div className="flex">
        <div className=" w-1/2 flex flex-col item-start  mt-[100px] ml-[180px]">
          <h1 className="text-[40px] font-[Libre Bodoni]">IMPECCABLE CRAFTSMANSHIP AND FINESSE</h1>
          <p className="text-[22px] w-[571px]  text-[#787054] font-[Libre Bodoni] mt-8">An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.</p>
          <button className=" bg-[#787054] text-[white] font-[Libre Bodoni] w-[200px] h-[50px] mt-8 rounded-md">Explore Now</button>
        </div>
        <div className=" w-1/2 flex justify-center mt-20">
          <Image src={"/images/demo.png"} alt="image" width={300} height={200} 
          />
        </div>
      </div>
    </div>
  )
}

export default index
