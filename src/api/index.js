import config from './config.js';
const apiKey=config.apiKey
const URL= `https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=:Venezuela&api_key=${apiKey}&format=json`;

export default function getArtists(country) {
  const url = URL.replace(':Venezuela', country);
  return fetch(url)
  	.then(res => res.json())
  	.then(json => json.topartists.artist)
}