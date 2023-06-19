import "./Navbar.css";
function Navbar() {
    return (
        <div className="Navbar">
            <div>
                <img  width="30%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB0qWHpwsWWPQWWhcjSFjpq9uEV73vG3_50A&usqp=CAU" alt="" />
            </div>
            <div >
                <input style={{marginRight:"15px"}} type="search" name="" id="" placeholder="Search" />
                Categories<select style={{ border: "None",marginTop:"20px" }} name="" id=""></select>
                Brands<select style={{ border: "None" }} name="" id=""></select>
               
            </div>
            
        </div>
       
    )
}
export default Navbar