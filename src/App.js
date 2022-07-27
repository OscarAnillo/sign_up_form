
import './App.css';
import ButtonForm from './components/btn-form-component';
import FirstText from './components/first-text';

function App() {
  return (
    <div className="App">
      <div className='row'>
        <div>
          <FirstText />
        </div>
        <div>
          <ButtonForm />
        </div>
      </div>
    </div>
  );
}

export default App;
