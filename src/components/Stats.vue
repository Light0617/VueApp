<template>
    <div id="Stats" class="Stats">
        <h2>Stats</h2>
        <b-table stacked :items="stats"></b-table>
    </div>
</template>

<script>
    const stats = [{
        "Unique Suites": 126,
        "Passing Suites": 22,
        "Average Score Suites": '17%',
        "Total Tests": 807,
        "Passing Tests": 191,
        "Skipped Tests": 286,
        "Failing Tests": 330,
        'Average Score Tests': '24%',
        "Build Range": "3.1.0.50 -3.1.0.52",
        "Date Range": "2018/07/08 - 2018/08/08",
        "CPU Time": '1 milliseconds'
    }];

    export default {
        name: "Stats",
        data () {
            return {
                stats: stats
            }
        }
    }
</script>

<style scoped>
</style>