var baseURL = 'https://forex.1forge.com/1.0.2/quotes?&api_key=idsC6Fq8SKwMUPMTvc3EjOHuPD3MN1fo';
var url;

var searchTerm = document.querySelector('.search');
var submitBtn = document.querySelector('.submit');
var searchForm = document.querySelector('form');

searchForm.addEventListener('submit', fetchResults);

function fetchResults(e) {
  // Use preventDefault() to stop the form submitting
  e.preventDefault();

  // Assemble the full URL
  url = baseURL + 'pairs=' + quoteWanted;
}
// const ForexDataClient = require("https://forex.1forge.com/1.0.2/quotes?pairs=&api_key=idsC6Fq8SKwMUPMTvc3EjOHuPD3MN1fo");
//
// let client = new ForexDataClient('idsC6Fq8SKwMUPMTvc3EjOHuPD3MN1fo');
//
// //Get quotes for specified pairs
// client.getQuotes(['EURUSD', 'GBPJPY', 'AUDUSD']).then(response => {
//     console.log(response);
// });
//
// //Get the symbols list
// client.getSymbols().then(response => {
//     console.log(response);
// });
//
// //Convert from one currency to another
// client.convert('EUR', 'USD', 100).then(response => {
//     console.log(response);
// });
//
// //Get the market status
// client.marketStatus().then(response => {
//     console.log(response);
// });
//
// //Get quota
// client.quota().then(response => {
//     console.log(response);
// });
