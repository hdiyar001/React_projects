import "./TaskSearch.css";


const TaskSearch = () => {

  const SearchHandler = (event) => {
    event.preventDefault();
    
  }

  return <form onSubmit= {SearchHandler}>

    <h1>Tasks</h1>
    <p>Search</p>
    <input></input>
    <button type="submit" ><img src="https://logowik.com/content/uploads/images/search7780.jpg" width= "10px" height= "10px"  /></button>
    
  </form>;
};

 export default TaskSearch;