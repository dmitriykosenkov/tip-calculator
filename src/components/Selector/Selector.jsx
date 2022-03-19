import s from "./Selector.module.css";

const values = [
   { value: "5%", dataset: "5" },
   { value: "10%", dataset: "10" },
   { value: "15%", dataset: "15" },
   { value: "25%", dataset: "25" },
   { value: "50%", dataset: "50" },
];
const Selector = ({ tip, customTip, disable, setTip, setCustomTip }) => {
   const onSelectPercent = (e) => {
      setTip(+e.currentTarget.dataset.value);
   };
   const onCustomPercent = (e) => {
      setTip(+e.target.value);
   };
  
   return (
      <div>
         <div className={s.title}>Select Tip %</div>
         <div className={s.selectorsGroup}>
            {values.map((item) => (
               <input
                  onClick={onSelectPercent}
                  name="selector"
                  type="button"
                  className={
                     tip !== +item.dataset
                        ? `${s.selectorBtn}`
                        : `${s.selectorBtn} ${s.selectorBtnActive}`
                  }
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
               className={s.input}
            />
         </div>
      </div>
   );
};

export default Selector;
