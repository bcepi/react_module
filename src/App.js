import './App.css'
import Products from './Mocks/products'
import List from './Components/List/index'


function App () {
  return (
    <div className='App'>
      <List data={Products} />
    </div>
  )
}

export default App