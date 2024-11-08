import "./Navbar.css"
const Cards = (props)=>{

return (
  <>
<div className="about-card">
  <div className="logo">
  <img src={props.src} alt="" height={60} width={60} style={{borderRadius:"50%"}} />
  </div>
  <div style={{fontSize:"1rem",fontFamily:"monospace"}}>
    <h2>{props.name}</h2>
  </div>
  <div>
    {props.para}
  </div>
</div>


  </>
)
}

const About = () => {
  return (
    <>

   
    <div className="about-cards">
<Cards src="https://tse2.mm.bing.net/th?id=OIP.KSAqgD_l8tBViNaghB0oCwHaFj&pid=Api&P=0&h=180" name="Customizable templates" para="Free website designs to launch your store quickly and easily."/>
<Cards src="https://tse4.mm.bing.net/th?id=OIP.uZp5F9Ihzm1iSMmdsC6hvgHaHa&pid=Api&P=0&h=180" name="All in one" para="Shopify takes care of everything from marketing and payments to secure transactions and shipping."/>
<Cards src="https://tse3.mm.bing.net/th?id=OIP.VrmARXaZCNvzRlNKLrIOjAHaH_&pid=Api&P=0&h=180" name="A safe and efficient platform" para="Millions of users trust Shopify to manage their online stores."/>
    </div>
    <div className="about-head text-3xl">
      <h1><q> PreMART is better than any other platform <br /> we've played with, and we've played with <br /> them all.</q></h1>
    </div>
   
    </>
   
  )
}
export default About;
