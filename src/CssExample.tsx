import AppCss from './App.module.css';
export default function CssExample(){
     const subtitle = 'this is a header!';

     const duplicate = (value: number) => value * 2;
     
    const blueSquare = {
      backgroundColor: 'blue',
      width: '50px',
      height: '50px',
      marginLeft: '1rem',
    };

    return (
      <>
        <div className='redSquare'></div>
        <div
          style={{
            backgroundColor: 'green',
            width: '50px',
            height: '50px',
            marginLeft: '1rem',
          }}
        ></div>
        <div style={blueSquare}></div>
        <br />
        <div style={blueSquare}></div>

        <h3 style={{ color: 'blue' }}>{subtitle.toUpperCase()}</h3>
        <h4 className='color'>Index.css Double of 3 is {duplicate(3)}</h4>
        <h4 className={AppCss.color}>App.module.css</h4>
      </>
    );
}