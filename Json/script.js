// ========================== dicionario de informações =======================================
const info = JSON.parse(localStorage.getItem("info")) || {}
const despesas = JSON.parse(localStorage.getItem("despesas")) || {}
// ========================== capturas =======================================

var btn_env = document.getElementById("btn_env")
var btn_val = document.getElementById("btn_valor")
var informacao = document.getElementById("informacao")
var result = document.getElementById("resultado")
var btn_vertotal = document.getElementById("vertotal")

// ======================== FUNÇÃO CARREGA =================================
function carregades(){
    event.preventDefault();
    var key = document.getElementById("key").value
    var despesa_valor = document.getElementById("despesa_valor").value
    despesas[key] = despesa_valor

    var strignjD = JSON.stringify(despesas)
    localStorage.setItem("despesas",strignjD)
    console.log(strignjD)

    key.value = "";
    despesa_valor.value = ""; 
    document.getElementById("key").value = "";
    document.getElementById("despesa_valor").value = "";
}
function carregainfo(){
    var dest = document.getElementById("dest").value
    var ida = document.getElementById("ida").value
    var volt = document.getElementById("volt").value
    info.Destino = dest  
    info.Ida = ida
    info.Vinda = volt
    informacao.innerHTML = "O destino é: " + dest + " a data prevista de ida é: " + ida + " e a de vinda é: "+ volt;
    var stringj = JSON.stringify(info)
    localStorage.setItem("info", stringj)
    console.log(stringj)
}

if (localStorage.getItem("info") != "" ){
    if (info.Destino != undefined){
        informacao.innerHTML = "O destino é: " + info.Destino + " a data prevista de ida é: " + info.Ida+ " e a de vinda é: "+ info.Vinda;
    }
}
if (localStorage.getItem("despesas") != ""){
    for (const chave in despesas) {
        const val = despesas[chave];
        const newspan = document.createElement("span");
        const space = document.createElement("br")
        newspan.textContent = (`Despesas: ${chave}, Valor: ${val}`)
        pai.appendChild(newspan)
        pai.appendChild(space)
    }   
}
// ========================== PRIMEIRA PARTE - INFORMAÇÕES BASICAS =======================================

btn_env.addEventListener('click', carregainfo)
// ========================== SEGUNDA PARTE - DESPESAS =======================================


btn_val.addEventListener("click", carregades)
// ======================== ULTIMA PARTE - CALCULO DO TOTAL GASTO  E EXIBIÇÃO=================================

totalidade = []
btn_vertotal.addEventListener("click",function(){
    var total = Object.values(despesas)
    for (var i = 0; i < total.length; i++){
        totalidade.push(parseFloat(total[i]))
    }
    ttotal = 0
    var todososvaloresgastos = JSON.stringify(totalidade)
    console.log(todososvaloresgastos)
    for (var i = 0; i < totalidade.length; i++){
        ttotal = totalidade[i] + ttotal
    }
    const formatoMoeda = 'pt-BR'; // Código de localização para o Brasil
    const valorFormatado = ttotal.toLocaleString(formatoMoeda, {
    style: 'currency',
    currency: 'BRL'
});
    result.innerHTML = "O total em despesas que foi gasto durante a viagem foi: " + valorFormatado
    
    const pai = document.getElementById("pai")

    for (const chave in despesas) {
        const val = despesas[chave];
        const newspan = document.createElement("span");
        const space = document.createElement("br")
        newspan.textContent = (`Despesas: ${chave}, Valor: ${val}`)
        pai.appendChild(newspan)
        pai.appendChild(space)
    }   
})