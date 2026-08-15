import './StudentInformation.css'
import SectionHeader from "../SectionHeader/SectionHeader"


const StudentInformation = ({contactForm , submitButton}) => {
  return (
    <div>
       <SectionHeader
         comment = 'Contact Form'
         title ='Student Information'
         description ='If you have specific questions or wish to request more information about Little Learners Academy, please complete the contact form below. Kindly provide the following details to help us better understand your needs .'
        />

        <div className="contact-form-container">
            <div className='logo-container'>
                <div className='logo'><img src='./img/Vector (12).png'/></div>
                <div className='logo'><img src='./img/Vector (13).png'/></div>
                <div className='logo'><img src='./img/Vector (14).png'/></div>
            </div>
            <form className='form-style'>
            {contactForm.map(item => {
                return (
                    <div className='input-group'>
                        <label >{item.title}</label>
                        <input className='form-input' placeholder={item.placeholder}></input>
                    </div>
                )
            })}
            </form>
            <button className='submit-button'>{submitButton.name}</button>
        </div>
    </div>
  )
}

export default StudentInformation
