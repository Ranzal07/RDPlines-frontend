import React, {useState, useEffect} from 'react'

const App = () => {
  const [data,setData] = useState([{}]);

  useEffect(() => {
    fetch("/https://rdplines-backend2.onrender.com/members").then(
      res => res.json()
    ).then(
      data => {
        setData(data);
        console.log(data);
      }
    )
  }, [])
  

  return (
    <div>
      {(typeof data.members === 'undefined') ? (
        <p>Loading...</p>
      ): (
        data.members.map((member, i )=> (
          <p key={i} className="text-3xl font-bold underline">{member}</p>
        ))
      )}
    </div>
  )
}

export default App
