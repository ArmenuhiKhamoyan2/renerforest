import React from 'react';
import '/home/armenuhi/projects/renderforest/src/base.css'

const TableRow = ({ openField, data, openInputField, onInpitChange, activeIndex, headerText,actveType }) => {
    return (
        <div className='row'>
            <span className='index'>{data.index}</span>
            {
                openField && activeIndex === data.index && actveType===headerText.toLowerCase() && (
                    <input type='text' name={`${data.name}`} value={data.name}
                        onChange={(e) => onInpitChange(e.target.name, e.target.value, headerText.toLowerCase())} />
                )
            }
            {
                !( openField && activeIndex === data.index && actveType===headerText.toLowerCase()) && (
                    <span onClick={() => openInputField(data.index,headerText.toLowerCase())}>{data.name}</span>
                )
            }
        </div>
    );
}

export default TableRow;
