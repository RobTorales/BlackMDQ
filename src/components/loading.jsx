import React from 'react'
import  'bootstrap/dist/css/bootstrap.min.css' ;
import { Spinner } from "react-bootstrap";

 const Loader = () => {
  return (
    <div>
        <Spinner color="dark"/>
    </div>
  )
}

export default Loader;