import React from 'react'
import ParentComponent from './ParentComponent'

const Child = (props) => {
  return (
    <>
    <ParentComponent/>
    <h1>{props.message}</h1>
    </>
  )
}

export default Child