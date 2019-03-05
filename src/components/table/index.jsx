import React from 'react';
import '/home/armenuhi/projects/renderforest/src/base.css'
import TableRow from './row';

const Table = ({ headerText, data, className, openInputField, onInpitChange, activeIndex, openField, actveType }) => {
    return (
        <div className={`${className}`}>
            <span className='table-header'>{headerText}</span>

            <div className='table'>
                {
                    data.map((item, index) => {
                        return (
                            <TableRow
                                key={index.toString()}
                                data={item}
                                openInputField={(index, type) => openInputField(index, type)}
                                onInpitChange={(name, value, type) => { onInpitChange(name, value, type) }}
                                activeIndex={activeIndex}
                                openField={openField}
                                headerText={headerText}
                                actveType={actveType}
                            />
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Table;