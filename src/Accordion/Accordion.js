import React, { useState } from 'react'
import  questions  from './api';
import MyAccordion from './MyAccordion';


 const Accordion = () => {
    const [data, setData] = useState(questions);
    return(
        <>
           <div className="main_div">
           <section className="center_div">
            <h1>Q/A on ReactJS</h1>
            {data.map((curElem) => {
                const {id} = curElem;
                return <MyAccordion key={ id} {...curElem} />
            })}
            </section>
           </div>
        </>
    )
 } 


 export default Accordion;