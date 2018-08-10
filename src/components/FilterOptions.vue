<template>
    <div id="FilterOptions" class="FilterOptions">
        <form class="form-horizontal" role="form">
        <h3>Filter Options</h3>

        <b-form-group id="formGroup"
                      :invalid-feedback="invalidInput"
                      :state="state">

            <b-container>
                <b-row>
                    <b-col sm="4"><label :for="value">value:</label></b-col>
                    <b-col sm="7">
                        <input
                                type="text"
                                :value="value"
                                v-on="listeners"/>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col sm="4"><label :for="searchInput">Search:</label></b-col>
                    <b-col sm="7">
                        <b-form-input id="searchInput" v-model.trim="search"
                                      placeholder="Enter search key"/>
                        <!--<input type="text" v-bind:value="value" v-on:input="updateValue($event.target.value)">-->
                    </b-col>
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
            <p>{{search}}</p>
            <p>{{projectSelected}}</p>
            <p>{{statusSelected}}</p>
            <p>{{quickSelected}}</p>
            <p>{{bugSelected}}</p>
            <p>{{branchSelected}}</p>
            <p>{{buildMaxSelected}}</p>
            <p>{{buildMaxSelected}}</p>
            <p>{{startDateSelected}}</p>
            <p>{{endDateSelected}}</p>
            <!--<p>{{filters.bugSelected}}</p>-->
            <!--<p>{{filters.branchSelected}}</p>-->
            <!--<p>{{filters.buildMaxSelected}}</p>-->
            <!--<p>{{filters.buildMaxSelected}}</p>-->
            <!--<p>{{filters.startDateSelected}}</p>-->
            <!--<p>{{filters.endDateSelected}}</p>-->
        </div>
    </div>
</template>

<script>
    const projectOptions = [
            { value: 'All', text: 'All'},
            { value: 'Ferrari', text: 'Ferrari'},
            { value: 'Develop', text: 'Develop'},
            { value: 'Evolution', text : 'Evolution'}
        ];
    const statusOptions = [
            { value: 'All', text: 'All'},
            { value: 'Pass', text: 'Pass'},
            { value: 'Fail', text : 'Fail'},
            { value: 'Skip', text : 'Skip'}
        ];
    const quickOptions = [
            { value: 'All', text: 'All'},
            { value: 'Golden', text: 'Golden'},
            { value: 'Core', text : 'Core'},
            { value: 'NonCore', text : 'NonCore'}
        ];
    const bugOptions = [
            { value: 'All', text: 'All'},
            { value: 'BugReported', text: 'Bug Reported'},
            { value: 'BugFree', text: 'Bug Free'},
        ];
    const branchOptions = [
            { value: 'ferrari', text: 'ferrari'},
        ];
    const buildOptions = [
            { value: '2.1.0.215', text: '2.1.0.215'},
            { value: '2.1.0.214', text: '2.1.0.214'},
        ];

    // let search =  '';
    // let projectSelected = 'All';
    // let statusSelected = 'All';
    // let quickSelected = 'All';
    // let bugSelected = 'All';
    // let branchSelected = 'ferrari';
    // let buildMinSelected = '2.1.0.214';
    // let buildMaxSelected = '2.1.0.215';
    // let startDateSelected = '';
    // let endDateSelected = '';
    export default {
        // props: ['search', value],
        props: {
            value: {
                type: String,
                default: ''
            },
        },
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
            },
            listeners(){
                return {
                    ...this.$listeners,
                    input: event => this.$emit('input', event.target.value)
                }
            }
        },
        data() {
            return {
                value1: '',
                search :  '',
                projectSelected : 'All',
                statusSelected : 'All',
                quickSelected : 'All',
                bugSelected : 'All',
                branchSelected : 'ferrari',
                buildMinSelected : '2.1.0.214',
                buildMaxSelected : '2.1.0.215',
                startDateSelected : '',
                endDateSelected : '',
                name: "FilterOptions",
                // filters : [
                //     {search: ''},
                //     {projectSelected: 'All'},
                //     {statusSelected: 'All'},
                //     {quickSelected: 'All'},
                //     {bugSelected: 'All'},
                //     {branchSelected: 'ferrari'},
                //     {buildMinSelected: '2.1.0.214'},
                //     {buildMaxSelected: '2.1.0.214'},
                //     {startDateSelected: ''},
                //     {endDateSelected: ''},
                // ],
                // search: '',
                // projectSelected: 'All',
                // statusSelected: 'All',
                // quickSelected: 'All',
                // bugSelected: 'All',
                // branchSelected: 'ferrari',
                // buildMinSelected: '2.1.0.214',
                // buildMaxSelected: '2.1.0.215',
                // startDateSelected: '',
                // endDateSelected: '',
                projectOptions: projectOptions,
                statusOptions: statusOptions,
                quickOptions: quickOptions,
                bugOptions:bugOptions,
                branchOptions: branchOptions,
                buildOptions: buildOptions,

            }
        }
    }
</script>

<style scoped>

</style>