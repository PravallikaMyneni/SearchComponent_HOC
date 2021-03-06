import './App.css';
import NoResults from './NoResults';

const AuthorsList = (props) => {
    const {itemsList, searchText,onSearch} = props;
    let authorList =itemsList.map(function(rec){
        return <AuthorItem key ={rec.id} authorDetails = {rec}/>;
    });
    const authorsComponent = itemsList.length > 0 ? authorList : <NoResults/>;
    return (
        <>
             <h3>Authors List</h3>
            <div className ="searchBox">
                <label>Search for author:</label>
                <input value={searchText} onChange={onSearch} placeholder ="Name, About"></input>
            </div>
            <div>
                {authorsComponent}
            </div>
        </>
    );
}


function AuthorItem(props) {
    const details = props.authorDetails;
    return (
        <div className = "authorItem">
            <label>Author Name:</label>
            <p>{details.name}</p>
            <label>About:</label>
            <p>{details.about}</p>
            <hr></hr>
        </div>
    );
}
export default AuthorsList;