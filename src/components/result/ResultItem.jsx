import React from "react";
import "./ResultItem.css";

const ResultItem = ({ title, count }) => {
   const roundPlus = (x, n) => {
      if (isNaN(x) || isNaN(n)) return false;
      const m = Math.pow(10, n);
      return Math.round(x * m) / m;
   }

   return (
      <div class="result__amount">
         <div class="result__title">
            <div class="result__amount-title">{title}</div>
            <div class="result__amount-subtitle">/ person</div>
         </div>
         <div class="result__price">${roundPlus(count, 2)}</div>
      </div>
   );
};

export default ResultItem;
