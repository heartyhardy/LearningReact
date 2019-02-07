import React, {Component} from 'react';
import CardList from './cardlist';
import SearchBox from './searchbox';
import Scroll from './scroll';
import ErrorBoundry from './errorboundry';

class App extends Component {
    
    constructor()
    {
        super();
        this.state = {
            robots:[],
            filteredrobots:[],
            searchfield: ''
        }
    }

    componentDidMount()
    {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(users=>this.setState({robots:users}));
    }

    OnSearchChange = (event) =>
    {
        this.setState({searchfield: event.target.value});
    }

    render()
    {
        const filteredrobots = this.state.robots.filter(robot => {
            return robot.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase());
        });

        return (!this.state.robots.length)?
            <h1>Loading...</h1>:
            (
                <div>
                    <h2>Robo Gallery</h2>
                    <SearchBox searchChange={this.OnSearchChange}/>
                        <ErrorBoundry>
                        <Scroll>
                            <CardList robots={filteredrobots}/>
                        </Scroll>
                    </ErrorBoundry>
                </div>       
            );        
    }
}

export default App;