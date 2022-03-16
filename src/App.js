import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/form/Form';
import Selector from './components/form/Selector';
import ResultItem from './components/result/ResultItem';

function App() {
   const [bill, setBill] = useState("")
   const [tip, setTip] = useState("")
   const [peopleCount, setPeopleCount] = useState("")
   const [total, setTotal] = useState("")
   const [disable, setDisable] = useState(true)

   useEffect(() => {
      if (bill && peopleCount) {
         setDisable(false)
         const totalPerPersone = bill / peopleCount
         setTotal(totalPerPersone);
      }
   }, [bill, peopleCount])
   useEffect(() => {
      const totalWithTip = (total * tip) / 100
      setTotal(totalWithTip + total)
   }, [tip])
   const resetForm = () => {
      setTotal("")
      setPeopleCount("")
      setDisable(true)
      setTip("")
      setBill("")
   }
   return (
      <div>
         <div class="dashboard">
            <div class="dashboard__content">
               <div class="dashboard__form form">
                  <Form title="Bill" value={bill} setValue={setBill} />
                  <Selector tip={tip} setTip={setTip} disable={disable} />
                  <Form title="Number 0f People" value={peopleCount} setValue={setPeopleCount} />
               </div>
               <div class="dashboard__result">
                  <div class="dashboard__result-schedule">
                     <ResultItem title='Tip Amount' count={tip} />
                     <ResultItem title='Total' count={total} />
                  </div>
                  <button onClick={resetForm} class="reset__btn" type="reset">RESET</button>
               </div>
            </div>
         </div>
      </div>
   );
}

export default App;
