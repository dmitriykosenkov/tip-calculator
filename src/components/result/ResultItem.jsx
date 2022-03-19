import React, { memo } from "react";
import s from "./ResultItem.module.css";

const ResultItem = memo(({ title, count }) => {
   const roundPlus = (x, n) => {
      if (isNaN(x) || isNaN(n)) return "0.00";
      const m = Math.pow(10, n);
      return Math.round(x * m) / m;
   };

   const roundCount = roundPlus(count, 2);

   return (
      <div className={s.resultAmount}>
         <div className={s.resultTitle}>
            <div className={s.resultAmountTitle}>{title}</div>
            <div className={s.resultAmountSubtitle}>/ person</div>
         </div>
         <div className={s.resultPrice}>${roundCount}</div>
      </div>
   );
});

export default ResultItem;
