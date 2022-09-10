import React from "react";
import * as S from "./CalculatorStyle";


export default function App() {
  return (
    <>
      <S.Container>
        <div>
           <h1>OI</h1>
           {/*  */}         
           <S.GreyBtn> AC </S.GreyBtn>
           <S.GreyBtn> +/- </S.GreyBtn>
           <S.GreyBtn> % </S.GreyBtn>
           <S.SignBtn> ÷ </S.SignBtn>
           {/*  */}
           <S.NumberBtn> 7 </S.NumberBtn>
           <S.NumberBtn> 8 </S.NumberBtn>
           <S.NumberBtn> 9 </S.NumberBtn>
           <S.SignBtn> x </S.SignBtn>
           {/*  */}
           <S.NumberBtn> 4 </S.NumberBtn>
           <S.NumberBtn> 5 </S.NumberBtn>
           <S.NumberBtn> 6 </S.NumberBtn>
           <S.SignBtn> - </S.SignBtn>
           {/*  */}
           <S.NumberBtn> 1 </S.NumberBtn>
           <S.NumberBtn> 2 </S.NumberBtn>
           <S.NumberBtn> 3 </S.NumberBtn>
           <S.SignBtn> + </S.SignBtn>
           {/*  */}
           <S.NumberZero> 0 </S.NumberZero>
           <S.NumberBtn> . </S.NumberBtn>
           <S.ResultBtn> = </S.ResultBtn>
        </div>
      </S.Container>
    </>
  );
};