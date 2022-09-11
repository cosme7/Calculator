<h2>O que foi feito:</h2>
-
<p>1º - Ln 6 : Criando um useState, para guardar o primeiro valor.</p>
-
<p>2º - Ln 7 : Criando um useState, para guardar o segundo valor.</p>
-
<p>3º - Ln 8 : Criando um useState, para guardar os operadores.</p>
-
<p>4º - Ln 10 : Está função está captando o que foi "clicado" nos botões, o if aqui serve para ao clicar no CLEAR, o "0" que retorna não entre junto no cálculo atuomáticamente por exemplo "07" + "07", aí com essa função o "0" que vêm automático é substituído, pelo o número clicado.</p>
-
<p>5º - Ln 19 : Função para dar clear, em todo conteúdo do cálculo.</p>
-
<p>6º - Ln 23 : Função criada, somente com o intuíto de inverter o sinal, + virar - e viceversa.</p>
-
<p>7º - Ln 27 : Função que está pegando o "valor" dos operadores, e guardando no setOperator, transferindo o valor de "number" pra "setOldNumber", e zerando o setNumber, fazendo assim você poder inserir um novo 
valor.</p>
-
<p>8º - Ln 34 : Função destinada para às operações matemáticas, às duas primeiras variáveis são para por o parseFloat, que possibilita a "soma" funcionar sem concatenar, e o replace serve pra trocar o "ponto" por "vírgula", para os padrões de uso brasileiro, o "toLocaleString("pt-br") é que puxa para os padrões Brasileiros, e consequentemente o mesmo diminui a quantidade de casas decimais sem necessidade de por fírula pra diminuir elas, através de .toFixed e derivados.</p>
-
<p>9º - Ln 40 : Função para fazer cálculo de porcentagem.</p>
-
<p>Todos os estilos estão na pasta de components, e o global é onde está às variáveis do CSS (Styled-Components).</p>
-
<h2>Vídeos que usei para o aprendizado:</h2>
-
<p>1º - https://youtu.be/T7Cxu10Kln4</p>
<p>2º - https://youtu.be/vN8_PZR9-1A?t=1407</p>
<p>3º - https://youtu.be/InpOVWzud9U</p>
-
<p>Link: cosme-calc.netlify.app</p>