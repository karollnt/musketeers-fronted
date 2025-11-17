import { useState } from 'react';

export default function App(){
  const [data,setData] = useState(null);

  const load = async ()=>{
    const r = await fetch("http://localhost:4000/api/raffle/generate?c=20");
    const j = await r.json();
    setData(j);
  }

  return (
    <div style={{padding:20}}>
      <h1>Musketeers Raffle</h1>
      <button onClick={load}>Generar paquete</button>
      <pre>{JSON.stringify(data,null,2)}</pre>
    </div>
  );
}
