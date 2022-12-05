import React,{useEffect,useState} from 'react'
import Display from'./Display'
const App =()=>{
    const endTime=new Date('December 5,2022 00:00:00').getTime();
    const [currentTime,setcurrentTime]=useState(new Date().getTime());
    const gap=endTime-currentTime;

    const secs=1000;
    const mins=secs*60;
    const hrs=mins*60;
    const days=hrs*24;

    const remainingDays=Math.floor(gap/days);
    const remainingHours=Math.floor((gap%days)/hrs);
    const remainingMinutes=Math.floor((gap%hrs)/mins);
    const remainingSeconds=Math.floor((gap%mins)/secs);

    useEffect(()=>{
        setTimeout(()=>setcurrentTime(new Date().getTime()),1000);
    
    },[currentTime])

return(
    <div>
        <center>
            <Display days={remainingDays}
            hrs={remainingHours} mins={remainingMinutes}
            secs={remainingSeconds} />
        </center>
    </div>
)

}
export default App; 