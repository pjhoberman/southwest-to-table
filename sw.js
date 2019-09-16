header = ["departure", "arrival", "duration", "stops", "fares"];
console.log(header.join("\t"));
printable_result = ""

$('li').each(function(e){
  departure = $(this).find('.air-operations-time-status[type="origination"] span.time--value').text();
  departure = departure.match("Departs (.*)")[1];
  arrival = $(this).find('.air-operations-time-status[type="destination"] span.time--value').text();
  arrival = arrival.match("Arrives (.*)")[1];
  duration = $(this).find('.flight-stops--duration-time').text();
  stops = $(this).find('.flight-stops--duration').text();
  stops = stops.match(/.*(\d)\sstops?/)[1]
  fare_els = $(this).find('.fare-button');
  fares = [];
  for(i=0; i<fare_els.length; i++){
  	el = $(fare_els[i]);
    this_fare = el.find('.fare-button--value-total').text();
    low = el.find('.seats-left-text').text();
    if(low !== "") {
      fares.push(this_fare + " " + low);    
    } else {
      fares.push(this_fare);
    } // else
  } // for
  result = {
  	"departure": departure,
    "arrival": arrival,
    "duration": duration,
    "stops": stops,
    "fares": fares
  }

	result = [departure, arrival, duration, stops, fares];
  console.log(result.join("\t"));
  printable_result += "\n" + result.join("\t");

  
});
console.log(printable_result);
