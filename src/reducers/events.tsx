import {
    CREATE_EVENT,
    DELETE_ALL_EVENT,
    DELETE_EVENT
} from '../actions'

interface EventState {
    id: number
    title: string
    body: string
}

interface OperationLogState {
    description: string
    operatedAt: string
}

interface State {
    events: [EventState]
    operationLogs: [OperationLogState]
}

const initialState: State = {
    events: [{
        id: 0,
        title: '',
        body: ''
    }],
    operationLogs: [{
        description: '',
        operatedAt: ''
    }]
}

const events = (state = [initialState], action: any) => {
    switch(action.type) {
        case CREATE_EVENT:
            const event  = { title: action.title, body: action.body}
            const length = state.events.length
            debugger
            const id     = length === 0 ?  1 : state[length -1].id + 1
            return [...state, { id, ...event }]
        case DELETE_EVENT:
            return state.filter(event => event.id !== action.id)
        case DELETE_ALL_EVENT:
            return []
        default:
            return state
    }
}

export default events