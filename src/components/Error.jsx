import { useNavigate } from "react-router-dom"
import "../components/Error.css"

const Error = () => {
    const navigate=useNavigate();
  return (
      <div className='errorcont'>

          <button className="homebtn" onClick={()=>navigate("/")}>Go to Home</button>
       <img className="errorimage" src="./src/images/404.png" alt="" />
      </div>
  )
}

export default Error