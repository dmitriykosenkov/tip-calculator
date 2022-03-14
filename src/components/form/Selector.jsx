import React, { useState } from "react";
import "./Selector.css";

const values = [
   {value: '5%', dataset: '5'},
   {value: '10%', dataset: '10'},
   {value: '15%', dataset: '15'},
   {value: '25%', dataset: '25'},
   {value: '50%', dataset: '50'},
]
const Selector = ({tip, setTip}) => {
   const [localValue, setLocalValue] = useState("");
   const onCustomPercent = () => {
      setTip(+localValue)
      setLocalValue(0)
   }
   const onSelectPercent = (e) => {
      setTip(+e.currentTarget.dataset.value);
   };
   console.log(Math.round(21.56));
   return (
      <div class="form__selector">
         <div class="form__selector-title title">Select Tip %</div>
         <div class="selectors-group">
            {values.map(item => (
               <input
               onClick={onSelectPercent}
               name="selector"
               type="button"
               class="selectorBtn"
               data-value={item.dataset}
               value={item.value}
            />
            ))}
            <input
               type="text"
               placeholder="Custom"
               value={localValue}
               onChange={(e) => setLocalValue(e.target.value)}
               onBlur={onCustomPercent}
               class="input input-selector"
            />
         </div>
      </div>
   );
};

export default Selector;
