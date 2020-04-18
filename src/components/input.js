import React, { Component } from 'react';


class Input extends Component {
 
    render() { 
        return ( 
        
            <div className="card card-body my-10 bg-dark">
            <form onSubmit={this.props.handlesubmit}>
              <div className="input-group">
             <div className="input-group-prepend">
               <div className='input-group-text bg-primary text-white'>
               <i className="fas fa-book"></i>
               </div>
             </div>
             <input type="text"  className="form-control bg-secondary" value={this.props.item}
             placeholder="Enter Item" onChange={this.props.handlechange}/>
             </div> 
             <button type="submit" className={this.props.edit?"btn btn-block btn-outline-success mt-3":"btn btn-block btn-outline-primary mt-3" }>{this.props.edit?"edit item":"add todo"}</button>
                </form>
            
            </div>


         );
    }
}
 
export default Input;