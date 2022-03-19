import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import Selector from "./components/Selector/Selector";
import ResultItem from "./components/result/ResultItem";

function App() {
   const [bill, setBill] = useState("");
   const [tip, setTip] = useState("");
   const [customTip, setCustomTip] = useState("");
   const [peopleCount, setPeopleCount] = useState("");

   const [total, setTotal] = useState(""); // с человека
   const [totalWithTip, setTotalWithTip] = useState(""); // для выбора чаевых

   const [disable, setDisable] = useState(true);

   useEffect(() => {
      if (bill && peopleCount) {
         setDisable(false);
         const totalPerPersone = bill / peopleCount;
         setTotal(totalPerPersone);
         setTotalWithTip(totalPerPersone) //
      } else {
         setDisable(true);
         setTotalWithTip("")
         // setTip("")
      }
      console.log(bill, "Bill");
      console.log(peopleCount, "peopleCount");
   }, [bill, peopleCount]);

   useEffect(() => {
     
      const tipPerPersone = (total * tip) / 100;
      setTotalWithTip(tipPerPersone + total);

   }, [tip]);

   const resetForm = () => {
      setTotal("");
      setPeopleCount("");
      setDisable(true);
      setTip("");
      setCustomTip("");
      setBill("");
   };
   return (
      <div>
         <div class="dashboard">
            <div class="dashboard__content">
               <div class="dashboard__form form">
                  <Form title="Bill" value={bill} setValue={setBill} />
                  <Selector
                     tip={tip}
                     setCustomTip={setCustomTip}
                     customTip={customTip}
                     setTip={setTip}
                     disable={disable}
                  />
                  <Form
                     title="Number 0f People"
                     value={peopleCount}
                     setValue={setPeopleCount}
                  />
               </div>
               <div class="dashboard__result">
                  <div class="dashboard__result-schedule">
                     <ResultItem title="Tip Amount" count={tip / peopleCount } />
                     <ResultItem title="Total" count={totalWithTip} />
                  </div>
                  <button disabled={disable} onClick={resetForm} class="reset__btn" type="reset">
                     RESET
                  </button>
               </div>
            </div>
         <div class="attribution">
            Challenge by{" "}
            <a
               href="https://www.frontendmentor.io?ref=challenge"
               target="_blank"
            >
               Frontend Mentor
            </a>
            . Coded by{" "}
            <a href="https://tip-calculator-iota-seven.vercel.app/">
               Dmytro Kosenkov
            </a>
            .
         </div>
         </div>
      </div>
   );
}

export default App;
