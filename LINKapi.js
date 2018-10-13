var json = new XMLHttpRequest(); // start a new variable to store the JSON in
json.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) { // if HTTP header 200 - ok
    var object = JSON.parse(this.responseText); // set the variable 'object' to whatever we get back, in our case it is an array of 10 different arrays


//Currently the documen.write function is overwritting
//the html file and its data, essentially just running its 
//specific function. Check for alternatives, else, just make the
//JS file return the price as an int and display it in the html
    object.forEach(function(currency) { // for each of those arrays, split it into chunks called 'currency'
      if (currency.price_usd < 1) {
        document.write("HOSANNA");
      }else{
     document.write(
        currency.name +
        " is currently worth $" +
        currency.price_usd +
        " USD<br>"
      ); // get the array keys from the API
    }});
  }
};
json.open(
  "GET", // method
  "https://api.coinmarketcap.com/v1/ticker/Chainlink/?convert=AUD", // url
  true // async
); // initialise the request
json.send(); //send request