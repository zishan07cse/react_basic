import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     <Job salary={90000}  position="Senior Ios Developer" company="Amazon"/>
           <Job salary={40000}  position="Node JS Developer" company="Facebook"/>

           <Job salary={50000}  position="React JS Developer" company="Google"/>
           </div>
  );
}
const Job = (props)=>{
  return(
    <div>
      <h1>{props.salary}</h1>
      <h1>{props.position}</h1>
      <h1>{props.company}</h1>
    </div>
    
    )
}
export default App;
