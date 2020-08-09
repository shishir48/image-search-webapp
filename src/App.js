import React from 'react';
import axios from 'axios';
import Search from './Search';
import ShowImage from './ShowImage';

class App extends React.Component{
    constructor(props){
        super(props)
        this.state={images:[]}
    }
    onSearchSubmit= async (term)=>{
        const response = await axios.get('https://api.unsplash.com/search/photos',{
            params:{query: term},
            headers:{Authorization: 'Client-ID 701ce5791994253edf9b27fa7c6b08096e49ba4078da584f63840f90ee2fea1d'}
        });
        
        console.log(response);
        this.setState({images:response.data.results})
    }
  

    render(){
        return (
            <div>
                <Search onFirstSubmit={this.onSearchSubmit} />
                Found: {this.state.images.length} images
                <ShowImage images={this.state.images}/>
            </div>
        );
    }
}
export default App;