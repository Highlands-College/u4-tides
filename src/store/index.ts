import { reactive } from 'vue'
import { DataState, DataType } from '@/global'

const useData = () => {
    const state: DataState = reactive({
        data: null,
        walkingHours: null
    })

    const setData = (data: DataType[]) => (state.data = data)

    const calculateWalkingHours = (data: DataType[]) => {
        const today: DataType = JSON.parse(
            JSON.stringify(data.filter(e => e.today))
        )[0]

        const d = new Date()

        state.walkingHours = {
            highTime1: new Date(
                d.getFullYear(),
                d.getMonth(),
                d.getDate(),
                parseInt(today.highTime1.split(':')[0]) + 2,
                parseInt(today.highTime1.split(':')[1])
            ),
            highTime2: new Date(
                d.getFullYear(),
                d.getMonth(),
                d.getDate(),
                parseInt(today.highTime2.split(':')[0]) + 2,
                parseInt(today.highTime2.split(':')[1])
            )
        }
    }

    return {
        state,
        setData,
        calculateWalkingHours
    }
}

export { useData }
