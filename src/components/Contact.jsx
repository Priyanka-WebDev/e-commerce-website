import Footer from "./Footer"

const Contact = () => {
  return (
    <div>
    <div className="contact-page bg-slate-500 flex justify-evenly w-[60%] mx-auto text-left m-20 rounded-3xl">
        <div className="contact-page-part1 w-[100%] mx-auto bg-slate-500 p-10">
          <form action="">
            <h1 className="text-left font-bold text-lg mb-4 text-white">Write Us</h1>
            <label htmlFor="name" >Name</label><br />
            <input type="text" name="name" id="" className="bg-slate-500 w-full" />

            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="" className="bg-slate-500 w-full"/>

            <label htmlFor="subject">Subject</label>
            <input type="text" name="subject" id="" className="bg-slate-500 w-full"/>

            <label htmlFor="msg">Message</label>
            <textarea name="msg" id="" rows={3} className="bg-slate-500 w-full"></textarea>
            <button className="bg-amber-600 p-2">Send Message</button>
          </form>
        </div>

        <div className="contact-page-part2 w-[100%] mx-auto bg-slate-600 p-10">
          <h1 className="text-left font-bold text-lg mb-4 text-white">Contact Information</h1>
          <p className="text-zinc-400">We are open for any suggestions or just to have a chat</p>
          <table className="border-separate border-spacing-6 text-sm text-zinc-400">
            <tr>
              <th ><img className="bg-slate-600" src="https://clipground.com/images/address-logo-png-5.png"  alt="" height={50} width={50} /></th>
              <th><span className="text-white text-sm">Address : </span> 198 west 21 <sup>th</sup> street, Suite 721 New York NK10016</th>
            </tr>
            <tr>
              <th><img className="bg-slate-600" src="http://www.clipartbest.com/cliparts/9i4/o5R/9i4o5RkiE.png" alt="" height={20} width={30}  /></th>
              <th><span className="text-white text-sm">Phone : </span> 536478930</th>
            </tr>
            <tr>
              <th><img className="bg-slate-600"  src="https://www.i-tt.ru/application/files/3015/6526/1057/Telegram-2.png" alt="" height={50} width={50} /></th>
              <th><span className="text-white text-sm">Email : </span>info@gjd.com</th>
            </tr>
            <tr>
              <th> <img className="bg-slate-600" src="https://vectorified.com/images/website-logo-icon-16.png" alt="" height={70} width={70} /></th>
              <th><span className="text-white text-sm">Website : </span>youtube.com</th>
            </tr>
          </table>
        </div>
    </div>
      <Footer></Footer>
    </div>
  )
}

export default Contact
