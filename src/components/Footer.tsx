import './Footer.scss'

const Footer = () => {
  const date = new Date;
    return (
      <div className="footer">
          <div className="divider">
          </div>
          <div className='footer-wrapper'>
            <div className="image-footer">
              <img src="https://i.imgur.com/4NPniej.jpg" srcSet=''/>
            </div>
            <p>&copy;
            {
             ' ' + date.getFullYear() + ' Picture a Scientist. All Rights Reserved.'
            }
            </p>
          </div>
      </div>
    )
  }
  
  export default Footer