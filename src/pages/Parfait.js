import React, {useEffect, useState} from 'react'
import Navbar from '../components/Navbar'
import img001 from '../drinksimages/fruitparfait.png'
import axios from 'axios'
import './Drinkcard.css'
import Drinkcards from './Drinkcards'
import { useNavigate } from 'react-router-dom'
import { IoMdCheckmarkCircle } from "react-icons/io";
import Loader from './Loader'
import {useSelector, useDispatch} from 'react-redux'
import { addToCart } from "../Store/Cart";
import Footers from '../components/Footers'

const Parfait = () => {
  let token = localStorage.getItem('token')
  const [data, setData] = useState([])
  const dispatch = useDispatch()
  const [productLoading, setProductLoading] = useState(true)

  const [showAdded, setShowAdded] = useState(false)

 
  
  const carts = useSelector((state) =>(state.cart.items))
  console.log(carts);
  const handleAddToCart = (info, i) =>{
    console.log(info.coverimage);
    
  dispatch(addToCart({
    
  productId: info._id,
  quantity: 1,
  productprice:info.productprice,
  productname: info.productname,
  coverimage:info.coverimage
  }));

  setShowAdded(true)
  setTimeout(() => {
    setShowAdded(false);
  }, 3000); 
    ;
  
  
  }
  
  const navigate = useNavigate()
  useEffect(()=>{
if (token) {
  axios
  .get('https://dvashdrinks-back.onrender.com/admin/getproduct/parfaits')
  .then((res)=>{
    console.log(res.data.products);
    setData(res.data.products)
  })
  .catch((error)=>{
    console.log(error);
    
  })

}
  },[token])



const loginRoute = () =>{
  navigate('/log-in')
}

  return (
    <div className='position-relative'>
 <Navbar/><div className='drinkDiv'>
 <div className='headone'>
        <h1>Dvash parfait is the best for you and your family....</h1>
        <em> <span style={{display:'none'}}>Click product image for further details about this product</span></em>
        </div>

        <div style={{display: `${showAdded?'block': 'none'}`}} className="cartTicked">
      <span className="text-success"><IoMdCheckmarkCircle /></span> 
      <span>
  Added to Cart
</span>
      </div>
{!token ?  <div className='alertMessage'><p>Hello!!! It seems you are yet to log-in to our website, kindly log-in to enjoy exclusive discount on your purchase</p>
<button onClick={loginRoute}>Log in</button>
        </div> :productLoading?
        <Loader/>:
        <div className='drinkPage'>
        {data.map((info, i)=>(
       <Drinkcards
       productId = {info._id}
       coverimage={info.coverimage}
       productname={info.productname}
       productprice={info.productprice.toLocaleString()}
       addCart={()=>handleAddToCart(info)}
       />
        ))}
      </div> }
       
     
      
     <Footers/>
 </div>
       
    </div>
  )
}

export default Parfait