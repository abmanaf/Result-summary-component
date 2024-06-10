import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import { data } from '../data'

function App() {
  const [subject, setSubject ] = useState(data);

  return (
    <>
      <div className="container" style={{width: '100%'}}>
      <div className='left-container' >
        <div className='sub-left-container' style={{margin: "2em"}}>
          <h2>Your Result</h2>
          <div className='score' style={{borderRadius: '50%', textAlign: 'center', marginTop: '1.5em'}}>
            <span style={{fontSize: '2em', fontWeight: '900'}}>76</span>
            <span style={{fontSize: '10px'}}>of 100</span>
          </div>
          <div>
            <p>
            <h2 style={{fontSize: '2em'}}>Great</h2>
            </p>
            <p className='score-message'>You scored higher than 65% of the people who have taken these tests.</p>
          </div>
        </div>
      </div>
      <div className='right-container' >
        <span className="product-name">Summary</span>
        <table>
          <tbody>
           {subject.map((data, index)=> (
             <tr key={index}>
              <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <div>
              <td><img src={data.icon} alt="alt={`${data.category} icon`}" /></td>
              <td>{data.category}</td>
              </div>
              <div>
              <td>{data.score} / 100</td>
              </div>
              </div>
              </tr>

))}
            </tbody>
        </table>
        <button>
          Add to Cart
        </button>
        </div>
      </div>
    </>
  )
}

export default App
