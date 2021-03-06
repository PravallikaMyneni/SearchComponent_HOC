import './App.css';
import NoResults from './NoResults';

function BookItem(props) {
    const details = props.bookDetails;
    return (
        <div className = "bookItem">
            <label>Book Name:</label>
            <p>{details.name}</p>
            <label>Description:</label>
            <p>{details.description}</p>
            <label>Price:</label>
            <p>{details.price}</p>
            <hr></hr>
        </div>
    );
}

const BooksList = (props) => {
    const {itemsList,searchText,onSearch} = props;
    let booksList =itemsList.map(function(rec){
        return <BookItem  key ={rec.id} bookDetails = {rec}/>;
    });
    const booksComponent = itemsList.length > 0 ? booksList : <NoResults/>;
    return (
        <>
            <h3>Books List</h3>
            <div className = "searchBox">
                <label>Search for book:</label>
                <input value={searchText} onChange={onSearch} placeholder ="Name, Description"></input>
            </div>
            <div>
                {booksComponent}
            </div>
        </>
    );
}



export default BooksList;