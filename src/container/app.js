import React , {useState , useEffect} from "react";
import SearchBox from "../components/searchBox";
import './app.css';
import CardList from "../components/cardList";
import Scroll from "../components/scroll";
import ErrorBoundry from "../components/errorBoundry";
function App () {
    const [robots,setRobots] = useState([]);
    const [searchFiled,setSearchFiled] = useState('');

    useEffect(async ()=>{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
          const robots = await  response.json();
            setRobots(robots)
    },[])
   const  onSearchChange = (event) => {
        setSearchFiled( event.target.value);
    }
    const filtersRobots = robots.filter((robot) => {
        return robot.name.toLowerCase().includes(searchFiled.toLowerCase())
    });
    return !robots.length ?
        (
            <div>
                <h1>Loading</h1>
            </div>
        )
        : (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                    <CardList robots={filtersRobots}/>
                    </ErrorBoundry>
                </Scroll>
            </div>
        );

}
export  default  App;
