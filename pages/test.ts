let x :number | null= null

x = 150.3
if(typeof x === "number"){

  x.toFixed(2)
}

const sum = (a:number,b:number):number => {
  const value = a + b
  return value
}
interface LoginProps {
  name:string,
  age:number,
  onSubmit:()=> void
}



