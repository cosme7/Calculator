import React, { useState } from "react";
import * as S from "./CalculatorStyle";

export default function App() {

  const [number, setNumber] = useState(0)
  const [oldNumber, setOldNumber] = useState (0)
  const [operator, setOperator] = useState()

const handleClick = (e) => {
  const InputNumber = e.target.value
  if (number === 0){
      setNumber(InputNumber)
    }else{
      setNumber(number + InputNumber)
    };
};

const allClear = () => {
  setNumber(0)
};

const signChange = () => {
  setNumber (number * -1)
};

const operatorHandler = (e) => {
  const InputOperator = e.target.value
    setOperator(InputOperator);
    setOldNumber (number);
    setNumber(0);
};

const CalculateHandler = () => {
  const olderNumber = parseFloat(oldNumber.replace(",", "."));
  const newNumber = parseFloat(number.replace(",", "."));

  if( operator === "/" ){
    setNumber (( newNumber / olderNumber ).toLocaleString("pt-br"));
  }else if( operator === "*" ){
    setNumber (( newNumber * olderNumber ).toLocaleString("pt-br"));
  }else if( operator === "-" ){
    setNumber (( newNumber - olderNumber ).toLocaleString("pt-br"));
  }else if( operator === "+" ){
    setNumber (( newNumber + olderNumber ).toLocaleString("pt-br"));
  }
};

const percantage = () => {
  setNumber ( number / 100)
};

  return (
    <>
      <S.Container>
        <div>
           <h1>{number}</h1>
           {/*  */}         
           <S.GreyBtn onClick={allClear}> AC </S.GreyBtn>
           <S.GreyBtn onClick={signChange}> +/- </S.GreyBtn>
           <S.GreyBtn onClick={percantage}> % </S.GreyBtn>
           <S.SignBtn onClick={operatorHandler} value="/"> ÷ </S.SignBtn>
           {/*  */}
           <S.NumberBtn onClick={handleClick} value={7}> 7 </S.NumberBtn>
           <S.NumberBtn onClick={handleClick} value={8}> 8 </S.NumberBtn>
           <S.NumberBtn onClick={handleClick} value={9}> 9 </S.NumberBtn>
           <S.SignBtn onClick={operatorHandler} value="*"> x </S.SignBtn>
           {/*  */}
           <S.NumberBtn onClick={handleClick} value={4}> 4 </S.NumberBtn>
           <S.NumberBtn onClick={handleClick} value={5}> 5 </S.NumberBtn>
           <S.NumberBtn onClick={handleClick} value={6}> 6 </S.NumberBtn>
           <S.SignBtn onClick={operatorHandler} value="-"> - </S.SignBtn>
           {/*  */}
           <S.NumberBtn onClick={handleClick} value={1}> 1 </S.NumberBtn>
           <S.NumberBtn onClick={handleClick} value={2}> 2 </S.NumberBtn>
           <S.NumberBtn onClick={handleClick} value={3}> 3 </S.NumberBtn>
           <S.SignBtn onClick={operatorHandler} value="+"> + </S.SignBtn>
           {/*  */}
           <S.NumberZero onClick={handleClick} value={0}> 0 </S.NumberZero>
           <S.NumberBtn onClick={handleClick} value={","}> , </S.NumberBtn>
           <S.ResultBtn onClick={CalculateHandler}> = </S.ResultBtn>
        </div>
      </S.Container>
    </>
  );
};