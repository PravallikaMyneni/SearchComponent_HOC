import './App.css';
import BooksList from './BooksList';
import AuthorsList from './AuthorsList';
import SearchHOC from './Search';

const booklist = [{
  id:"B1", name: "Book1",
  description: "Book 1 description fiaojre riwjr riwrwijjw rwijrwojrw",
  price: "300"
},
{
  id:"B2",name: "Book2",
  description: "Book 2 description tutowg ie tihesh w3itegsd",
  price: "600"
},
{
  id:"B3",name: "Book3",
  description: "Book 3 description tuwo fwihw trowg tggseg",
  price: "820"
},
{
  id:"B4",name: "Book4",
  description: "Book 4 description twu odxfdf rwih rwirsoih rworsiohd raurghrerhahj gsgsh",
  price: "1000"
}];
const authorlist = [{
  id:"A1",name: "Author1",
  about: "Author 1 about yoeyu ruagdyaf rwliagarrqf rwrwer",
},
{
  id:"A2",name: "Author",
  about: "Author 2 about oyeu ruiwgr rawigsz tesrrer"
},
{
  id:"A3",name: "Author3",
  about: "Author 3 about oye ruwrwri rwqurgbrasfs yeyuig tuliw gbiug giulg guigue gerh"
},
{
  id:"A4",name: "Author4",
  about: "Author 4 about foisahfwiq giowhg toqgta"
},
{
  id:"A5",name: "Author5",
  about: "Author 5 about foisahfwiq giowhg toqgta"
}];

const BooksComponent = SearchHOC(BooksList,booklist);
const AuthorsComponent = SearchHOC(AuthorsList,authorlist);

function App() {
  return (
    <div className = "App">
      <div className="App-child"><BooksComponent/></div>
      <div className="App-child"><AuthorsComponent/></div>
    </div>
  );
}

export default App;
