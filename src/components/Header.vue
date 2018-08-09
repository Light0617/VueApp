<template>
    <v-layout row class="header">
        <md-button to="/home" class="navbar-header navbar-text">
            <b>Lantern</b>
        </md-button>
        <md-button to="/" class="navbar-text">
            Main Page
        </md-button>
        <md-button to="/scoreboard/tests-page" class="navbar-text">
            All Test Runs
        </md-button>
        <md-button to="/scoreboard/report-page" class="navbar-text">
            Report
        </md-button>
        <v-spacer/>
        <md-button to="/scoreboard/report-page" class="navbar-right navbar-text">
            Link
        </md-button>
        <md-button disabled="true"/>
    </v-layout>
</template>

<script>
    export default {
        name: 'Header',
        data() {
            return {
                inSuitesPage : true,
                inAllTests: false,
                inReportPage: false
            }
        }
    }
</script>

<style scoped lang="scss">
    .header{
        background-color: #c4e5ef;
        margin-bottom: 25px;
    }

    .navbar-header{
        font-size: 20px;
        line-height: 21px;
    }

    .navbar-text{
        color: #ffffff;
        float: left;
        height: 45px;
    }

    .navbar-right{
        float: right !important;
        margin-right: -15px;
    }


</style>