import ProductItem from "../components/ProductItem"
import "./Product.css";
import { useEffect, useState } from "react"
import axios from "axios"
const url = "https://good-rose-bass-ring.cyclic.app/Product"

function Product() {
    const [Data, setData] = useState([])
    const getdata = () => {

        axios.get(url).then((res) => {
            console.log(res.data)
            setData(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        getdata()
    })
    return (
        <div>
            <div className="filter">
                <div className="box1">
                    <div><h2 >Filter</h2></div>
                    <div style={{ color: "red", marginTop: "28px" }}>Clear All</div>
                </div>
                <div className="box2">
                    <div>All Wax</div>
                    <div>Demise</div>
                    <div>Whispies</div>
                    <div>Strips</div>
                    <div>Indiviuals</div>
                    <div>Ahesive</div>
                    <div>Magnetic</div>
                    <div>Tools</div>
                    <div><input style={{ borderBlockColor: "gray" }} type="search" name="" id="" placeholder="Default Sorting" /></div>
                </div>
            </div>
          <hr/>
            <div className="container">


                <div style={{ width: "25%" }}>
                    <h3>Product Status</h3>
                    <ul>
                        <li>On sale<input type="checkbox" name="" id="" /></li>
                        <li>In Stock <input type="checkbox" /></li>
                    </ul>
                    <h3>Brand</h3>
                    <ul>

                        <li>Zara <input type="checkbox" name="" id="" /></li>
                        <li>Levis <input type="checkbox" name="" id="" /></li>
                        <li>Levis <input type="checkbox" name="" id="" /></li>
                        <li>Levis <input type="checkbox" name="" id="" /></li>
                        <li>Levis <input type="checkbox" name="" id="" /></li>

                    </ul>
                    <h3>Category</h3>
                    <ul>
                        <li>Sartin Shirt <input type="checkbox" name="" id="" /></li>
                        <li>Western Dress <input type="checkbox" name="" id="" /></li>
                    </ul>
                    <h3>Filter By Color</h3>
                    <ul>
                        <li>Blue <input type="checkbox" name="" id="" /></li>
                        <li>Green <input type="checkbox" name="" id="" /></li>
                        <li>Navy Blue <input type="checkbox" name="" id="" /></li>
                        <li>Black <input type="checkbox" name="" id="" /></li>
                    </ul>
                </div>

                <div className="Product">
                    {Data.map((item) => (
                        <div style={{boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",marginTop:"20px"}}>
                        <ProductItem
                            key={item.id}
                            image={item.image}
                            title={item.title}
                            description={item.description}
                            price={item.price} />
                    </div>
                    ))}

                </div>
            </div>
        </div>
    )
}
export default Product