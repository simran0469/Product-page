import styled from 'styled-components';
import './App.css';
import axios from 'axios';
import { useEffect,useState } from 'react';
import Product from './components/Product';
let url="https://good-rose-bass-ring.cyclic.app/Product"
function App() {
  const [product,setProduct]=useState([])
  const [search,setsearch]=useState("")
  const handlechange=(e)=>{
    setsearch(e.target.value)
  }
  const searchQuery=product.filter((el)=>{
  return el.title.toLowerCase().includes(search.toLowerCase())
  })
  const getdata = () => {

    axios.get(url).then((res) => {
        console.log(res.data)
        setProduct(res.data)
    }).catch((err) => {
        console.log(err)
    })
}
 
useEffect(() => {
    getdata()
})
  return (
    <DIV>
    <div >
      <div className="Navbar">
            <div>
                <img  width="30%" 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB0qWHpwsWWPQWWhcjSFjpq9uEV73vG3_50A&usqp=CAU"
                 alt="" />
            </div>
            <div >
                <input
                 style={{marginRight:"15px"}} 
                 type="search" name="" id="" 
                 placeholder="Search" 
                 onChange={handlechange}/>
                Categories
                <select style={{ border: "None",marginTop:"20px" }} name="" id=""></select>
                Brands
                <select style={{ border: "None" }} name="" id=""></select>
               
            </div>
            
        </div>
     <hr style={{color:"gray"}}/>
     
     <Product searchQuery={searchQuery} />
    </div>
    </DIV>
  );
}
const DIV = styled.div`
@media (min-width:0px) and (max-width:800px){
    .Navbar{
        display:flex;
        flex-direction: column;
    }
}

`
export default App;
