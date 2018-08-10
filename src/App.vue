<template>
    <div id="app">
        <Header/>
        <Scoreboard/>
    </div>
</template>

<script>
import Header from './components/Header.vue'
import Scoreboard from './components/Scoreboard.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

    export default {
        name: 'app',
        components: {
            Scoreboard,
            Header
        }
    }

</script>

<style scoped>
</style>


