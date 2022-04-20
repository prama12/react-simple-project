import React from 'react'

const Common = ({ques,ans}) => {
     return (
          <>
               <div>
                    <div className='bg-blue-600 text-white text-lg font-medium px-4 py-3 '>
                         <h1 className='flex items-center'>

                              <span className="mr-5 text-2xl">

                                   <button>

                                        <div>
                                             <svg xmlns="http://www.w3.org/2000/svg"
                                                  height="24px"
                                                  viewBox="0 0 24 24"
                                                  width="24px" fill="white">
                                                  <path d="M0 0h24v24H0V0z" fill="none" />
                                                  <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z" />
                                             </svg>
                                        </div>
                                   </button>
                              </span>
                              {question}
                         </h1>
                    </div>

                    <div className='bg-yellow-100 font-medium text-lg px-4 py-3'>
                         <h2>Ans: {ans}</h2>
                    </div>
               </div>
          </>
     )
}

export default Common