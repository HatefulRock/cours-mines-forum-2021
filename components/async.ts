async function getRemoteData(){
    //GET /data
    const response = await fetch('')
    const responseJson= await response.json()
    //.map(counter=>counter+1)
    return responseJson.map(counter=>counter +1)
}
//les deux fonctions font la meme chose mais une est une promesse et l'autre non
function getRemoteDataPromise(){
    //GET /data
    return fetch('')
    .then((response)=>response.json())
    .then((responseJson)=>responseJson.map(counter=>counter+1))
}


export default getRemoteData