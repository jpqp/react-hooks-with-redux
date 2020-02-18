import { createContext } from 'react'

interface EventState {
    id: number
    title: string
    body: string
}

interface LogState {
    description: string
    operatedAt: string
}

const EventContext = createContext({
    state: {
        events: [{
            id: null,
            title: null,
            body: null
        }],
        operationLogs: [{
            description: null,
            operatedAt: null
        }],
    },
    dispatch: () => {}
})
export default EventContext