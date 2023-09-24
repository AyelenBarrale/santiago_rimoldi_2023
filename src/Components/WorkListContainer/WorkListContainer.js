import React from 'react';
import { WorkList } from '../WorkList/WorkList';

const WorkListContainer = ({filter}) => {

    return (
        <div className="workGrid">
            <WorkList filter={filter}/>
        </div>
    )
}

export default WorkListContainer
