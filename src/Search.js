import React from 'react';

class Search extends React.Component{
    constructor(prop){
        super(prop)
        this.state={serval:''};
    }
    
    show = (e)=>{
        e.preventDefault();
        this.props.onFirstSubmit(this.state.serval);    
    }
    
    render(){
        return(
            <div className="ui segment">         
                <form onSubmit={e=>this.show(e)} className="ui form">
                    <div className="field">  
                        <label>Search</label>
                        <input type="text" value={this.state.serval} onChange={(e)=>this.setState({ serval:e.target.value})} placeholder="Search..."/>
                    </div>
                </form>
            </div>
            );
           
}
}



export default Search;