import "./Selector.css";

const values = [
   { value: "5%", dataset: "5" },
   { value: "10%", dataset: "10" },
   { value: "15%", dataset: "15" },
   { value: "25%", dataset: "25" },
   { value: "50%", dataset: "50" },
];
const Selector = ({ customTip, disable, setTip, setCustomTip }) => {
   const onSelectPercent = (e) => {
      setTip(+e.currentTarget.dataset.value);
   };
   const onCustomPercent = (e) => {
      setTip(+e.target.value);
   };
   return (
      <div class="form__selector">
         <div class="form__selector-title title">Select Tip %</div>
         <div class="selectors-group">
            {values.map((item) => (
               <input
                  onClick={onSelectPercent}
                  name="selector"
                  type="button"
                  class="selectorBtn"
                  data-value={item.dataset}
                  value={item.value}
                  disabled={disable}
               />
            ))}
            <input
               type="text"
               placeholder="Custom"
               value={customTip}
               onChange={(e) => setCustomTip(e.target.value)}
               onBlur={onCustomPercent}
               disabled={disable}
               class="input input-selector"
            />
         </div>
      </div>
   );
};

export default Selector;
