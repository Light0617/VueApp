<template>
    <div id="Suits" class="Suits">
        <h3>Suites</h3>
        <b-table small hover :items="filteredSuites"></b-table>
    </div>
</template>

<script>
    export default {
        name: "Suites",
        props: ['filteredSuites']
    }
</script>

<style scoped>

</style>