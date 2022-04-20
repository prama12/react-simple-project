import React from 'react'
import * as prama from "./Demo"

const Main = () => {
     return (
          <>
               <ol>
                    <li>
                         Prama
                    </li>
                    <li>
                         {prama.default}
                    </li>
                    <li>
                         {prama.Name}
                    </li>
                    <li>
                         {prama.Myname()}
                    </li>
               </ol>
          </>
     )
}

export default Main
