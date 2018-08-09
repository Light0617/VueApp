<template>
    <div id="FilterOptions" class="FilterOptions">
        <form class="form-horizontal" role="form">
        <h2>Filter Options</h2>

        <b-form-group id="searchFilter"
                      label="Search:"
                      label-for="searchInput"
                      :invalid-feedback="invalidSearchInput"
                      :state="state">
            <!--ng-change="searchTyped()"/>-->
            <b-form-input id="searchInput" :state="state" v-model.trim="search" placeholder="Enter search key"/>
        </b-form-group>

        <div>
            <!--class="form-control" ng-change="searchTyped()"/>-->
            <div>Project Selector: <strong>{{ projectSelected }}</strong></div>
            <b-form-select v-model="projectSelected" :options="projectOptions" class="mb-3" />
        </div>

        <div>
            <!--<select ng-model="statusFilter" ng-options="x for x in selectionStatusOptions" class="form-control"-->
                    <!--ng-change="searchTyped()"/>-->
            <div>Status Filter: <strong>{{ statusSelected }}</strong></div>
            <b-form-select v-model="statusSelected" :options="statusOptions" class="mb-3" />
        </div>

        <div>
            <!--<select ng-model="selectionFilter" ng-options="x for x in selectionOptions" class="form-control"-->
                    <!--ng-change="searchTyped()"/>-->
            <div>Quick Filter: <strong>{{ quickSelected }}</strong></div>
            <b-form-select v-model="quickSelected" :options="quickOptions" class="mb-3" />
        </div>

        <div>
            <!--<select ng-model="bugFilter" ng-options="x for x in bugOptions" class="form-control"-->
                    <!--ng-change="searchTyped()"/>-->
            <div>Bug Filter: <strong>{{ bugSelected }}</strong></div>
            <b-form-select v-model="bugSelected" :options="bugOptions" class="mb-3" />
        </div>

        <div>
            <!--<select ng-model="buildMinFilter" ng-options="x for x in buildRangeOptions" class="form-control"-->
                    <!--ng-change="applyFilters()"/>-->
            <!--<select ng-model="buildMaxFilter" ng-options="x for x in buildRangeOptions" class="form-control"-->
                    <!--ng-change="applyFilters()"/>-->
            <div>Build Min/Max: <strong>{{ buildMinSelected }} - {{ buildMaxSelected }}</strong></div>
            <b-form-select v-model="buildMinSelected" :options="buildOptions" class="mb-3" />
            <b-form-select v-model="buildMaxSelected" :options="buildOptions" class="mb-3" />
        </div>

        <div>
            <!--<select ng-model="branchFilter" ng-options="x for x in branchOptions" class="form-control"-->
                    <!--ng-change="applyFilters()"/>-->
            <div>Branch: <strong>{{ branchSelected }}</strong></div>
            <b-form-select v-model="branchSelected" :options="branchOptions" class="mb-3" />
        </div>

        <!--date picker-->
            <div>
                <!--<datepicker></datepicker>-->
                <!--<vue-pikaday-->
                        <!--v-model="now"-->
                <!--/>-->
            </div>
        <b-form-group>
            <label class="control-label col-xs-4">Start:</label>
            <div class="col-xs-8 width-date-input">
                <div class="input-group">
                    <input type='text' id="sd" data-date-format="MM/DD/YYYY" class="form-control width-date-input"
                           ng-model="startDate"
                           ng-change="searchTyped()" datepicker-popup/>
                    <span class="input-group-addon">
                        <span class="glyphicon glyphicon-calendar"></span>
                        </span>
                </div>
                <div ng-show="isBefore()">
                    Start date is later than end date.
                </div>
            </div>

        </b-form-group>
        <b-form-group>
            <label class="control-label col-xs-4">End:</label>
            <div class="col-xs-8 width-date-input">
                <div class="input-group">
                    <input type='text' id="ed" data-date-format="MM/DD/YYYY" class="form-control width-date-input"
                           ng-model="endDate"
                           ng-change="searchTyped()" datepicker-popup/>
                    <span class="input-group-addon">
                        <span class="glyphicon glyphicon-calendar"></span>
                        </span>
                </div>
            </div>
        </b-form-group>
        </form>
    </div>
</template>

<script>
    export default {
        name: "FilterOptions",
        computed: {
            state () {
                return this.search.length >= 0 ? true : false
            },
            invalidSearchInput () {
                if (this.search.length >= 0) {
                    return ''
                } else if (this.search.length > 0) {
                    return 'Enter at least 4 characters'
                } else {
                    return 'Please enter something'
                }
            }
        },
        data() {
            return {
                search: '',
                projectSelected: 'All',
                statusSelected: 'All',
                quickSelected: 'All',
                bugSelected: 'All',
                branchSelected: 'ferrari',
                buildMinSelected: '2.1.0.214',
                buildMaxSelected: '2.1.0.215',
                projectOptions: [
                    { value: 'All', text: 'All'},
                    { value: 'Ferrari', text: 'Ferrari'},
                    { value: 'Develop', text: 'Develop'},
                    { value: 'Evolution', text : 'Evolution'}
                ],
                statusOptions: [
                    { value: 'All', text: 'All'},
                    { value: 'Pass', text: 'Pass'},
                    { value: 'Fail', text : 'Fail'},
                    { value: 'Skip', text : 'Skip'}
                ],
                quickOptions: [
                    { value: 'All', text: 'All'},
                    { value: 'Golden', text: 'Golden'},
                    { value: 'Core', text : 'Core'},
                    { value: 'NonCore', text : 'NonCore'}
                ], bugOptions:[
                    { value: 'All', text: 'All'},
                    { value: 'BugReported', text: 'Bug Reported'},
                    { value: 'BugFree', text: 'Bug Free'},
                ], branchOptions: [
                    { value: 'ferrari', text: 'ferrari'},
                ], buildOptions: [
                    { value: '2.1.0.215', text: '2.1.0.215'},
                    { value: '2.1.0.214', text: '2.1.0.214'},
                ]
            }
        }
    }
</script>

<style scoped>

</style>