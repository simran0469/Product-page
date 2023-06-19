function ProductItem({title,description,price,image}){
    return(
        <div className="ProductItem">
            <img style={{marginLeft:"65px",marginTop:"20px"}} width="50%" src={image} alt="Not loading" />
            <h3 style={{textAlign:"center"}}>{title}</h3>
            <p style={{textAlign:"center"}}>{description}</p>
            <p style={{textAlign:"center"}}>Rs {price}</p>
        </div>
    )
}
export default ProductItem
