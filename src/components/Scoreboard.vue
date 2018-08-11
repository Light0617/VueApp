<template>
    <div>
        <h3>{{search}}</h3>
        <h3>target2={{target2}}</h3>
        <v-layout row wrap justify-space-around>
            <v-flex xs3>
                <v-card>
                    <v-card-text>
                        <FilterOptions
                                v-model="newData"
                                @change="updateValue"
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
            'SuiteName' : 'SanitySnapPoolTestSuiteSanitySnapPool',
            'PassingTests' : '7/100',
            'Date': '2018/07/25 23:54:34',
            'Version': '3.1.0.123',
            'TargetAddress': '10.196.165.89',
            'Branch' : 'ferrari',
            'Bugs': '',
            'FailedReason' : '["canSuspendSnapshot"]',
            'status': 'pass',
            '_rowVariant': 'success'
        },
        {
            'SuiteName' : 'SanityIscsiTestSuite',
            'PassingTests' : '17/100',
            'Date': '2018/07/25 23:54:34',
            'Version': '3.1.0.123',
            'TargetAddress': '10.196.165.89',
            'Branch' : 'ferrari',
            'Bugs': '',
            'FailedReason' : '["canSuspendSnapshot"]',
            'status': 'fail',
            '_rowVariant': 'danger'
        },
        {
            'SuiteName' : 'SanityIscsiTestSuite',
            'PassingTests' : '17/100',
            'Date': '2018/07/25 23:54:34',
            'Version': '3.1.0.123',
            'TargetAddress': '10.196.165.89',
            'Branch' : 'ferrari',
            'Bugs': '',
            'FailedReason' : '["canSuspendSnapshot"]',
            'status': 'ignore',
            '_rowVariant': 'warning'
        },
        {
            'SuiteName' : 'SanityIscsiTestSuite',
            'PassingTests' : '17/100',
            'Date': '2018/07/25 23:54:34',
            'Version': '3.1.0.123',
            'TargetAddress': '10.196.165.89',
            'Branch' : 'ferrari',
            'Bugs': '',
            'FailedReason' : '["canSuspendSnapshot"]',
            'status': 'pass',
            '_rowVariant': 'success'
        },
        {
            'SuiteName' : 'SanityIscsiTestSuite',
            'PassingTests' : '17/100',
            'Date': '2018/07/25 23:54:34',
            'Version': '3.1.0.123',
            'TargetAddress': '10.196.165.89',
            'Branch' : 'ferrari',
            'Bugs': '',
            'FailedReason' : '["canSuspendSnapshot"]',
            'status': 'fail',
            '_rowVariant': 'danger'
        }
    ];

    let statistics = [{
        "UniqueSuites": 999,
        "PassingSuites": 22,
        "AverageScoreSuites": '17%',
        "TotalTests": 807,
        "PassingTests": 191,
        "SkippedTests": 286,
        "FailingTests": 330,
        'AverageScoreTests': '24%',
        "BuildRange": "3.1.0.50 -3.1.0.52",
        "DateRange": "2018/07/08 - 2018/08/08",
        "CPUTime": '1 milliseconds'
    }];
    let search = "AOA";
    export default {
        name: "scoreboard",
        components: {
            Suites,
            Stats,
            FilterOptions
        },
        methods: {
            updateValue () {
                this.target2 = this.newData;
            }
        },
        data(){
            return {
                target2:'AOAAOA',
                value: '',
                newData:'',
                filteredSuites: filteredSuites,
                statistics: statistics,
                search: search
            }
        }
    }
</script>

<style scoped lang="scss">

</style>