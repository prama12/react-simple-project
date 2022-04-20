import React from 'react'
import { add, sub, mult, div } from "./Check"

const Calc = () => {
 return (
  <>
   <ul>
    <li>{add(4, 6)}</li>
    <li>{sub(10, 6)}</li>
    <li>{mult(4, 6)}</li>
    <li>{div(10, 6)}</li>
   </ul>
  </>
 )
}

export default Calc
