import './App.css';
import Button from './Components/Button';

function App() {
  return (
    <div className='App'>
      <div className='d-flex justify-content-between w-50 mt-3 mx-auto'>
        <Button text='Atras' color='danger'></Button>
        <Button text='Siguiente' color='success'></Button>
        <Button></Button>
      </div>
    </div>
    )
}

export default App;
