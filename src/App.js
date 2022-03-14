// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import FileViewer from './FileViewer';
export default class App extends Component {
  constructor(){
    super();
    this.state={
      num1:0,
      num2:0,
      total:null
    }
  }
  handlenum1=(event)=>{
    this.setState({
      num1:event.target.value,
      total:this.state.num1+this.state.num2
    })
  
  }
  handlenum2=(event)=>{
        

    this.setState({
      num2:event.target.value,
      total:parseInt(this.state.num1)+parseInt(this.state.num2)

    })
   

    
   
  }
  // handlenum3=(event)=>{
  //   this.setState({total:parseInt(this.state.num1)+parseInt(this.state.num2)})
  //   event.prevent.default();
  // }
  mmi=(event)=>{
    this.setState({total:parseInt(this.state.num1)+parseInt(this.state.num2)})
    event.prevent.default();
  }
 

  
  render() {
    return (
      <div>
   
        <div className="container">
      <button className="btn">Upload File <FileViewer></FileViewer></button>
     </div>
    <div className="container-1">
      <input type="text" className="type-1" value={this.state.num1} onChange={this.handlenum1}></input>
      <div className="type-1">+</div>
      <input type="text" className="type-1" value={this.state.num2} onChange={this.handlenum2} ></input>
      <div className="type-1">=</div>
      {/* <input type="text" className="type-1" value={this.state.total}></input> */}

      <h4 className='type-2'>{this.state.total}</h4>
    </div>
    <button className="btn" onClick={this.mmi}>submit</button>
   
   
      </div>
    )
  }
}

// function App() {
  
// //  function butt(){
// //    alert("function called")
// //  }
//   return (
//     <>
//     {/* <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div> */}
//      {/* <div className="container">
//         <button className="btn" onClick={butt} >Upload File</button>
//     </div>
    
//     <div className="container-1">
//         <input type="text" className="type-1" id="text-1"/>
//         <div className="type-1">+</div>
//         <input type="text" className="type-1" id="text-2"/>
//         <div className="type-1">=</div>
//         <input type="text" className="type-1" id="text-3"/>
//         <button className="btn" onclick="main()">clik me</button>

//     </div> */}
//     {/* <h1>this is heading</h1>
//     <div>
//       <input type="text" ></input>
//       <input type="text" ></input>
//       <input type="text" ></input>
//     </div> */}
//     </>
//   );
// }

// export default App;
