/*
 * =============================
 *            TYPES
 * =============================
 */

type DataState = {
    data: null | DataType[]
    walkingHours: null | AvailableTimes
}

type DataType = {
    date: string
    highTime1: string
    highHeight1?: string
    highHeightinFeet1?: string
    highTime2: string
    highHeight2?: string
    highHeightinFeet2?: string
    lowTime1: string
    lowHeight1?: string
    lowHeightinFeet1?: string
    lowTime2: string
    lowHeight2?: string
    lowHeightinFeet2?: string
    weekend: boolean
    today: boolean
}

type AvailableTimes = {
    highTime1?: Date
    highTime2?: Date
}

export { DataState, DataType, AvailableTimes }
