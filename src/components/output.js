import React, { Component } from 'react';
import Item from "./listitem";

export default class Output extends Component {
    
    render() { 
        return (
            <ul className="list-group my-5 bg-dark mx-3">

            <h3 className="text-captalize text-center text-white"> <i className="fas fa-book"/></h3> 
            {this.props.item.map(item=>{
              return( <Item key={item.id} id={item.id} title={item.title} handledelete={()=>this.props.handledelete(item.id)}
              handleedit={()=>this.props.handleedit(item.id)}
            
    />);
            })}
            <button type="button" className="btn btn-block  btn-outline-danger text_centralize mt-3 mx-3" onClick={this.props.handleclear}>clear</button>
            </ul>
        
        
        );
    }
}
 
 