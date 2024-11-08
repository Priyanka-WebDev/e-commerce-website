import Category from "./category"
import Footer from "./Footer"
import './Navbar.css'
const Homepage = () => {

    return (


        <>
            <div className="home-container">
                <button id="category-btn">OUR CATEGORIES</button>
                <h1 className="category-heading">Finding Best Products Now <br />
                    in Your Fingertips</h1>
            </div>
            <div className="category">
                <Category Productname="Mobile Phone" imges="https://i.imgur.com/b9zkoz0.jpg" />
                <Category Productname="Head Phones" imges="https://i.imgur.com/SHWASPG.png" />
                <Category Productname="Smart Watches" imges="https://i.imgur.com/Ya0OXCv.png" />
                <Category Productname="Air Purifier" imges="https://i.imgur.com/2gvGwbh.png" />
                <Category Productname="Vacuum Cleaner" imges="https://i.imgur.com/UMQJpSG.png" />
                <Category Productname="Washing Machines" imges="https://i.imgur.com/e9CyhXR.png"/>
                <Category Productname="Smart Televisions" imges="https://i.imgur.com/Zq8VigZ.png" />
                <Category Productname="Laptops" imges="https://i.imgur.com/6pK5oZl.jpg" />
            </div>

            <div className="shopping-card justify-around h-[67vh] rounded-xl">
                <div className="shopping-card-sec1 pt-14">
                    <h1 className="text-6xl font-extrabold mb-3">Shopping Cart</h1>
                    <p className="mt-5 mb-6">Lorem ipsum dolor sit amet consectetur <br />  adipisicing elit. Distinctio error nostrum maiores  <br />   sit amet consectetur adipisicing elit. Voluptatem, natus.</p>
                    <button className="btn border-2 w-2/6 bg-purple-600 p-2 rounded-3xl">Learn More</button>
                </div>
                <div className="shopping-card-sec2">
                    <img src="https://media.istockphoto.com/id/1320029684/vector/smartphone-app-and-grocery-delivery-at-home.jpg?s=2048x2048&w=is&k=20&c=sm4TaNq-qrMB0SLthHQx8LwuwDB5YqUQF0ldFPwGk7Y=" height={450} width={450} alt="" />
                </div>
            </div>
<Footer/>
        </>
    )
}

export default Homepage
