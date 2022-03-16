import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const values = [
   { value: "5%", dataset: "5" },
   { value: "10%", dataset: "10" },
   { value: "15%", dataset: "15" },
   { value: "25%", dataset: "25" },
   { value: "50%", dataset: "50" },
];

const FormExample = () => {
   const [data, setData] = useState({});
   const [result, setResult] = useState("");

   useEffect(() => {
      console.log(data);
      setResult(+data.customPercent1 + +data.customPercent2);
   }, [data]);

   return (
      <div>
         <h3>Result {result}</h3>
         <SelectorExample setData={setData} />
      </div>
   );
};

const SelectorExample = ({ setData }) => {
   const {
      register,
      formState: { errors },
      handleSubmit,
      reset,
   } = useForm();
   const [localValue, setLocalValue] = useState("");

   const onSubmit = (data) => {
      console.log(data);
      setData(data);
   };

   return (
      <form onSubmit={handleSubmit(onSubmit)}>
         <div class="form__selector-title title">Select Tip %</div>
         <div class="selectors-group">
            {/* {values.map((item) => (
               <button
                  name="selector"
                  type="submit"
                  class="input-selector"
                  value={item.value}
                  {...register(`percent${item.dataset}`)}
               >{item.value}</button>
            ))} */}
            
            <input
               {...register("customPercent1")}
               type="text"
               placeholder="Custom 1"
               class="input input-selector"
            />
            <input
               {...register("customPercent2")}
               type="text"
               placeholder="Custom 2"
               class="input input-selector"
            />
         </div>
      </form>
   );
};

export default FormExample;
