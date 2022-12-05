import React from 'react'

const  Display = ({days,hrs,mins,secs}) =>{
  return (
    <div>
        <h1>SALES COUNTDOWN TIMER</h1>
        <h2>OFFER ENDS IN</h2>
        <table>
          
                <tbody>
                    <tr>
                        <th>{days}</th>  
                        <th>{hrs}</th>  
                        <th>{mins}</th>  
                        <th>{secs}</th>  
                       </tr> 
                
                    <tr>
                        <td>DAYS</td>  
                        <td>HOURS</td>  
                        <td>MINUTES</td>  
                        <td>SECONDS</td>  
                    </tr>
                </tbody>
         
        </table>

    </div>
  )
}
export default Display

