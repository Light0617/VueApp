<template>
    <div id="FilterOptions" class="FilterOptions">
        <form class="form-horizontal" role="form">
        <h3>Filter Options</h3>

        <b-form-group id="formGroup"
                      :invalid-feedback="invalidInput"
                      :state="state">

            <b-container>
                <b-row>
                    <b-col sm="4"><label :for="searchInput">Search:</label></b-col>
                    <b-col sm="7"><b-form-input id="searchInput" :state="state" v-model.trim="search" placeholder="Enter search key"/></b-col>
                </b-row>
                <b-row>
                    <b-col sm="4"><label>Project Selector:</label></b-col>
                    <b-col sm="7"><b-form-select v-model="projectSelected" :options="projectOptions"/></b-col>
                </b-row>

                <b-row>
                    <b-col sm="4"><label>Status Selected:</label></b-col>
                    <b-col sm="7"><b-form-select v-model="statusSelected" :options="statusOptions"/></b-col>
                </b-row>

                <b-row>
                    <b-col sm="4"><label>Quick Selected:</label></b-col>
                    <b-col sm="7"><b-form-select v-model="quickSelected" :options="quickOptions"/></b-col>
                </b-row>

                <b-row>
                    <b-col sm="4"><label>Bug Selected:</label></b-col>
                    <b-col sm="7"><b-form-select v-model="bugSelected" :options="bugOptions"/></b-col>
                </b-row>

                <b-row>
                    <b-col sm="4"><label>Build Min:</label></b-col>
                    <b-col sm="7">
                        <b-form-select v-model="buildMinSelected" :options="buildOptions"/>
                    </b-col>
                </b-row>

                <b-row>
                    <b-col sm="4"><label>Build Max:</label></b-col>
                    <b-col sm="7">
                        <b-form-select v-model="buildMaxSelected" :options="buildOptions"/>
                    </b-col>
                </b-row>

                <b-row>
                    <b-col sm="4"><label>Branch:</label></b-col>
                    <b-col sm="7"><b-form-select v-model="branchSelected" :options="branchOptions"/></b-col>
                </b-row>

                <b-row>
                    <b-col sm="4"><label>Start Date:</label></b-col>
                    <b-col sm="7"><b-form-input v-model="startDateSelected" type="date"/></b-col>
                </b-row>

                <b-row>
                    <b-col sm="4"><label>End Date:</label></b-col>
                    <b-col sm="7"><b-form-input v-model="endDateSelected" type="date"/></b-col>
                </b-row>


            </b-container>
        </b-form-group>
        </form>
        <div>
            <p>{{startDateSelected}}</p>
            <p>{{endDateSelected}}</p>
            <p>{{endDateSelected >= startDateSelected ? 'YES' : 'NO'}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "FilterOptions",
        computed: {
            state () {
                return this.startDateSelected <= this.endDateSelected ? true : false;
            },
            invalidInput () {
                if (this.startDateSelected <= this.endDateSelected) {
                    return ''
                } else {
                    return 'Please start date should be earlier!';
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
                startDateSelected: '',
                endDateSelected: '',
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