import React from 'react';

import ListItem from './ListItem';

export default class List extends React.Component {
    renderList() {
        return this.props.items.map((item) => {
            return <ListItem delete={this.props.delete} key={item.id} item={item} />
        });
    }
    render() {

        return (
            <ul>
                {this.renderList()}
            </ul>
        )
    }
}