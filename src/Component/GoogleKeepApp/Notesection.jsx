import React, { useState } from 'react'

const Notesection = (props) => {
     const [show, setShow] = useState(false);

     const [note, setNote] = useState({
          Title: "",
          Content: ""
     });

     const inputEvent = (e) => {
          const { name, value } = e.target;
          setNote((oldVal) => {
               return {
                    ...oldVal,
                    [name]: value,
               };
          });
          // console.log(note);
     };

     const addEvent = () => {
          props.passItem(note);
          setNote({
               Title: "",
               Content: ""
          });
     };

     const expand = () => {
          setShow(true);
     }

     const normal = () => {
          setShow(false);
     }

     return (
          <>
               <div className='h-full flex justify-center items-center py-5 px-12' >
                    <div className='bg-gray-50 border border-gray-100 shadow-lg pl-5 pr-2 pt-5 pb-2 lg:w-3/12 rounded-md relative' onDoubleClick={normal}>
                         {
                              show ?
                                   <h1>
                                        <input className='text-gray-600 text-lg font-bold bg-gray-50 outline-none px-1 py-2' type="text" placeholder='Title' value={note.Title} name="Title" onChange={inputEvent} />
                                   </h1> : null
                         }

                         {/* <div className='flex  justify-end' >
                                        <button onClick={() => setShow(!show)} className="text-xs font-semibold hover:text-white text-black hover:shadow-sm hover:bg-red-600 px-1 rounded-full">X</button>
                                   </div> */}


                         <div>
                              <textarea className='w-full bg-gray-50 h-16 px-1 py-2 outline-none text-gray-500 font-medium text-sm' placeholder="Write a Note..." value={note.Content} name="Content" onChange={inputEvent} onClick={expand} />

                         </div>

                         {
                              show ?
                                   <div className='flex justify-end  '>
                                        <button className='text-blue-500 bg-white text-2xl font-black px-2 py-1 rounded-full border border-gray-100 shadow-lg hover:bg-green-600 hover:text-white absolute right-4 bottom-[-15px]' onClick={addEvent} >
                                             +
                                        </button>
                                   </div> : null
                         }

                    </div>

               </div>
          </>
     )
}

export default Notesection
