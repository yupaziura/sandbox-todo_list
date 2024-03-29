import { useState } from "react";
import {child, get, set, remove} from "firebase/database";
import { useFirebase } from "../service/firebase";

export const useData = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const {getData} = useFirebase();

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
          console.log(e, 'tt')
        }
      };

      const pushData = async (item, guid) => {
        try {
          await set(child(getData, `/tasks/${localStorage.getItem('userId')}/${guid}`), item)
        }
        catch (e){
          setError(true)
          console.log(e)
        }
      };

      const updateData = async (valueStatus, data, guid) => {
        const updatedData = await data.map((item, i) => {
            const updatedTask = item.id.StringGuid === guid? {...item, status: valueStatus} : item
            set(child(getData, `tasks/${localStorage.getItem('userId')}/${item.id.StringGuid}`), updatedTask)
            return updatedTask
            })
        return updatedData
      }

      const deleteData = async (guid) => {
        try {
          await remove(child(getData, `tasks/${localStorage.getItem('userId')}/${guid}`));
        }
        catch (e) {
          console.log(e)
        }
      }

      return {fetchData, pushData, loading, error, setLoading, setError, deleteData, updateData};
}