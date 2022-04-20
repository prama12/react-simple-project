import React from 'react'
import Common from './Common'

const Showfile = () => {
     return (
          <>
               <div className='w-full h-full flex justify-center items-center bg-slate-50 py-10'>
                    <div className='rounded-sm bg-white shadow-md px-5 py-3 grid grid-cols-1 gap-5'>
                         <Common
                              ques="hi"
                              ans="hello"
                         />
                    </div>
               </div>
          </>
     )
}

export default Showfile
