import React, { useContext } from 'react';
import operationLogs from '../../reducers/operationLogs';

const OperationLog = ( operationLog: any ) => {
    return (
        <tr>
            <td>{ operationLog.description }</td>
            <td>{ operationLog.operatedAt  }</td>
        </tr>
    )
}
export default OperationLog