import React, { useState } from 'react'


const MyAccordion = ({question, answer}) =>{
   
   const [show, setShow] = useState(false);
   
    return(
        <>
            <div className="main_heading">
 