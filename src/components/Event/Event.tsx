import React, { useContext, useState } from 'react';
import AppContext from '../../contexts/EventContext'
import {
    DELETE_EVENT,
    ADD_OPERATION_LOG
} from '../../actions'
import { timeCurrentISO8601 } from '../../utils'

interface Props {
    event: any
}

const Event: React.FC<Props> = (props: Props) => {
    const { dispatch } = useContext<any>(AppContext)
    const handleClickDeleteButton = (e: any) :void => {
        const id = props.event.id
        const result = window.confirm(`イベントID ${id}を削除を本当に削除してよいですか？`)
        if(result) {
            dispatch({ type: DELETE_EVENT, id })
            dispatch({
                type: ADD_OPERATION_LOG,
                description: `イベント${id}を削除しました。`,
                operatedAt: timeCurrentISO8601
            })
        }
    }
    return (
        <tr>
            <td>{ props.event.id }</td>
            <td>{ props.event.title }</td>
            <td>{ props.event.body }</td>
            <td>
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={handleClickDeleteButton}
                >
                    削除
                </button>
            </td>
        </tr>
    )
}

export default Event