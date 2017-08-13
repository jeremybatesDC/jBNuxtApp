<template>
    <div id="jBStatsInnerWrapper">
      
      Stats

    </div>
</template>

<script>
//fetch isnT automatically isomorphic
require('es6-promise').polyfill();
require('isomorphic-fetch');

var JBStats = (function(){
  fetch('//m.mlb.com/lookup/json/named.psc_leader_hit_hr_dist.bam?season=2017')
    .then(function(response) {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
    })
    .then(function(responseItem) {

        console.log(`the longest homerun this season went ${responseItem.psc_leader_hit_hr_dist.queryResults.row[0].distance} feet`);
    })
    ;
})();

//JBStats();

export default{components: {
  JBStats
}};

</script>

<style>

</style>