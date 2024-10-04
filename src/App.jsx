import "./style.css"
import { useState } from "react";
export default function App(){
  // console.log(useState());
  
  let [st,setst] = useState(0);
  
    let inc = () => {
    setst(st+1)
     };

    let dec = () => {
      setst(st-1)
    };

    let re = () => {
      setst(0)
    };

      return(
      <>
        <div id="root">
            <div>
            <h1>{st}</h1>
            <button className = "child" onMouseLeave = {dec}>-</button>
            <button className = "child" onMouseLeave = {inc}>+</button>
            <button id = "last" className = "child" onMouseLeave = {re}>Reset</button>
            <button className="child" onClick={inc}>Button clicked {st} times</button>
            </div>
        </div>
      </>
  )
}


// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0
//     };
//     console.log(this.state.count);
//   }   
// inc = () => {
//   this.setState({ count: this.state.count + 1 });
//    };

//   dec = () => {
//     this.setState({ count: this.state.count - 1 });
//   };

//   re = () => {
//     this.setState({ count: 100 });
//   };

// render(){
//     return(
//     <>
//       <div id="bod">
//           <div>
//           <h1>{this.state.count}</h1>
//           <button className = "child" onMouseLeave = {this.dec}>-</button>
//           <button className = "child" onMouseLeave = {this.inc}>+</button>
//           <button id = "last" className = "child" onMouseLeave = {this.re}>Reset</button>
//           </div>
//       </div>
//     </>
// )}
// } 


// x = () => {
//     this.setState({ ename: "Deepika" });
//     };

// // <div>{this.state.ename}</div>
//             <br />
//             <button onClick={this.x}>Change Name</button>
//             <br />
//             <div>{this.a.toDateString()}</div>
//             <div>{this.a.toTimeString()}</div>//      a = new Date();

{/* <h1>my name is (this.props.ename) age is (this.props.eage)</h1> */}
//           <div style={{width : "40%"}}>
//           <img src={this.props.imgSrc} alt={this.props.alt} style={{width:"100%",height:"200px"}}/>
//           <div></div>
//           <b>{this.props.b}</b>
//           <p>{this.props.p}</p>
//           </div>
