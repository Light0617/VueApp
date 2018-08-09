<template>
    <div>
        <v-layout row wrap>
            <v-flex xs3>
                <v-card>
                    <v-card-text>
                        <FilterOptions/>
                    </v-card-text>
                </v-card>
                <v-card>
                    <v-card-text>
                        <Stats/>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex xs8 offset-xs0 offset-lg1>
                <v-card>
                    <v-card-text>
                        <Suites/>
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
    export default {
        name: "scoreboard",
        components: {
            Suites,
            Stats,
            FilterOptions
        }
    }
</script>

<style scoped lang="scss">

</style>