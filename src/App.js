import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  return (
    <>
      <Navbar title="TextUtils" about="Home" Link='about'/>
      <div className="container">
        Hello SubhoDip
      <Textform heading="Enter Text"/>
      </div>
    </>

  );
}

export default App;
