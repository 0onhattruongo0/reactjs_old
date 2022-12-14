import React, { Component } from 'react';
import Search from './Search';
import Sort from './Sort';
class Control extends Component {
    render() {
        return (
            <div>
                <div className="row mt-15">
                        <Search onSearch = {this.props.onSearch} />
                        <Sort onSort = {this.props.onSort} sortBy ={this.props.sortBy} sortValue={this.props.sortValue}/>
                    </div>
            </div>
        );
    }
}

export default Control;