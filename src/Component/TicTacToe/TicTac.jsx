import React, { useState } from 'react'


const TicTac = () => {

     const [game, setGame] = useState('X');
     const [xChance, setXChance] = useState(Array(9).fill(''));
     const [win, setWin] = useState();

     const checkWinner = (items) => {
          let Winner = {
               across: [
                    [0, 1, 2],
                    [3, 4, 5],
                    [6, 7, 8]
               ],

               down: [
                    [0, 3, 6],
                    [1, 4, 7],
                    [2, 5, 8]
               ],

               diagnol: [
                    [0, 4, 8],
                    [2, 4, 6]
               ]
          };

          for (let winners in Winner) {
               Winner[winners].forEach((pattern) => {
                    if (
                         items[pattern[0]] === "" ||
                         items[pattern[1]] === "" ||
                         items[pattern[2]] === ""
                    ) { }
                    else if (
                         items[pattern[0]] === items[pattern[1]] &&
                         items[pattern[1]] === items[pattern[2]]
                    ) {
                         setWin(items[pattern[0]]);
                    }

               });
          }
     };

     const clickEvent = (num) => {
          if (xChance[num] !== '') {
               alert("Already Clicked");
               return;
          }

          let items = [...xChance];

          if (game === 'X') {
               items[num] = 'X';
               setGame('O');
          } else {
               items[num] = 'O';
               setGame('X');
          }

          checkWinner(items);
          setXChance(items);
          //console.log(items);
     }

     const handleRestart = () => {
          setWin(null);
          setXChance(Array(9).fill(''));
     }


     const Cell = ({ num, styles }) => {
          return <td className={`${styles} border-white text-center w-32 h-32 text-8xl font-extrabold text-white hover:shadow-md shadow-slate-100 cursor-pointer hover:bg-slate-800 rounded-md overflow-hidden `} onClick={() => clickEvent(num)}>{xChance[num]}</td>;
     }

     return (
          <>
               <div className='w-full bg-gray-800'>
                    <div className='flex h-screen items-center justify-center'>
                         {/* Tic tac toe */}

                         <div className='flex justify-center items-center flex-col gap-3'>
                              <h1 className=' font-bold text-4xl text-yellow-400 mb-2'>Turn : {game}</h1>
                              <table >
                                   <tr className='items-center'>
                                        <Cell num={0} styles="border-b-4" />
                                        <Cell num={1} styles="border-x-4" />
                                        <Cell num={2} styles="border-b-4" />
                                   </tr>

                                   <tr className='items-center'>
                                        <Cell num={3} styles="border-r-4" />
                                        <Cell num={4} styles="border-4" />
                                        <Cell num={5} styles="border-l-4" />
                                   </tr>

                                   <tr className='items-center'>
                                        <Cell num={6} styles="border-t-4" />
                                        <Cell num={7} styles="border-x-4" />
                                        <Cell num={8} styles="border-t-4" />

                                   </tr>
                              </table>

                              {win && (

                                   <div className=' mt-3'>
                                        <h1 className='text-red-600 font-bold text-xl'>{win} <span className='text-white'>is the Winner!</span></h1>

                                   </div>

                              )
                              }
                              <div className=' mt-3'>
                                   <button className='border-red-600 text-xs font-bold px-4 py-2 rounded-md overflow-hidden bg-red-600 hover:bg-red-800 text-white ' onClick={() => handleRestart()}>Play Again</button>
                              </div>

                         </div>

                    </div>

               </div>
          </>
     )
}

export default TicTac
