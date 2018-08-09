<template>
    <div class="header navbar container-fluid" id = "header">
        <md-button to="/home" class="navbar-header">
            <b>Lantern</b>
        </md-button>
        <md-button to="/" class="navbar-content">
            Main Page
        </md-button>
        <md-button to="/scoreboard/tests-page" class="navbar-content">
            All Test Runs
        </md-button>
        <md-button to="/scoreboard/report-page" class="navbar-content">
            Report
        </md-button>
        <md-button to="/scoreboard/report-page" class="navbar-right navbar-content">
            Link
        </md-button>
    </div>
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

    }


    .navbar {
        border: none;
        font-size: 13px;
        font-weight: 300;
        background-color: #c4e5ef;
        border-radius: 0;
        position: relative;
        min-height: 60px;
        margin-bottom: 21px;
    }
    .container-fluid {
        margin-right: auto;
        margin-left: auto;
        padding-left: 15px;
        padding-right: 15px;
    }
    .navbar-header{
        color: #ffffff;
        float: left;
        padding: 12px 15px;
        font-size: 19px;
        line-height: 21px;
        height: 45px;
    }

    .navbar-content{
        color: #ffffff;
        float: left;
        padding: 12px 15px;
        line-height: 21px;
        height: 45px;
    }

    .navbar-right{
        float: right !important;
        margin-right: -15px;
    }


</style>