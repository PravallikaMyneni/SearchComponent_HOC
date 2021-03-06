import React from 'react';

const SearchHOC = (WrappedComponent, itemsList) => {
    class Search extends React.Component {
        constructor(props) {
            super(props);
            this.state = { searchText: "" };
        }
        onSearch = (event) => {
            this.setState({ searchText: event.target.value });
        }
        render() {
            let searchText = this.state.searchText;
            let filteredList = itemsList.filter(function (rec) {
                let description = rec.description || rec.about;
                if (searchText) {
                    if (rec.name.indexOf(searchText) >= 0 || description.indexOf(searchText) >= 0) {
                        return rec;
                    }
                } else {
                    return rec;
                }
            });

            return (
                <WrappedComponent itemsList={filteredList} searchText={searchText} onSearch={this.onSearch} />
            );

        }
    }
    return Search;
}
export default SearchHOC;