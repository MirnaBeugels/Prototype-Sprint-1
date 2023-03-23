function lightSwitch() {
    var toggle = document.getElementById("toggle");
    var bulb = document.getElementById("bulb");
    var onoff = document.getElementById("onoff");
    
    //Code for the api call, pre-requisites 
    var apiEndpoint = "https://eihxqcwtouoobfrckoxt.supabase.co/rest/v1/lampsignal?id=eq.2&apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVpaHhxY3d0b3Vvb2JmcmNrb3h0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzkyNTQ0MDAsImV4cCI6MTk5NDgzMDQwMH0.m7Z667Ku3gcAnJ3y85NkWw3FMx90pfv71EVgiYedBYo";
    var lampOn = {id: 2,lamp_on:true};
    var lampOff = {id: 2,lamp_on: false};
    
    
    
    if (toggle.checked == true) {
      bulb.style.backgroundImage = "url(lamp-aan.png)";
      onoff.innerHTML = "ON";
      onoff.style.background = "rgb(0, 160, 0";
      fetch(apiEndpoint, {method:"PUT", headers:{"Content-Type":"application/json", "Access-Control-Allow-Origin": "*"}, body: JSON.stringify(lampOn)})
      .then(response => {return response.json();})
      .then(json =>{console.log(json)})
      .catch((error) => {console.error("Error:", error);
      });

      

    } else if (toggle.checked != true) {
      bulb.style.backgroundImage = "url(lamp-uit.png)";
      onoff.innerHTML = "OFF";
      onoff.style.background = "rgb(160, 0, 0)";
      fetch(apiEndpoint, {method:"PUT", headers:{"Content-Type":"application/json", "Access-Control-Allow-Origin": "*"}, body: JSON.stringify(lampOff)})
      .then(response => {return response.json();})
      .then(json =>{console.log(json)})
      .catch((error) => {console.error("Error:", error);
      });
      
    }
}
  

