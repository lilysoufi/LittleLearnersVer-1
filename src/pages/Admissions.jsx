import AdmissionProcess from "../components/AdmissionProcess/AdmissionProcess"
import FeeStructure from "../components/FeeStructure/FeeStructure"
import HeroTemplate from "../components/HeroTemplate/HeroTemplate"


const Admissions = () => {
  return (
    <div>
        {/* <h2>hey</h2> */}
       <HeroTemplate 
      section='Admission'
      title="Join Our Family of Young Learners"
      desc="At Little Learners Academy, we welcome you to embark on an exciting educational journey for your child. Our admission process is designed to be transparent, straightforward, and inclusive. Here's a step-by-step guide to joining our school"
      />
      <AdmissionProcess />
      {/* <FeeStructure /> */}
    </div>
  )
}

export default Admissions
