import "../components/ProductItem.css"

const ProductItem = () => {
  return (
    <div className="itemcard">
      {/* item card  */}
      <div className="itemimage">
        <img className="cardimage" src="../src/images/menus.png" alt="" />
      </div>
      <div className="itemdetails">
        {/* name of the item */}
        <p className="itemname">name of item</p>
        <div className="pricencart">
          {/* price of the item */}
        <p>price</p>
        {/* add to cart button */}
        <button className="addcartbtn">add to cart</button>
        </div>
      </div>

    </div>
  )
}

export default ProductItem