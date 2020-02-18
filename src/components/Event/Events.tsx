import React, { useContext } from 'react';
import Event from './Event'
import AppContext from '../../contexts/EventContext'

const Events: React.FC = () => {
    const { state, dispatch } = useContext<any>(AppContext)
    return (
        <>
            <h4>イベント一覧</h4>
                <table className="table table-hover">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>タイトル</th>
                        <th>ボディ</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.events.map((event: any, index: number) => (
                            <Event
                                key={index}
                                event={event}
                            />
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default Events