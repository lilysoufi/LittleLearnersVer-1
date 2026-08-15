import SectionHeader from "../SectionHeader/SectionHeader"
import './FeeStructure.css'


const FeeStructure = () => {
    let heading = ["Program" , "Age Group" , "Annual Tuition" , "Registration Fee" , "Activity Fee"] 
    let body5 = [
        {
            program :'Nursery' ,
            ageGroup :'2 - 3 Years' ,
            anuualTuition :'$1,686' ,
            registrationFee :'$162' ,
            activityFee :'$12'
        }
        ,
          {
            program :'Pre - Kindergartens' ,
            ageGroup :'3 - 4 Years' ,
            anuualTuition :'$2,686' ,
            registrationFee :'$220' ,
            activityFee :'$16'
        }
        ,
          {
            program :'Kindergarten' ,
            ageGroup :'4 - 5 Years' ,
            anuualTuition :'$3,686' ,
            registrationFee :'$340' ,
            activityFee :'$20'
        }
    ]
    let body2 = [
        ['Nursery' ,'2 - 3 Years','$1,686' ,'$162' ,'$12'] ,
        ['Pre - Kindergartens' ,'3 - 4 Years' ,'$2,686' ,'$220' ,'$16'] ,
        ['Kindergarten' , '4 - 5 Years' , '$3,686' , '$340' , '$20']
    ]

    let table1 = [
      {
        colunmName : "Program" ,
        col : [ 
          {
            value : ""
          }
        ]
      }
    ]
  return (
    <div>
      <SectionHeader 
      comment= 'Our Features'
      title ="Fee Structure"
      description ='Our fee structure is transparent, and we strive to keep our fees competitive within the education sector. The fees vary based on the program, age group, and any additional services chosen.'
      
      />
      <div className="table-container">
        <div className="header-container">
        {heading.map((item) => {
          return (
            <div className="heading-row">
              <h2>{item}</h2>
            </div>
          )
        })}
        </div>

      <div className="body-container">
        <div className="body-row">
        {body2.map((item2) => {
          return (
            <div className="body">
              <p>{item2}</p>
            </div>
          )
        })}
      </div>
      </div>
        </div>
    </div>
  )
}

export default FeeStructure
