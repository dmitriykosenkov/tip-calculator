import s from "./Form.module.css";
import iconDollar from "../../images/icon-dollar.svg";
import iconPerson from "../../images/icon-person.svg";

const Form = ({ title, value, setValue }) => {
   
   return (
      <div>
         <div className={s.formTitleBlock}>
            <p className={s.title}>{title}</p>
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
            className={s.input}
            value={value}
            onChange={(e) => setValue(e.target.value)}
         />
      </div>
   );
};

export default Form;
