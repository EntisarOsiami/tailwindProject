import React from 'react'
import Card from './Card'


let CardList = [{
    title: "Ouddy Decor 18",
    image: "https://m.media-amazon.com/images/I/71LzhyYnONL._AC_SL1024_.jpg",
    info: "Artificial Geraniums Flowers for Outdoors, 10 Bundles Mixed Fake Silk Flowers Plastic Plants "
},
{
    title: "Fab totes",
    image: "https://m.media-amazon.com/images/I/81dnPpZT+GL._AC_SL1500_.jpg",
    info: "."
},
{
    title: "Candle Warmer Lamp",
    image: "https://m.media-amazon.com/images/I/810vcJJDrkL._AC_SL1500_.jpg",
    info: "House Warming Gifts New Home Decor."

},
{
    title: "AULA F75 Pro Wireless",
    image: "https://m.media-amazon.com/images/I/61MC8BK0w0L._AC_UY327_QL65_.jpg",
    info: "75% Hot Swappable Custom Keyboard, Mechanical Gaming Keyboards ."
},
{
    title: "Stuffed Animal Storage Hammock ",
    image: "https://m.media-amazon.com/images/I/61752JLF7qL._AC_SL1200_.jpg",
    info: "Cute Stuff Animal Organizer Plush Holder."
},
{
    title: "Sony WH-CH520",
    image: "https://m.media-amazon.com/images/I/41lArSiD5hL._AC_SL1200_.jpg",
    info: "Wireless Headphones Bluetooth On-Ear Headset with Microphone, Black"
},
]
    

export default function CardGrid() {
  return (
    <div className='container mx-auto p-6 flex flex-col justify-center'>
        <h1 className='border-b-2 border-b-gray-600 text-gray-900 font-bold text-2xl'>Best Sellers this the month</h1>
    <div className='grid grid-cols-12 gap-4 p-6 align-center'>
        {CardList.map((card) => (
            <div className='bg-white shadow-lg rounded-lg overflow-hidden gap-3 p-4 md:col-span-6 lg:col-span-4 sm: col-span-12 max-w[300px] hover:scale-105 transition-transform duration-300 ease-in-out'>
                <Card name={card.title} image={card.image} info={card.info} />
            </div>
        ))}
    </div>
    </div>
  )
}
