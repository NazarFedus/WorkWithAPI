export default function useValidation(value: number){
     if(value >= 1 && value <= 100){
          return true
     }
     return false
}