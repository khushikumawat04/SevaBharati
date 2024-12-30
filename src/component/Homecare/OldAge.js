import React from 'react'
import FormfacadeEmbed from "@formfacade/embed-react";
const OldAgeForm = () => {
  return (
    <div>

<FormfacadeEmbed

formFacadeURL="https://formfacade.com/include/102696232577715632565/form/1FAIpQLScZqMftz4ZCGGhpjfYAVoamRLcbtiPp0fAbxSnGZutrWY5AAA/classic.js/?div=ff-compose"

onSubmitForm={() => alert("Form submitted Succesfully")}

/> 
{/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf8OmJ7qfCIQmTS2FmQl3peesYRA5Ne5fevXdoxO4Oxn3ruFQ/viewform?embedded=true" width="640" height="9429" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */}
    </div>
  )
}

export default OldAgeForm ;
