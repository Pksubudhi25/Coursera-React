import logo from './logo.svg';
import './App.css';
import Btn from './Btn';
import ModeToggler from './ModeToggler';

function Header(){
  return <h1>Hello World</h1>
}
function App() {
  return (
    <div>
      <Header />
      {/* <Btn /> */}
      <ModeToggler />
    </div>
  )
}

export default App;
