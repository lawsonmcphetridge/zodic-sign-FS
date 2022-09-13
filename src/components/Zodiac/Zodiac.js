import './Zodiac.css';

export default function Zodiac({ zodiac }) {
  const newName = zodiac.name.charAt(0).toUpperCase() + zodiac.name.slice(1);
  return <>
   
    <ul className="zodiac">
      <div className="back-ground"></div>
      <li className="name">{newName}</li>
      <li className="dates">{zodiac.dates}</li>
      <li className="symbol">{zodiac.symbol}</li>
      <li> <img src={`${process.env.PUBLIC_URL}/zodiac-pictures/${zodiac.name}.png` } />
      </li>     
    </ul>
    
  </>;
}