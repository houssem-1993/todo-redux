import React, { Component } from 'react'
import{connect} from 'react-redux'
import {addTask,deleteTask,completeTask,editTask,toggleEdit} from '../action/actions'

 class Todo extends Component {
     state={
         userInput:'',
         list:[{todo:'my first task',isComplete:true,id:0},{todo:'my second task',isComplete:false,id:1}],
         editInput:'',
     }
    
    //  change(key,value){
    //      this.setState({
    //          [key]:value
    //      })
    //  }
     change =(e)=>{
         this.setState({[e.target.name]:e.target.value})
     }
     
     editTodo =(id) =>{
         this.props.editTask({
             id,
             isComplete:false,
             todo:this.state.editInput,
             isEdited:false
             
         })
     }
     
     
     addTodo= () =>{
        //  create a new todo
        if (this.state.userInput.trim()!==''){
         const newTodo={
             id:1 +Math.random(),
             todo: this.state.userInput.trim(),
             isComplete:false,
             isEdited:false
         };
         this.props.addTask(newTodo)
         // copy of current list
         const list =[...this.state.list];
         //add a new todo to the list
         list.push(newTodo);
         // update state with new list and reset ths input
         this.setState({
             list,
             userInput:''
         })}
         else 
            return alert('type a Todo!')
         
        }
    complete =(id) =>{
        // this.setState({
        //     list:this.state.list.map(el =>el.id === id?{...el,isComplete:!el.isComplete}:el)
        this.props.completeTask(id)
            
        // })
    }
    
         
    deleteTodo = (id) =>{
        // //copy of current list
        // const list=[...this.state.list];
        // //filter out todo being deleted
        // const updateList =list.filter(el => el.id !== id)
        // this.setState({list:updateList});
        this.props.deleteTask(id)
    }
    
        
        
    render() {
        console.log(this.props.todo)
        return (
        <div className="head">
            <div className="first">
                <h1>To Do App</h1>
                <label>Add new To-Do</label>
                <input className="input1" type="text" name="userInput" placeholder="Enter new task" value={this.state.userInput} onChange={this.change}/>
                <input type="button" className="add"  onClick={() => this.addTodo()} value="Add!"/>

            </div>
            <div className="my-todo-list">
                
                {this.props.todo.map((el, i) => (
                    <div className="my-todo" key={el.id}>
                   
                <button className="complete-btn" onClick={()=>this.complete(el.id)}>{el.isComplete?"undo":"Complete"}</button>
                    <button className="delete-btn" onClick={() => this.deleteTodo(el.id)}>delete</button>
                <button className="edit-btn" onClick={() => el.isEdited? this.editTodo(el.id):this.props.toggleEdit(el.id)}>{el.isEdited?"comfirm":"edit"}</button> 
                    {el.isEdited&&<input type="text" className="edit-input" name="editInput" value={this.state.editInput} onChange={this.change} />}
                    <p className={el.isComplete?"todo-complete":''}>{el.todo}</p>

                </div>
                 
                )
                )} 


            </div>

        </div>
        )
    }
 }
 //redux
 const mapStateToProps=state=>{
     return {todo:state}
 }
 const mapDispatchToProps =dispatch =>{
     return{ addTask:(payload)=>dispatch(addTask(payload)),
        deleteTask:(payload)=>dispatch(deleteTask(payload)),
        completeTask:(payload)=>dispatch(completeTask(payload)),
        editTask:(payload)=>dispatch(editTask(payload)),
        toggleEdit:(payload)=>dispatch(toggleEdit(payload)),
        }
 }
export default connect(mapStateToProps,mapDispatchToProps) (Todo)