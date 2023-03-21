import { useState } from "react";
import {child, get, set} from "firebase/database";
import { getData } from "./firebase";

export const useData = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

    const fetchData = async () => {
        const newArr = [];
        try {
          setLoading(true)
          await get(child(getData, `/tasks/${localStorage.getItem('userId')}`)).then((snapshot) => {
            const fetched = snapshot.val();
            return fetched;
          }).then(val=>{
            if(val){
               for(let value of Object.entries(val)){
                   newArr.push(value[1]);
              }
            }
          }); 
          setLoading(false)
          return newArr;  
        }
        catch (e) {
          setError(true)
          console.log(e)
        }
      };

      const pushData = async (item, guid) => {
        try {
          await set(child(getData, `/tasks/${localStorage.getItem('userId')}/${guid}`), item)
        }
        catch (e){
          console.log(e)
        }
      };

      return {fetchData, pushData, loading, error, setLoading, setError};
}