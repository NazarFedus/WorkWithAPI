import React, {useState, FormEvent} from "react";
import { NavLink } from "react-router-dom";
import "./styles.css"

import useGetData from "./../../hooks/useGetData";
import useValidation from "../../hooks/useValidation";

export default function Form(){
     const [post, setPost] = useState('');
     const [inputValue, setInputValue] = useState<number>(0)
     const [isDirty, setIsDirty] = useState<boolean>(false)
     const [isValid, setIsValid] = useState<boolean>(false)
     const {getPost} = useGetData();

     function handleBlur(e: React.FocusEvent<HTMLInputElement>){
          setIsDirty(true)
          setIsValid(useValidation(inputValue));
     }
     function handleChange(e: React.ChangeEvent<HTMLInputElement>){
          setInputValue(Number(e.target.value))
     }

     async function handleSubmit(event: FormEvent<HTMLFormElement>){
          event.preventDefault();

          if(isValid){
               const post = await getPost(inputValue);
               setPost(post)
               console.log(post)
          }
     }

     return (
          <form onSubmit={handleSubmit}>
               <label>Input Id:</label>
               <input type={'number'} min='1' max='100'
                    placeholder="Enter id..."
                    className="input"
                    onBlur={handleBlur}
                    onChange={handleChange}></input>
               {!isValid && isDirty && <p>Please enter the correct value!</p>}

               <NavLink to={`/comment/${inputValue}`}>
                    <button>Search</button>
               </NavLink>
          </form>
     );
}