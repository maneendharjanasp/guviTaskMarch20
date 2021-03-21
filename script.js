var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.eu/rest/v2/all", true);
request.send();
request.onload = function(){
    var countryData = JSON.parse(this.response);
    console.log("All Country Names are as follows:");
    for(var data in countryData){
        console.log((parseInt(data)+1)+". "+countryData[data].name);
    }
}