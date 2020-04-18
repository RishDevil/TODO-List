import React ,{Component}from 'react';

class Item extends Component {
   
    render() { 
        return (  

     <li className="list-group-item text-centralize d-flex  justify-content-between bg-secondary">
     <h6 className="text-centralize">{this.props.title}</h6>
     <div className="todo-icon">
     <span className="mx-2 text-success">
     <i className="fas fa-pen" onClick={this.props.handleedit}></i>
     </span>
     
     <span className="mx-2 text-danger">
     <i className="fas fa-trash" onClick={this.props.handledelete}></i>
     </span>
     
     </div>
     </li>

        );
    }
}
 
export default Item;