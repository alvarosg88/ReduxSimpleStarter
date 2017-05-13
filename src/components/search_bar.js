import React, { Component } from 'react';

/*const SearchBar = () => {
    return <input />;
}*/

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term : '' };
    }
    
    render() {
        return (
            <div className="col-md-12">
                <div className="clearfix"></div>
                <input
                    className="form-control input-lg"
                    value={ this.state.term }
                    onChange={ event => this.onTermChangeValue(event.target.value) } 
                />
                <div className="clearfix"></div>
            </div>
        );
    }  
    
    onTermChangeValue(term) {
        this.setState({ term });
        this.props.onTermChange(term);
    }
}

export default SearchBar;