import React, { useState } from 'react'
import './Product.css'

const Product = () => {
      const[id,setId]=useState('')
      const[name,setName]=useState('')
      const[qty,setQty]=useState('')
      const[prc,setPrc]=useState('')
      const[detls,setDetls]=useState('')

    const readid = (event) =>{
          setId(event.target.value)
          console.log(event.target.value)
    }

    const readname = (event) =>{
      setName(event.target.value)
      console.log(event.target.value)
}

const readqty = (event) =>{
  setQty(event.target.value)
  console.log(event.target.value)
}

const readprc = (event) =>{
  setPrc(event.target.value)
  console.log(event.target.value)
}

const readdtls = (event) =>{
  setDetls(event.target.value)
  
}




  return (
    <div>
    <h1 className="aa">Product Page</h1>
    <form className="user">
    Product ID<input type="text" onChange={readid}/><br/><br/>
    Name<input type="text" onChange={readname}/><br/><br/>
    Quantity<input type="text" onChange={readqty}/><br/><br/>
    Price<input type="text" onChange={readprc}/><br/><br/>
    Details<textarea rows="5" cols="20" onChange={readdtls}></textarea><br/><br/>
    <button className='aa'>Login</button>

    </form>
    </div>
  )
}

export default Product