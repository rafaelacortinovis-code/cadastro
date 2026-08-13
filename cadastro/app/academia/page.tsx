import Card1 from "../components/card1";
import Card2 from "../components/card2";
import Card3 from "../components/card3";





export default function academia(){
    return(
        <>
        <h1>fique ligado nas informações do show</h1>
        < Card1
        nome="Rafaela"
        idade="16"
        altura="1,68"
         />

         < Card2
        empresa="smart fit"
        produto="Se torne aluno da melhor academia do Brasil"
        preço="100 por mes"
         />

          < Card3
        nome_local="marilia/sp"
        descrição="voce esta preparado para começar a usar a melhor academia 
        de todos os tempos!!!! "
        utilização="melhore seu plano para o pro"
         />
        
        </>
    )
}