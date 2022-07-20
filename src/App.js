import './App.css'
import Button from './Components/Button'
import users from './Assets/users'

function App() {
  const buttons = [
    {
      text: 'Botón 1',
      color: 'primary'
    },
    {
      text: 'Botón 2',
      color: 'secondary'
    },
    {
      text: 'Botón 3',
      color: 'success'
    },
    {
      text: 'Botón 4',
      color: 'danger'
    },
    {
      text: 'Botón 5',
      color: 'warning'
    }
  ]
  return (
    <div className='App'>
      <div className='d-flex justify-content-between w-50 mt-3 mx-auto'>
        {buttons
          .filter(button => button.color !== 'primary')
          .map((button, index) => {
            <Card style = {{width: '18rem'}}>
              <img alt="Card image" src="https://picsum.photos/300/200"/>
              <CardBody>
                <CardTitle tag="h5"> Card title </CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6"> Card subtitle </CardSubtitle>
                <CardText> Some quick example text to build on the card title and make up the bulk of the card's content. </CardText>
              </CardBody>
            </Card >
          })}
      </div>
    </div>
  )



}


export default App