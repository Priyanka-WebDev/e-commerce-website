import './Navbar.css'
const Footer = () => {
  return (
    <div  style={{backgroundColor:"#242424"}}>
    <div className="footer-main w-[70%] mx-auto">
      
    <div className="one">
        <ul>
            <li>Get to Know Us</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Investor Relations</li>
        </ul>
    </div>
    <div className="two">
        <ul>
            <li>Make Money with Us</li>
            <li>Sell products on GoSnippets</li>
            <li>Become an Affiliate</li>
            <li>Advertise Your Products</li>
            <li>Self-Publish with Us</li>
        </ul>
    </div>
    <div className="three">
        <ul>
            <li>PreMART Payment Products</li>
            <li>PreMART Business Card</li>
            <li>Shop with Points</li>
            <li>Reload Your Balance</li>
        </ul>
    </div>
    <div className="four">
        <ul>	
            <li>Let Us Help You</li>
            <li>Your Account</li>
            <li>Your Orders</li>
            <li>Shipping Rates & Policies</li>
        </ul>
    </div>
      </div>
      
      <h1 className='p-3 bg-black text-white'>&copy; -2024 All Rights are reserved</h1>
    </div>
  )
}

export default Footer
