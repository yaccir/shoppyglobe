import "../components/ProductItem.css"

const ProductItem = ( {id,title,price,image,discount,brand}) => {



  return (

    <div className="itemcard">
      {/* item card  */}
      <div className="itemimage">
        <img className="cardimage" src={image} alt="" />
      </div>
      <div className="itemdetails">
        {/* name of the item */}
        <p className="itemname">{title}</p>
        <div className="pricencart">
          {/* price of the item */}
        <p>{price}</p>
        {/* add to cart button */}
        <button className="addcartbtn">add to cart</button>
        </div>
      </div>

    </div>
  )
}

export default ProductItem;