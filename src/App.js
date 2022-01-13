import React from 'react';

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org',
    author: 'Dam Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1

  }
]

const App = () => {
  const stories = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jorden Walke',
      num_comments: 3,
      points: 4,
      objectID: 0
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1
    }
  ];

  //대화형 리액트 컴포넌트 : useState Hook
  const [searchTerm, setSearchTerm] = React.useState('React');
 
  const handleSearch = event => {
    //console.log(event.target.value);
    setSearchTerm(event.target.value);
  };

  const searchedStories = stories.filter(story => 
    story.author
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>My Hacker Stories</h1>

      <Search search={searchTerm} onSearch={handleSearch} />  

      <hr />      

      <List list={searchedStories} />
    </div>
  );



};

const Search = (props) => {

    // const handleChange = event => {
    //   setSearchTerm(event.target.value);

    //   props.onSearch(event);
    // };
    
    return (
      <div>  
        <label htmlFor="search">Search: </label>
        <input id="search" type="text" onChange={props.onSearch}></input>
  
        {/* <p>
          Searching for <strong>{searchTerm}</strong>
        </p> */}
      </div>
    );
}


const List = props => {
  return props.list.map(item => 
     (
      <div key={item.objectID}>
        <span>
          <a href="{item.url}">
            {item.title}
          </a>
        </span>
        <span>{item.author}</span>
        <span>{item.num_comments}</span>
        <span>{item.points}</span>
      </div>
  ))};


export default App;
