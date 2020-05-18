import React from 'react'

function Footer() {
    return (
       <footer className='footer'>
           <h3>please sign up</h3>
         <form>
              <input type='text' placeholder='Enter your name'/>
              <span className='box'>go!</span>
         </form>
         <div className='social'>
           <i className='fab fa-facebook'></i>
           <i className='fab fa-twitter'></i>
           <i className='fab fa-instagram'></i>
         </div>

       </footer>
    )
}

export default Footer
