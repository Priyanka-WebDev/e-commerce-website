import './Navbar.css'
const Category = (props) => {


    return (
    <>
        {/* <div className="cards"> */}
            <div className="card">
            <div > {props.Productname} </div>
            <div> <img src={props.imges} height="100" width="100" /> </div>
            </div>
        {/* </div>       */}
    </>
  )
}

export default Category
