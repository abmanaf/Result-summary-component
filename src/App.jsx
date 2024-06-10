import { useState } from 'react'
import './App.css'
import { data } from '../data'

function App() {
  const [subject, setSubject] = useState(data);

  const semiRowClasses = [
    'red-color',
    'yellow-color',
    'green-color',
    'violet-color'
  ];
  
  const rowClasses = [
    'red-background',
    'yellow-background',
    'green-background',
    'violet-background'
  ];

  return (
    <>
      <div className="container" style={{ width: '100%' }}>
        <div className='left-container'>
          <div className='sub-left-container' style={{ margin: "2em" }}>
            <h3 className='header' style={{  opacity: '0.6'}}>Your Result</h3>
            <div className='score' style={{ borderRadius: '50%', textAlign: 'center' }}>
              <span style={{ fontSize: '3em', fontWeight: '900' }}>76</span>
              <span style={{ fontSize: '10px',   opacity: '0.6'}}>of 100</span>
            </div>
            <div>
              <h2 style={{ fontSize: '2em', marginTop: '1em' }}>Great</h2>
              <p className='score-message'>You scored higher than 65% of the people who have taken these tests.</p>
            </div>
          </div>
        </div>
        <div className='right-container'>
          <span className="product-name" style={{fontWeight: '800'}}>Summary</span>
          <table>
            <tbody>
              {subject.map((data, index) => (
                <tr key={index} className={rowClasses[index]}>
                  <td className={semiRowClasses[index]} style={{ display: 'flex', alignItems: 'center', padding: '1rem' }}>
                    <img src={data.icon} alt={`${data.category} icon`} style={{ marginRight: '0.5em' }} />
                    <span>{data.category}</span>
                  </td>
                  <td style={{ padding: '1rem' }}><strong style={{fontWeight: '800', opacity: '0.7'}}>{data.score}</strong> <span style={{opacity: '0.5'}}>/ 100</span></td>
                </tr>
              ))}
            </tbody>
          </table>
          <button style={{ padding: '0.8em', borderRadius: '2em', cursor: 'pointer', border: 'none', backgroundColor: 'var(--Dark-gray-blue)', color: 'var(--White)' }}>
            Continue
          </button>
        </div>
      </div>
    </>
  )
}

export default App