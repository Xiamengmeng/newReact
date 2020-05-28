import React from 'react';
import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
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
//     </div>
//   );
// }

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      list:['react','angular','vue','other'],
      valueIpt:''
    }
  }
  addbtn(){
    this.setState({
      list:[...this.state.list,this.state.valueIpt]
    })
    
  }
  inputValue(e){
    console.log(e.target.value)
    this.state.valueIpt=e.target.value
    console.log(this.state.valueIpt)
  }
  render(){
    return(
      <div>
        <h1>react</h1>
        <input onChange={this.inputValue.bind(this)}/>
        <button onClick={this.addbtn.bind(this)}>add</button>
        <ul>
          {
            this.state.list.map((item)=>{
            return <li>{item}</li>
            })
          }
        </ul>
      </div>
    )
  }
}
export default App;
