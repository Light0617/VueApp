<template>
    <div id="Suits" class="Suits">
        <h3>Suites</h3>
        <b-table hover :items="suites"></b-table>
    </div>
</template>

<script>
    const suites = [
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
    export default {
        name: "Suites",
        data(){
            return {
                suites: suites
            }
        }
    }
</script>

<style scoped>

</style>