//Site da API https://home.openweathermap.org/api_keys
//Chave da api
let chave = "cebcd482eda57fa9a6714c1c2ba91885"


//Api documentacao https://openweathermap.org/current#name


//coloca a informacao que foi pega do api (ESTOU USANDO {.NAME,.TEMP.,.DESCRIPTION,.WEATHER,.HUMIDITY})
function colocarNaTela(dados){
    console.log(dados)
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML =  Math.floor(dados.main.temp) + "°C"
    document.querySelector(".descricao").innerHTML = dados.weather[0].description
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
    document.querySelector(".umidade").innerHTML =" Umidade: "  +  Math.floor(dados.main.humidity) + "%"
}

//pega informacao do api 'usando palavra chave da cidade '
async function buscarCidade(cidade){
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + 
    cidade + 
    "&appid=" + 
    chave + 
    "&lang=pt_br" +
    "&units=metric"
    )
    .then(resposta => resposta.json())

    colocarNaTela(dados)
}

//Botao para buscar no api

function cliqueiNoBotao(){
   let cidade = document.querySelector(".input-cidade").value

   buscarCidade(cidade)
}



                            /*Caso eu queira add mais alguma coisa no codigo resumo das chamadas do api */
/*coord
coord.lonLongitude do local
coord.latLatitude do local
weather(mais informações Códigos de condições meteorológicas)
weather.idIdentificação da condição meteorológica
weather.mainGrupo de parâmetros climáticos (Chuva, Neve, Extremo etc.)
weather.descriptionCondições meteorológicas dentro do grupo. Você pode obter a saída em seu idioma. Saber mais
weather.iconID do ícone do clima
baseParâmetro interno
main
main.tempTemperatura. Padrão da unidade: Kelvin, métrico: Celsius, imperial: Fahrenheit.
main.feels_likeTemperatura. Este parâmetro de temperatura é responsável pela percepção humana do clima. Padrão da unidade: Kelvin, métrico: Celsius, imperial: Fahrenheit.
main.pressurePressão atmosférica (no nível do mar, se não houver dados sea_level ou grnd_level), hPa
main.humidityUmidade, %
main.temp_minTemperatura mínima no momento. Esta é a temperatura mínima observada atualmente (dentro de grandes megalópoles e áreas urbanas). Padrão da unidade: Kelvin, métrico: Celsius, imperial: Fahrenheit.
main.temp_maxTemperatura máxima no momento. Esta é a temperatura máxima atualmente observada (dentro de grandes megalópoles e áreas urbanas). Padrão da unidade: Kelvin, métrico: Celsius, imperial: Fahrenheit.
main.sea_levelPressão atmosférica ao nível do mar, hPa
main.grnd_levelPressão atmosférica no nível do solo, hPa
visibilityVisibilidade, medidor. O valor máximo da visibilidade é de 10km
wind
wind.speedVelocidade do vento. Unidade Padrão: metro/seg, Métrico: metro/seg, Imperial: milhas/hora.
wind.degDireção do vento, graus (meteorológicos)
wind.gustRajada de vento. Unidade Padrão: metro/seg, Métrica: metro/seg, Imperial: milhas/hora
clouds
clouds.allNebulosidade, %
rain
rain.1h (quando disponível) Volume de chuva na última 1 hora, mm. Observe que apenas mm como unidades de medida estão disponíveis para este parâmetro.
rain.3h (quando disponível) Volume de chuva nas últimas 3 horas, mm. PPor favor, note que apenas mm como unidades de medida estão disponíveis para este parâmetro.
snow
snow.1h(quando disponível) Volume de neve na última 1 hora, mm. Observe que apenas mm como unidades de medida estão disponíveis para este parâmetro.
snow.3h (quando disponível) Volume de neve nas últimas 3 horas, mm. Observe que apenas mm como unidades de medida estão disponíveis para este parâmetro.
dtHora do cálculo dos dados, unix, UTC
sys
sys.typeParâmetro interno
sys.idParâmetro interno
sys.messageParâmetro interno
sys.countryCódigo do país (GB, JP, etc.)
sys.sunriseHora do nascer do sol, unix, UTC
sys.sunsetHora do pôr do sol, unix, UTC
timezoneMudança em segundos de UTC
id ID da cidade. Observe que a funcionalidade integrada do geocodificador foi descontinuada. Saiba mais aqui .
name Nome da Cidade. Observe que a funcionalidade integrada do geocodificador foi descontinuada. Saiba mais aqui .
codParâmetro interno */