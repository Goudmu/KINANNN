"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import AfterThree from '../after3/page'

const dataImg = ['/t1.jpg', '/t2.jpg', '/t3.jpg', '/t4.jpg', '/t5.jpg', '/t6.jpg']

const AfterTwo = ({noBG, setnoBG}) => {
    const [selected, setSelected] = useState()
    const [isNext, setisNext] = useState(false)

    const clickHandler = (index) => {
        if(selected == index && selected != undefined){
            setSelected()
        } else{
            setSelected(index)
        }
    }
    
    const nextHandler = () => {
        let before = noBG
        setnoBG(before+1)
        setisNext(true)
    }

  return (
    <div>
        {
            isNext ?
                <AfterThree place={selected} noBG={noBG} setnoBG={setnoBG} />
            :
            <div>
                <div className=' items-center text-center md:text-2xl' >
                    <h1>What destination you would love to go with me ???</h1>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-3 gap-2'>
                    {dataImg.map((data, index) => (
                        <div onClick={() => clickHandler(index)} key={index} >
                            <Image src={data} alt='' width={150} height={150} 
                            className={`rounded-md w-full h-full cursor-pointer hover:opacity-100 transition ease-in-out delay-100
                            ${selected == index ? "scale-105 opacity-100" : "scale-100 opacity-70"}
                            `} 
                            />
                        </div>
                    ))}
                </div>
                {
                    selected == undefined ?
                        <div></div>
                    :
                    (<div className='items-center mt-10 text-center'>
                        <button className=" bg-red-300 rounded-md px-2 py-1 text-xs md:text-lg text-center" onClick={nextHandler} >Next</button>
                    </div>)
                }
            </div>
        }
    </div>
  )
}

export default AfterTwo