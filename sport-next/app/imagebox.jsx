import Image from 'next/image';

const ImageBox = () => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <Image className=''
                src='next.svg'
                width={200}
                height={300}
                alt='Picture of a sportsman'
            />
            <span>Sacramento River Cats</span>
        </div>
    )
}

export default ImageBox






// <div className="container mx-auto p-6">
//   <h2 className="text-4xl ">sports</h2>
//   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
//     <ImageBox />
//     <ImageBox />
//     <ImageBox />
//     <ImageBox />
//     <ImageBox />
//   </div>
//   <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded items-center'>Button</button>
// </div>
// <div className="container mx-auto p-6">
//   <h1 className="text-4xl font-bold text-center mb-6">Collection Spotlight</h1>

//   <p className="text-xl font-bold text-center mb-4">
//     Discover extraordinary moments with our Spotlight Collection.
//     MetaTickets offers exclusive access to premium events for an unforgettable experience.
//     Grab yours today!
//   </p>
//   Name
//   <div className="bg-white p-4 shadow rounded">
//     <div className="flex items-center">
//       <div className="flex-shrink-0">
//       </div>
//       <div className="ml-4">
//         <p className="text-gray-700"><strong>AVIATO 17</strong></p>
//         <p className="text-gray-700">June 26, 2024</p>
//       </div>
//     </div>

//     <div className="bg-gray-200 p-4 rounded mt-6">
//       <h2 className="text-xl font-bold mb-2">Las Vegas Aviators <span className="text-gray-700">- Take Flight Collection</span></h2>
//       <p className="text-gray-700">Date: October 15, 2023 | Sun | 4:30 PM</p>
//       <p className="text-gray-700">Location: Las Vegas Ballpark, Las Vegas, Nevada</p>
//     </div>

//     <div className="bg-orange-200 p-4 rounded mt-6">
//       <h2 className="text-xl font-bold mb-2">Sacramento River Cats <span className="text-gray-700">- Orange Collection</span></h2>
//       <p className="text-gray-700">Date: October 15, 2023 | Sun | 4:30 PM</p>
//       <p className="text-gray-700">Location: Sutter Health Park, Sacramento, California</p>
//     </div>

//     <div className="bg-gray-200 p-4 rounded mt-6">
//       <h2 className="text-xl font-bold mb-2">Las Vegas Aviators <span className="text-gray-700">- Take Flight Collection</span></h2>
//       <p className="text-gray-700">Date: October 15, 2023 | Sun | 4:30 PM</p>
//       <p className="text-gray-700">Location: Las Vegas Ballpark, Las Vegas, Nevada</p>
//     </div>
//   </div>
// </div>
