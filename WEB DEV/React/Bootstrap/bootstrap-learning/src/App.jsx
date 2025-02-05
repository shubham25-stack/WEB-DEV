import AppName from './components/AppName'
import AddPlan from './components/AddPlan'
import PlanContent from './components/PlanContent'
import CurrentTime from './components/CurrentTime'
import Container from './components/Container'
import ContainerElements from './components/ContainerElements'
import './App.css'


function App() {

  return (
    <>

    <center class='week-container'>
      <AppName></AppName>
      <CurrentTime></CurrentTime>
      <div>
      <AddPlan></AddPlan>      
      <PlanContent></PlanContent>
      </div>
    </center>

    <div>
    <Container></Container>
    </div>
    </>
  )

}
export default App
