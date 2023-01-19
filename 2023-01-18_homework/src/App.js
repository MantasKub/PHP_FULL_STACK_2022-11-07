import './App.css';
import { useState, useEffect } from 'react';


const App = () => {

  const API_URL = 'https://api.adviceslip.com/advice';
  const [advice, setAdvice] = useState();
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {

    fetch(API_URL)
      .then(resp => resp.json())
      .then(resp => {
        const storedAdvices = localStorage.getItem('advices');
        const returnedObject = {
          text: resp.slip.advice,
          count: 1
        };

        if (storedAdvices) {
          const parsedAdvices = JSON.parse(storedAdvices);

          parsedAdvices.push(resp.slip.id);

          localStorage.setItem('advices', JSON.stringify(parsedAdvices));

          returnedObject.count = parsedAdvices.filter((value) => value === resp.slip.id).length

        } else {
          localStorage.setItem('advices', JSON.stringify([resp.slip.id]))
        }

        setAdvice(returnedObject);
      });
  }, [refresh]);

  //Advices pushed in to local Storage array.





  return (
    <>
      <div className="container">
        <h1>Advice Generator</h1>
        <div className="advice">
          <span>"{advice?.text}" ({advice?.count})</span>
          {/* Jeigu advice objektas - toliau vykdome veiksmus */}
        </div>
        <div className="btn btn-success" onClick={() => setRefresh(!refresh)}> New advice</div>
      </div>
    </>
  );
}

export default App;
