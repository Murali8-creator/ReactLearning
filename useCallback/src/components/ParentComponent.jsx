import React, { useCallback, useState, memo } from 'react'

const Title = memo(function(){
    console.log("title rerendered");
    return <h1>useCallback and React.memo</h1>
  });

  const Main = memo(({text, value}) => {
    console.log("main rerendered");
    return (
        <>
        <h1>{text} : {value} </h1>
        </>
    );
  });

  const Button = ({fn,children}) => {
    console.log("button rerendered");
    return (
        <>
        <button onClick={fn}>{children}</button>
        </>
    );
  }
  

export const ParentComponent = () => {
      console.log("parent rerendered");
  const [age, setAge] = useState(18);
  const [salary, setSalary] = useState(30000);

  function handleIncrementAge (){
    console.log("in age");
    setAge(age+1);
  }
  function handleIncrementSalary(){
    console.log("in salary");
    setSalary(salary+1000);
  }


  return (
    <>
         <Title/>
         <Main text="age" value={age}/>
         <Button fn={handleIncrementAge}>increment age</Button>
         <Main text="salary" value={0}/>
         <Button fn={handleIncrementSalary}>increment salary</Button>
    </>
  )
}
