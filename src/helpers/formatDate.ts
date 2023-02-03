 const addZero = (str:string) => {
  if( Number(str) < 10){
     return `0${str}`
   }else{
     return str
   }
 }
export const formatDate = () => {
  const date:string[] = new Date().toLocaleDateString().split('/')
  const year = date[2]
  const month = date[0]
  const day = date[1]
  return `${year}-${addZero(month)}-${addZero(day)}`
}
