"use client"
import Image from "next/image";
import { useState } from "react";
import localfont from "next/font/local";
import Typewriter from 'typewriter-effect';

const data = ["Yakinnn ???", "Jadi selama ini kamu ngasih nama palsuu ?", "Liarrr", "Penipuuuu"]
const dataImg = ['icegif2.gif', '2.gif','3.gif','4.gif','5.gif','6.gif','8.gif','9.gif','11.gif']
const dataImg2 = ['grad1.gif', 'grad4.gif', 'grad2.gif', 'grad3.gif', 'grad5.gif', 'grad6.gif']
const data2 = ["SELAMATTT DAPAT GELAR S. Pd", "Kamu hebat banget udah bisa sidang secepet ini", "Padahal kamu punya banyak kerjaan lain", "I'm very proud of you", "throughout heaven and earth, we are the honored one", "I also have a gift for you, i'll give when i'm recovered. I apologize that i can't come today"]

const dataImg3 = ['b1.gif', 'b2.gif', 'b3.gif', 'b4.gif', ]
const data3 = ['BTW HAPPYYYY BIRTHHH DAYYYYYYY', "CIYEEE YANG ULTAHHHH", "SEMOGA PANJANG UMURR", "SEMOGA SEHAT SELALU DAN DILANCARKAN REZEKINYA"]
const bgPage = ['bg-page1', 'bg-page2', 'bg-page3', 'bg-page4']

const vale = localfont(
  {
    src:'../public/fonts/valen.ttf'
  }
)


export default function Home() {
  const [noBG, setnoBG] = useState(0)
  const [noData, setNoData] = useState("NO!!!")
  const [noImg, setnoImg] = useState("icegif2.gif")
  const [noImg2, setnoImg2] = useState(dataImg2[0])
  const [nuimg2, setnuimg2] = useState(0)
  const [text2, setText2] = useState(data2[0])
  const [noImg3, setnoImg3] = useState(dataImg3[0])
  const [nuimg3, setnuimg3] = useState(0)
  const [text3, setText3] = useState(data3[0])
  const [isNo, setisNo] = useState(false)
  const [top, settop] = useState(0)
  const [left, setleft] = useState(0)
  const [isYes, setisYes] = useState(0)
  const noHandler = () => {
    let w = window.innerWidth;
    let h = window.innerHeight; 
    let newNoData = data[Math.floor(Math.random()*data.length)]
    let newNoImg = dataImg[Math.floor(Math.random()*dataImg.length)]
    let newTop2 = Math.random() / 1 * w
    let newLeft2 = Math.random() / 1 * h
    settop(newTop2 > 4/6 * h ? 5/6 * h : newTop2)
    setleft(newLeft2 > 4/6 * w ? 3/6 * w : newLeft2)
    setisNo(true)
    setNoData(newNoData)
    setnoImg(newNoImg)
  }
  const yesHandler = () => {
    let before = noBG
    setnoBG(before+1)
    setisYes(isYes+1)
  }
  const yesHandler2 = () => {
    if(nuimg2 < 5){
      setText2(data2[nuimg2+1])
      setnoImg2(dataImg2[nuimg2+1])
      setnuimg2(nuimg2+1)
    } else {
      setnoBG(noBG+1)
      setisYes(isYes+1)
    }
  }
  const yesHandler3 = () => {
    if(nuimg3 < 3){
      setText3(data3[nuimg3+1])
      setnoImg3(dataImg3[nuimg3+1])
      setnuimg3(nuimg3+1)
    } else {
      setnoBG(noBG+1)
      setisYes(isYes+1)
    }
  }
  const yesHandler4 = () => {
      setnoBG(noBG+1)
      setisYes(isYes+1)
  }
  
  return (
    <main className={`min-h-screen items-center justify-between p-12 ${bgPage[noBG]}`}>
      <div className={`flex flex-col h-5/6 items-center justify-between`} 
        style={vale.style}
      >
        {
          isYes == 0 ? 
          (
            <div>
              <Image src={`/${noImg}`} alt="" width={250} height={250} priority={true} />
              <div className=" text-center w-full h-full my-4" >
                <h1>Kamu Kinannnn kan ???</h1>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <button className=" bg-red-300 rounded-md px-2 py-1 text-xs md:text-lg text-center" onClick={yesHandler} >YESSS</button>
                <button 
                className={`bg-red-300 rounded-md px-3 py-1 text-xs md:text-lg text-center ${isNo ? `absolute` : ""}`}
                style={{top, left}}
                onClick={noHandler} >
                  {noData}
                </button>
              </div>
            </div>
          ) 
          :
          isYes == 1 ?
          (
            <div className="">
              <div className="m-auto overflow-hidden relative h-60 w-60">
                  <Image layout="fill" objectFit="cover" src={`/${noImg2}`} alt="" priority={true} />
              </div>
              <div className=" text-center w-full h-full my-4" >
                <button className=" bg-red-300 rounded-md px-2 py-1 text-xs md:text-lg text-center" onClick={yesHandler2} >
                <Typewriter
                  options={{
                    strings: text2,
                    autoStart: true,
                    loop: false,
                    delay: 70
                  }}
                />
                </button>
              </div>
            </div>
          ) 
          : 
          isYes == 2 ?
          (
            <div className="">
              <div className="m-auto overflow-hidden relative h-60 w-60">
                  <Image layout="fill" objectFit="cover" src={`/${noImg3}`} alt="" priority={true} />
              </div>
              <div className=" text-center w-full h-full my-4" >
                <button className=" bg-red-300 rounded-md px-2 py-1 text-xs md:text-lg text-center" onClick={yesHandler3} >
                <Typewriter
                  options={{
                    strings: text3,
                    autoStart: true,
                    loop: false,
                    delay: 70
                  }}
                />
                </button>
              </div>
            </div>
          ) 
          : 
          isYes == 3 ?
          (
            <div className="">
              <div className="m-auto overflow-hidden relative h-60 w-60">
                  <Image layout="fill" objectFit="cover" src={`/last.gif`} alt="" priority={true} />
              </div>
              <div className=" text-center w-full h-full my-4" >
                <button className=" bg-red-300 rounded-md px-2 py-1 text-xs md:text-lg text-center" onClick={yesHandler4} >
                <Typewriter
                  options={{
                    strings: "Semoga di hari sidang dan ultahmu ini, kamu bisa menjadi pribadi yang lebih baik. CONGRATZZZZZZZZZZ",
                    autoStart: true,
                    loop: false,
                    delay: 50
                  }}
                />
                </button>
              </div>
            </div>
          )
          : 
          (
            <div className=" text-center items-center justify-between">
              <h1>
                TRAKTIRNYA JANGAN LUPA BOSSSSS WKWKWKWKWKWKW
              </h1>
            </div>
          )
        }
      </div>
    </main>
  );
}