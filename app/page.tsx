import Image from "next/image";
import building from "@/public/2.jpg"
import Triange from "@/public/triangle.svg"
import logo from "@/public/vercel.svg"
import Link from "next/link";

export default function Home() {
  return (
   
      <div className="content w-full h-svh">
        <header>
          <nav className="">
            <ul className="flex mx-[5%] h-[147px] items-center">
              <li className="w-[15%] border-r justify-center items-center flex border-black">
              <Image 
              src={logo}
              alt="1"
              width={130}
              height={130}
            />
              </li>
              <li className="w-[15%] text-center text-3xl">Something</li>
              <li className="w-[auto] flex-grow text-right"><p><span className="text-xs font-bold">Tél.</span> <Link href="#" className="text-xl">+00 00 000 00 00</Link><span className="text-xs font-bold">&nbsp;&nbsp;&nbsp; Mail.</span> 
              <Link href="#" className="text-xl pl-1">something@some.com</Link></p></li>
              <li className="w-[10%] justify-center items-center flex">
                <div className="w-12 h-12 border border-black rounded-full flex justify-center items-center transform transition-transform duration-300 ease-in hover:rotate-90">
                  <div>
                  <div className="w-4 border-b border-black m-1" />
                  <div className="w-4 border-b-2 border-gray-400 m-1" />
                  <div className="w-4 border-b border-black m-1" />
                  </div>
                  
                </div>
              </li>
            </ul> 
          </nav>
        </header>
        <section className="pb-12">
        <div className="flex h-svh w-full">
          <div className=" relative basis-[60%] ">
            <Image 
              src={building}
              alt="1"
              fill={true}
            />
            <div className="absolute inset-0 flex justify-start  items-center">
                <div className="content border uppercase bg-white rounded-r-full p-4">
                 <p className="border pl-10 pr-4 py-2 font-extralight border-black rounded-r-full -ml-8"><b className="font-bold">plus que 1 appartement disponible</b><br/>chantier en cours &gt; Livraison 09/2024<br/>visite possible sur rendez-vous</p>
                </div>
            </div> 
            <div className="absolute inset-0 flex justify-end transform translate-x-4 items-center">
                <div className="content border w-32 h-32 flex justify-center items-center rounded-full bg-white p-4">
                  <div className="border border-black p-8 rounded-full">
                  <Image
                  src={Triange}
                  alt="triange"
                  width={20}
                  height={20}
                  className="transform rotate-90"
                  /></div>
                </div>
            </div> 
          </div>
          <div className="basis-[20%]  px-8">
            <div className="relative w-full h-1/3 bg-gray-300">
            </div>
            <div className="flex justify-end mt-24 text-right">
                <div>
                <p className="uppercase font-extralight"><b className="font-bold">14 appartements</b><br/>ensoleillés au coeur<br/>de l’agglomération<br/>lausannoise</p>
              <div className="flex flex-col items-end space-y-2 my-12 mr-4">
               <div className="border-r border-black h-32 "></div>
               <hr className="w-8 absolute transform translate-x-4 translate-y-[120px] border-black"/>
                </div>
                <p className="uppercase font-thin text-lg text-green-400">Permis en force et exécutoire</p>
              </div>
            </div>
            <div className="button w-full uppercase font-extralight text-center border border-black py-2 mt-12"> Situation</div>
            {/* <p class="para-right"><img src="svg/deco-ligne2.svg" width="30px"></p>
            
            <a class="bouton-full" href="https://goo.gl/maps/esvvi9sCCZ3GnJtM6" target="blank"><p>situation</p></a> */}
          </div>
          <div className=" relative basis-[20%]">
            <Image
            src={building}
            alt="building"
            fill={true}
            />
          </div>
        </div>

        </section>
      </div>

  );
}
