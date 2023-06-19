import "./Navbar.css";
import styled from 'styled-components';
function Navbar() {
    return (
        <DIV>
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
        </DIV>
    )
}
const DIV = styled.div`
@media (min-width:400px) and (max-width:800px){
    .Navbar{
        display:flex;
        flex-direction: column;
    }
}
@media (min-width:0px) and (max-width:400px){
    .Navbar{
        display:flex;
        flex-direction: column;
    }
} 
@media (min-width:0px) and (max-width:800px){
    .Navbar{
        display:flex;
        flex-direction: column;
        
    }
}




`
export default Navbar