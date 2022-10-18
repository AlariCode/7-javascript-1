const cities = {
	msk: {
		temp: {
			celcius: 25
		}
	},
	spb: {

	}
}
const city = 'msk'
if (cities[city] != undefined && cities[city].temp != undefined) {
	console.log(cities[city].temp.celcius);
}

console.log(cities[city]?.temp?.celcius);

