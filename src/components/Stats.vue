<template>
    <div id="Stats" class="Stats">
        <h3>Stats</h3>
        <b-table small stacked :items="statistics"></b-table>
        <pie-chart :data="pieData"></pie-chart>
    </div>
</template>

<script>
    export default {
        props: ['statistics'],
        name: "Stats",
        data () {
            return {
                pieData: [
                    ['PASSED', this.statistics[0].PassingTests],
                    ['SKIPPED', this.statistics[0].SkippedTests],
                    ['FAILED', this.statistics[0].FailingTests]]
            }
        }
    }
</script>

<style scoped>
</style>