import React, { Component } from 'react';
import Table from '/home/armenuhi/projects/renderforest/src/components/table';
import '../../base.css';
class TablePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        pros: [
          { index: 1, name: 'name' },
          { index: 2, name: 'name1' },
          { index: 3, name: 'name2' },
          { index: 4, name: 'name3' },
          { index: 5, name: 'name4' },
        ],
        cons: [
          { index: 1, name: 'name' },
          { index: 2, name: 'name1' },
          { index: 3, name: 'name2' },
          { index: 4, name: 'name3' },
          { index: 5, name: 'name4' },
        ]
      }
    };

  }
  openInputField = (id, actveType) => {
    this.setState(() => {
      return {
        openField: true,
        activeIndex: id,
        actveType
      }
    })

  }

  onInpitChange = (name, value, type) => {
    this.setState(() => {
      return {
        data: {
          ...this.state.data,
          [type]: [
            ...this.state.data[type],
            {
              ...this.state.data[type][name],
              [name]: value
            }
          ]
        },
      }
    })
  }

  render() {
    const { openField, data, activeIndex, actveType } = this.state
    return (
      <div className='page'>
        <div className='description'>Should I eat at McDonalds?</div>
        <div className='tables-contanier'>
          <Table
            headerText='Pros'
            data={data.pros}
            className='tableProps table border'
            openInputField={ this.openInputField}
            onInpitChange={(name, value, type) => this.onInpitChange(name, value, type)}
            openField={openField}
            activeIndex={activeIndex}
            actveType={actveType}
          />
          <Table
            headerText='Cons'
            data={data.cons}
            className='tableCons table'
            openInputField={this.openInputField}
            onInpitChange={(name, value, type) => this.onInpitChange(name, value, type)}
            openField={openField}
            activeIndex={activeIndex}
            actveType={actveType}
          />
        </div>
      </div>
    );
  }
}

export default TablePage;
