<template>
    <div>
        <div>
            <h2>Seymour Tower Available Walking Hours</h2>
        </div>
        <div @click="calculateWalkingHours(state.data)">
            <h6>
                CALCULATE WALK TIMES
            </h6>
        </div>
        <div v-if="state.walkingHours">
            <h2>Two possible walking hours:</h2>
            <p>{{ state.walkingHours.highTime1 + ' AM' }}</p>
            <p>{{ state.walkingHours.highTime2 + ' PM' }}</p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { useData } from '@/store'

export default defineComponent({
    name: 'App',
    setup() {
        const { state, setData, calculateWalkingHours } = useData()

        const currentMonth = new Date().getMonth() + 1
        const url = `https://poj-az-fun-01.azurewebsites.net/api/GetTideData?code=EFIdtI3kXgmXYIawi9buYML2L33ALxh/NvqscQpz4Nl0oDB6lHHcag==&month=${currentMonth}`

        onMounted(() => {
            fetch(url)
                .then(res => res.json())
                .then(data => setData(data))
        })

        return {
            state,
            calculateWalkingHours
        }
    }
})
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
