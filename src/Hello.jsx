import React from 'react'

const Hello = ({title,name,surname,verified,onClicks}) => {
   
    if(verified)
    {
       
  return (
    <div>
      {name}
      {surname}
      {title}
      
    </div>
  )
}
else{
    return(
        <div>
            {name}
            {surname}
            {title}
            <p>
                badcall
            </p>
            <button onClick={onClicks}>
        jsd
        </button>
        </div>
    )
}
}
export default Hello
