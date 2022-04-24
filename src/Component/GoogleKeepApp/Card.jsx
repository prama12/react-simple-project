import React from 'react'

const Card = (props) => {

     const deleteNote = () => {
          props.deleteItem(props.id);
     }
     return (
          <>

               <div className='bg-white border border-gray-100 shadow-lg pl-5 pr-2 pt-5 pb-2 rounded-md '>
                    <h1 className='text-gray-600 text-lg font-bold  px-1 py-2' >{props.Title}</h1>
                    <div className='w-full h-16 px-1 py-2 outline-none text-gray-500 font-medium text-sm'>{props.Content}</div>
                    <div className='flex justify-end'>
                         <button className='text-yellow-400 text-2xl font-black px-2 py-1 rounded-full border border-gray-100 shadow-lg hover:shadow-xl hover:border-2 hover:border-red-500 ' onClick={deleteNote}>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className='h-5'>
                                   <path
                                        fill="red"
                                        d="M576 384C576 419.3 547.3 448 512 448H205.3C188.3 448 172 441.3 160 429.3L9.372 278.6C3.371 272.6 0 264.5 0 256C0 247.5 3.372 239.4 9.372 233.4L160 82.75C172 70.74 188.3 64 205.3 64H512C547.3 64 576 92.65 576 128V384zM271 208.1L318.1 256L271 303C261.7 312.4 261.7 327.6 271 336.1C280.4 346.3 295.6 346.3 304.1 336.1L352 289.9L399 336.1C408.4 346.3 423.6 346.3 432.1 336.1C442.3 327.6 442.3 312.4 432.1 303L385.9 256L432.1 208.1C442.3 199.6 442.3 184.4 432.1 175C423.6 165.7 408.4 165.7 399 175L352 222.1L304.1 175C295.6 165.7 280.4 165.7 271 175C261.7 184.4 261.7 199.6 271 208.1V208.1z" />
                              </svg>
                         </button>
                    </div>
               </div>

          </>
     )
}

export default Card
