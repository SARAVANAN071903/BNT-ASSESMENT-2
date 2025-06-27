import React from 'react'
import ParentComponent from './ParentComponent';


const Grandparent = () => {
    const message = "Hii i am from grandparent";
  return (
    <>
     <div>Grandparent</div>
        <ParentComponent message={message} />
    </>
   
  )
}

export default Grandparent