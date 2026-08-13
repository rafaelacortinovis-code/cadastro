import Card1 from "../components/card1";
import Card2 from "../components/card2";
import Card3 from "../components/card3";





export default function show(){
    return(
        <>
        <h1>fique ligado nas informações do show</h1>
        < Card1
        nome="Rafaela"
        idade="16"
        altura="1,68"
         />

         < Card2
        empresa="cabelo de ventos"
        produto="ingresso"
        preço="450"
         />

          < Card3
        nome_local="alianz parque"
        descrição="um show para curtir com a familia,com a presença de bolsa nova "
        utilização="acessar o camarote"
         />
        
        </>
    )
}