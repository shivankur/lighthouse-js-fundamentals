//Your function will receive an array of stations, 
//where each station itself is an array with a name, a capacity, and a venue type.
//
//In order for a station to be deemed appropriate, 
//it must have a capacity of at least 20, and be a school or community centre.

const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

function chooseStations(stations) {
  const choosenStations = [];

  for (const station of stations) {
    let capacity = station[1];
    let type = station[2];

    if (capacity >= 20) {
      if (location === 'school' || location === 'community centre') {
      choosenStations.push(station[0]);
      }
    }
  }
return choosenStations;
}
chooseStations(stations);







//['Bright Lights Elementary', 'Moose Mountain Community Centre']