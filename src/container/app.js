import React , {Component} from "react";
import SearchBox from "../components/searchBox";
import './app.css';
import CardList from "../components/cardList";
import Scroll from "../components/scroll";
import ErrorBoundry from "../components/errorBoundry";
class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchFiled: ''
        };
    }

    async componentDidMount() {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const robots = await  response.json();
        this.setState({robots})
    }
    onSearchChange = (event) => {
        this.setState({searchFiled: event.target.value});
    }



    render() {
        const {robots, searchFiled} = this.state;
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
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                        <CardList robots={filtersRobots}/>
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
    }
}
export  default  App;
