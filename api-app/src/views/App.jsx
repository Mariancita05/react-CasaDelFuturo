
import { useEffect, useState } from 'react';
import './App.css';
import { CardCharacter } from "../components/CardCharacter";

function App() {

  const [character, setCharacter] = useState([])
  const [count, setCount ]= useState(0)

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`https://apisimpsons.fly.dev/api/personajes?limit=12page=${count}`)
      const data = await res.json()

      setCharacter(data.docs)
    }
    fetchData()
  }, [count])

  console.log(character)

  const handleSuma = ()=>{
    setCount(count+1)
  }

  const handleResta = () =>{
    count == 0 ? setCount(count) : setCount(count-1)
  }

  return (
    <>
      <h1>LOS SIMPSONS</h1>

      <h3>{count}</h3>
      <button onClick={handleSuma}>+</button>
      <button onClick={handleResta} > - </button>
      <section className='cards'>
      {character.map((character, id) => {
        return (
         <CardCharacter key={id} character={character}/>
        )
      })}
      </section>
      
    </>
  );
}

export default App;
