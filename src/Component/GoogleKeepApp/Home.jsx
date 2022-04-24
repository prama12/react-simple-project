import React, { useState } from 'react'
import Card from './Card'
import Nav from './Nav'
import Notesection from './Notesection'

const Home = () => {
     const [addItem, setAddItem] = useState([]);

     const addNote = (note) => {
          //alert("Note Add");

          setAddItem((oldData) => {
               return [...oldData, note];
          });
          console.log(note);
     };

     const onDelete = (id) => {
          setAddItem((oldVal) =>
               oldVal.filter((data, index) => {
                    return index !== id;
               })
          )
     }

     return (
          <>
               <div className='h-full'>
                    <Nav />
                    <Notesection passItem={addNote} />


                    <div className='p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>

                         {addItem.map((val, index) => {
                              return (
                                   <Card
                                        key={index}
                                        id={index}
                                        Title={val.Title}
                                        Content={val.Content}
                                        deleteItem={onDelete}
                                   />
                              )
                         })}
                    </div>
               </div>
          </>
     )
}

export default Home
