import React, { useContext, useState } from 'react';
import {
    CREATE_EVENT,
    DELETE_ALL_EVENT,
    ADD_OPERATION_LOG,
    DELETE_ALL_OPERATION_LOG
} from '../../actions'

import AppContext from '../../contexts/EventContext'
import { timeCurrentISO8601 } from '../../utils'

const EventForm: React.FC = () => {
    const { state, dispatch } = useContext<any>(AppContext)
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const addEvent = (e: any) :void => {
        e.preventDefault()
        debugger
        dispatch({
            type: CREATE_EVENT,
            title,
            body
        })

        dispatch({
            type: ADD_OPERATION_LOG,
            description: 'イベントを作成しました。',
            operatedAt: timeCurrentISO8601
        })
        setTitle('')
        setBody('')
    }

    const deleteAllEvents = (e: any) :void => {
        e.preventDefault()
        const result = window.confirm('すべてのイベントを本当に削除してよいですか？')
        if(result) {
            dispatch({ type: DELETE_ALL_EVENT })
            dispatch({
                type: ADD_OPERATION_LOG,
                description: 'すべてのイベントを削除しました。',
                operatedAt: timeCurrentISO8601
            })
        }
    }

    const deleteAllOperationLogs = (e: any) => {
        e.preventDefault()
        const result = window.confirm('すべての操作ログを本当に削除してよいですか？')
        dispatch({ type: DELETE_ALL_OPERATION_LOG })
        dispatch({
            type: ADD_OPERATION_LOG,
            description: 'すべて操作ログを削除しました。',
            operatedAt: timeCurrentISO8601
        })
    }

    const unCreatable = title === '' || body === ''

    return (
        <div>
            <h4>イベント作成フォーム</h4>
            <form>
                <div className="form-group">
                    <label htmlFor="formEventTitle">タイトル</label>
                    <input
                        className="form-control"
                        id="formEventTitle"
                        value={title}
                        onChange={e => {
                            setTitle(e.target.value)
                        }}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="formEventBody">ボディ</label>
                    <textarea
                        className="form-control"
                        id="formEventBody"
                        value={body}
                        onChange={e => {
                            setBody(e.target.value)
                        }}
                    />
                </div>

                <button
                    className="btn btn-primary"
                    onClick={addEvent}
                    disabled={unCreatable}
                >
                    イベントを作成する
                </button>

                <button
                    className="btn btn-danger"
                    onClick={ deleteAllEvents }
                    disabled={state.events.length === 0}
                >
                    すべてのイベントを削除する
                </button>

                <button
                    className="btn btn-danger"
                    onClick={ deleteAllOperationLogs }
                    disabled={state.operationLogs.length === 0}
                >
                    すべての操作ログを削除する
                </button>
            </form>
        </div>
    )
}

export default EventForm