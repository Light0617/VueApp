<template>
    <div id="Stats" class="Stats">
        <h3>Stats</h3>
        <b-table stacked :items="statistics"></b-table>
        <!--<div id="canvas-holder" style="width:40%">-->
            <!--<canvas id="chart-area"></canvas>-->
        <!--</div>-->
    </div>
</template>

<script>
    // var randomScalingFactor = function() {
    //     return Math.round(Math.random() * 100);
    // };

    // var config = {
    //     type: 'pie',
    //     data: {
    //         datasets: [{
    //             data: [
    //                 randomScalingFactor(),
    //                 randomScalingFactor(),
    //                 randomScalingFactor(),
    //                 randomScalingFactor(),
    //                 randomScalingFactor(),
    //             ],
    //             backgroundColor: [
    //                 window.chartColors.red,
    //                 window.chartColors.orange,
    //                 window.chartColors.yellow,
    //                 window.chartColors.green,
    //                 window.chartColors.blue,
    //             ],
    //             label: 'Dataset 1'
    //         }],
    //         labels: [
    //             'Red',
    //             'Orange',
    //             'Yellow',
    //             'Green',
    //             'Blue'
    //         ]
    //     },
    //     options: {
    //         responsive: true
    //     }
    // };
    //
    // window.onload = function() {
    //     var ctx = document.getElementById('chart-area').getContext('2d');
    //     window.myPie = new Chart(ctx, config);
    // };
    export default {
        name: "Stats",
        props: ['statistics']
    }
</script>

<style scoped>
</style>