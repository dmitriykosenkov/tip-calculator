import React, { useState } from "react";
import "./Form.css";

const Form = ({ title, value, setValue }) => {
   const [localeValue, setLocaleValue] =useState("")
   const onValuePercent = () => {
      setValue(+localeValue);
   };
   return (
      <div class="form__item">
         <div class="form__title-block">
            <p class="form__item-title title">{title}</p>
            <p class="form__item-title title error">Can't be zero</p>
         </div>
         <input
            type="text"
            placeholder="0"
            class="form__item-input input"
            value={localeValue}
            onChange={e => setLocaleValue(e.target.value)}
            onBlur={onValuePercent}
         />
      </div>
   );
};

export default Form;
