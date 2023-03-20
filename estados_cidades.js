'use strict'

export const getDadosEstados = async () => {

    const url = `http://localhost:8080/estado/sigla/${sigla}`

    // o fetch faz a requisicoa pela url
    const response = await fetch(url)

    //await é o que aguarda a promessa,ele aguarda pq nem toda promessa é comprida.
    const estado = await response.json()

    return{
        estado:estado.sigla,
        descricao: estado.estado,
        capital : estado,capital,
        regiao: estado.regiao
    }


}