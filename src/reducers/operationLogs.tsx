import {
    ADD_OPERATION_LOG,
    DELETE_ALL_OPERATION_LOG
} from '../actions'

interface State {
    description: string
    operatedAt: string
}

const initialState: State = {
    description: '',
    operatedAt: ''
}

const operationLogs = (state = [initialState], action: any) => {
    switch(action.type) {
        case ADD_OPERATION_LOG:
            const operationLog = {
                description: action.description,
                operatedAt: action.operatedAt
            }
            return [operationLog, ...state]
        case DELETE_ALL_OPERATION_LOG:
            return []
        default:
            return state
    }
}

export default operationLogs