<template>
    <div>
        <!--<h3>{{filters.branchSelected}}</h3>-->
        <h3>"YOY"</h3>
        <h3>{{filters}}</h3>
        <v-layout row wrap justify-space-around>
            <v-flex xs3>
                <v-card>
                    <v-card-text>
                        <FilterOptions
                                v-model="filters"
                        />
                    </v-card-text>
                </v-card>
                <v-card>
                    <v-card-text>
                        <Stats :statistics="statistics"/>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex xs8>
                <v-card>
                    <v-card-text>
                        <Suites :filteredSuites="filteredSuites"/>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
    import FilterOptions from './FilterOptions.vue';
    import Stats from "./Stats";
    import Suites from "./Suites";

    let filteredSuites = [
        {
            'SuiteName' : 'SanitySnapPoolTestSuite',
            'PassingTests' : '7/100',
            'Date': '2018/07/25 23:54:34',
            'Version': '3.1.0.123',
            'TargetAddress': '10.196.165.89',
            'Branch' : 'ferrari',
            'Bugs': '',
            'FailedReason' : '["canSuspendSnapshot"]'
        },
        {
            'SuiteName' : 'SanityIscsiTestSuite',
            'PassingTests' : '17/100',
            'Date': '2018/07/25 23:54:34',
            'Version': '3.1.0.123',
            'TargetAddress': '10.196.165.89',
            'Branch' : 'ferrari',
            'Bugs': '',
            'FailedReason' : '["canSuspendSnapshot"]'
        }
    ];

    let statistics = [{
        "Unique Suites": 999,
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
        name: "scoreboard",
        components: {
            Suites,
            Stats,
            FilterOptions
        },
        data(){
            return {
                filteredSuites: filteredSuites,
                statistics: statistics
            }
        }
    }
</script>

<style scoped lang="scss">

</style>