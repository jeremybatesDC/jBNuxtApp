var UtilFetchFunction = function(theUrlToFetch){
  var 'http://m.mlb.com/lookup/json/named.psc_leader_hit_hr_dist.bam?season=2017';
  fetch(theUrlToFetch)  
  .then(function(response) {
    console.log(response); 
    return response.json();
  })
  .catch(function(error) {  
    console.log('Request failed', error)  
  });
}

module.exports = UtilFetchFunction;