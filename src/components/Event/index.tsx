import React, { useReducer, useEffect } from 'react'
import reducer from '../../reducers/events'

import EventForm from './EventForm'
import Events from './Events'
import OperationLogs from './OperationLogs'
import EventContext from '../../contexts/EventContext'

const APP_KEY = "appWIthRedux"

/**
 * Event ルートコンポーネント
 */
const Index: React.FC = () => {
    const appState = localStorage.getItem(APP_KEY)
    const initialSate = appState ? JSON.parse(appState) : {
        events: [{ id: 0, title: '', body: '' }],
        operationLogs: [{ description: '', operatedAt: '' }],
    }

    const [state, dispatch]: any = useReducer(reducer, initialSate)

    useEffect(() => {
        localStorage.setItem(APP_KEY, JSON.stringify(state))
    }, [state])

    return (
        <EventContext.Provider value={{ state, dispatch }}>
            <div className="container-fluid">
                <EventForm />
                <Events />
                <OperationLogs />
            </div>
        </EventContext.Provider>
    )
}

export default Index