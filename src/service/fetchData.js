import {child,get} from "firebase/database";
import { getData } from "./firebase";

export const useFetchData = () => {
    const action = async () => {
        const newArr = [];
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
        return newArr;
      };
      return action;
}