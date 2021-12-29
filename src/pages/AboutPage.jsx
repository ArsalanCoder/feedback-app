import { Link } from 'react-router-dom'
import Card from '../components/shared/Card'

function AboutPage(props) {
  return (
    <Card>
      <div className='about'>
        <h1>About This Project</h1>
        <p>This is a React app to leave feedback for a product</p>
        <p>Develop and Design By Aqeel Khan and Arsalan Khan</p>

        <p>
          <Link to='/'>Back To Home</Link>
        </p>
      </div>
    </Card>
  )
}

export default AboutPage
