import React, { useState } from 'react';
import './App.css';
import ContextValue from './ContextValue';
import Grandfather from './Grandfather';
import ShowText from './showText';
// import ClockExample from './ClockExample';
// import ProjectContent2 from './ProjectContent2';
import DynamicContent from './DynamicContent';
import TextForm from './TextForm';
import UseEffectExample from './UseEffectExample';
import ErrorBoundary from './ErrorBoundary';

function App() {
  const [text, setText] = useState('default value');
  const [checked, setChecked] = useState(false);
  const imgUrl =
    'https://ensocore.com/media/61/reactjs-logo-sticker%20%281%29.jpg';

  const handleClick = () => console.log('Click');
  const handleKeyUp = (inputText: string) => {
    console.log(inputText);
    setText(inputText);
  };

  // const intermediatePart = <ClockExample />;

  // const style = {
  //   backgroundColor: 'red',
  //   width: '50px',
  //   height: '50px',
  //   marginLeft: '1rem',
  // };

  // const inferiorPart = <div style={style}></div>;

  const grades = [
    { name: 'Luis', grade: 85 },
    { name: 'Claudia', grade: -75 },
    { name: 'Raul', grade: 95 },
  ];

  return (
    <>
      <h1 className='red'>Hello world!</h1>

      {/* <DynamicContent showSecretMessage={false} />  */}
      {/* <DynamicContent grade={59} /> */}
      {/* {grades.map((grade) => (
        <DynamicContent key={grade.name} {...grade} />
      ))}

      <ProjectContent2
        // superior={<h3>Superior part</h3>}
        intermediate={intermediatePart}
        inferior={inferiorPart}
      /> */}

      {/* <ContextValue.Provider value={text}>
        <Grandfather />
      </ContextValue.Provider>

      <div>
        <input
          type='checkbox'
          onChange={(e) => setChecked(e.currentTarget.checked)}
          checked={checked}
        />
        Show Component UseEffect
      </div>

      {checked ? <UseEffectExample /> : null} */}

      {grades.map((grade) => (
        <ErrorBoundary
          key={grade.name}
          
        >
          <DynamicContent {...grade} />
        </ErrorBoundary>
      ))}

      <br />
      <br />
      <button onMouseEnter={() => console.log('enter')} onClick={handleClick}>
        Click me
      </button>

      <br />
      <br />

      {/* <input type='text' onKeyUp={(e) => handleKeyUp(e)} /> */}
      <TextForm handleKeyUp={(e: string) => handleKeyUp(e)} />

      <ShowText text={text} />

      <br />

      <div>
        <input
          type='checkbox'
          onChange={(e) => setChecked(e.currentTarget.checked)}
          checked={checked}
        />
        This is a checkbox
      </div>
      <img src={imgUrl} alt='logo react' />
    </>
  );
}

export default App;
