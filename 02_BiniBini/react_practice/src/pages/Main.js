import Banner from '../assets/Breath_of_the_React_background.png'

function Main() {
  return (
    <div 
        style={{
            display:'flex',
            justifyContent: 'center',
            alignItems: 'center',
            top: 0
        }}>
      <img
        src={Banner}
        alt="banner"
        style={{ 
            width: 'auto', 
            height: '400px',
            objectFit: 'contain'
             }}
      />
    </div>
  );
}

export default Main;