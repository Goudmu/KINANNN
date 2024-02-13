import Image from 'next/image'
import React from 'react'

const dataPlace = ["Alun - Alun Kidul", "Pantai", "Fine Dining Restaurant", "Mall", "Museum", "Bukit Bintang"]
const dataGift = ["Doll", "Silver Queen", "Flower", "Ring" ,"Books", "Card"] 

const LastPage = ({place, gift}) => {


  return (
    <div className=' flex flex-col h-5/6 items-center justify-between text-center'>
        <div className=' my-5' >
            <h1>{`You will go on a date with me at ${dataPlace[place]} and you will get a ${dataGift[gift]} from me as being my beloved partner`}</h1>
        </div>
        <Image src="/after.gif" alt="" width={250} height={250} />
            <div className=" text-center w-full h-full my-4">
            <h1>THANKS YOU BABEEEEE</h1>
        </div>
    </div>
  )
}

export default LastPage