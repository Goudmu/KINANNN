"use client"
import Image from "next/image";
import { useState } from "react";
import localfont from "next/font/local"
import AfterTwo from "./after2/page";

const data = ["Are you sure ?", "It could break my heart", "Pleasee", "Come onnn", "I'm Begging you"]
const dataImg = ['icegif2.gif', '2.gif','3.gif','4.gif','5.gif','6.gif','7.gif','8.gif','9.gif','11.gif']
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
  const [isNo, setisNo] = useState(false)
  const [top, settop] = useState(0)
  const [left, setleft] = useState(0)
  const [isYes, setisYes] = useState(false)
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
    setisYes(true)
  }
  return (
    <main className={`min-h-screen items-center justify-between p-12 ${bgPage[noBG]}`}>
      <div className={`flex flex-col h-5/6 items-center justify-between`} 
        style={vale.style}
      >
        {
          isYes ?
            <div>
              <AfterTwo noBG={noBG} setnoBG={setnoBG} />
            </div>
          :
          (
            <div>
              <Image src={`/${noImg}`} alt="" width={250} height={250} />
              <div className=" text-center w-full h-full my-4" >
                <h1>Will You be My Valentine ?</h1>
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
        }
      </div>
    </main>
  );
}
