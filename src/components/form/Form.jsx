import s from "./Form.module.css";
import iconDollar from "../../images/icon-dollar.svg";
import iconPerson from "../../images/icon-person.svg";
import { useEffect } from "react";

const Form = ({ title, value, setValue }) => {
   
   return (
      <div>
         <div className={s.formTitleBlock}>
            <p className={s.title}>{title}</p>
            {/* <p className="title error">Can't be zero</p> */}
         </div>
         <input
            type="text"
            placeholder="0"
            style={{
               backgroundImage:
                  title === "Bill"
                     ? `url(${iconDollar})`
                     : `url(${iconPerson})`,
               backgroundRepeat: "no-repeat",
               backgroundPosition: "1rem 50%",
            }}
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            className={s.input}
            value={value}
            onChange={(e) => setValue(e.target.value)}
         />
      </div>
   );
};

export default Form;
