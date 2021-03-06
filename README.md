# SearchComponent_HOC
A simple search from list component using higher order components in ReactJS.

## Higher Order Component
Higher Order Component (HOC) is wrapping around "normal" component and provide additional data input or functionality. It is actually a function that takes one component and returns another component that wraps the original one.
 
## About the application
Consists of 2 listing components with a search box.
 - List of Books _(Component name: BooksList)_
 - List of Authors _(Component name: AuthorsList)_
 
 A HOC function(Search_HOC) is used to implement the search functionality commonly for both the components.
 
 The list is filtered based on the text in the searchBox. 
 'No results available' message is shown if no matching results are available. _(Component name: NoResults)_
