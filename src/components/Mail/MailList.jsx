import './mailList.css'

export const MailList = () => {
  return (
        <div className="mail">
            <h3 className='mailTitle'>Save time, save money!</h3>
            <h4 className='mailTitle'>Sign up and we'll send the best deals to you</h4>
            <div className="mailListContainer">
                <input type="text" placeholder='Type your email' />
                <button>Subscribe</button>      
            </div>
            <span><input type="checkbox" name="email" id="1" /> Send me a link to get the FREE Booking.com app!</span>
        </div>

  )
}
