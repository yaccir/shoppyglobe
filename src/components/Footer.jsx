import "../components/Footer.css"


//footer component 
const Footer = () => {
  return (
    <div className="footercontainer">
      <p className='footerp'>All Rights Reserved 2025</p>
      {/* github repo link */}
      <a href="https://github.com/yaccir/shoppyglobe" className='footerlink'> visit on Github</a>
    </div>
  )
}

export default Footer