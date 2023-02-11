const updatetime=()=>{
    let d = new Date();
    
    india.innerHTML = d.toLocaleString('en-US', { timeZone: 'Asia/kolkata' }).split(",")[1]
    usa.innerHTML = d.toLocaleString('en-US', { timeZone: 'America/Los_Angeles' }).split(",")[1]
    China.innerHTML = d.toLocaleString('en-US', { timeZone: 'Asia/Shanghai' }).split(",")[1]
    
    let alarmhour = alarm.value.split(":")[0]
    let alarmminutes = alarm.value.split(":")[1]
    console.log(d.getHours(), alarmhour);
    console.log(d.getMinutes(), alarmminutes);
    
    if (d.getHours() == alarmhour && d.getMinutes() == alarmminutes) {
    
        console.log("Alarm is ringing")
        let audio1=new Audio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3")
        audio1.play();
    
    
    
    }

}



    setInterval(updatetime,1000)



 





