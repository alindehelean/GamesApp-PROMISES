var apiURL = "https://games-world.herokuapp.com";

// function getGamesList(callbackFunction){
//     fetch(apiURL + "/games", {
//         method: "GET",
//         headers: {
//             "Content-Type": "application/x-www-form-urlencoded"
//         } 
//     }).then(function(response){
//         return response.json();
//     }).then(function(arrayOfGames){
//         console.log(arrayOfGames);
//         callbackFunction(arrayOfGames);
//     });
// }

function getGamesList(){
    return fetch(apiURL + "/games", {
        method: "GET",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        } 
    })
    .then(response => response.json());
}


// function deleteGame(gameID, callbackFunction) {
//     console.log(gameID);
//     fetch(apiURL + "/games/" + gameID, {
//         method: "DELETE"
//     }).then(function(r){
//         console.log(r);
//         return r.text(); 
        
//     }).then(function(apiresponse){
        
//         console.log(apiresponse);
//         callbackFunction(apiresponse);
//     });

// }

function deleteGame(gameID){
    return fetch(apiURL + "/games/" + gameID, {
        method: "DELETE"
    })
    .then(r => r.text());
}

// function createGameRequest(gameObj, callbackCreateGame){
//     fetch(apiURL + "/games", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/x-www-form-urlencoded"
//         },
//         body: gameObj 
//     }).then(function(response){
//         console.log(response);
//         return response.json();
//     }).then(function(createdGame){
//         console.log(createdGame);
//         callbackCreateGame(createdGame);
//     });
// }

function createGameRequest(gameObj){
    return fetch(apiURL + "/games", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: gameObj
    })
    .then(response => response.json());
}


// function updateGameRequest(gameid,updatedGameObj, callbackUpdateGame){
//     fetch(apiURL + "/games/" + gameid,  {
//         method: "PUT",
//         headers: {
//             "Content-Type": "application/x-www-form-urlencoded"
//         },
//         body: updatedGameObj
//     }).then(function(response){
//         return response.json();
//     }).then(function(updatedResponse){
//         // console.log(updatedResponse);
//         callbackUpdateGame(updatedResponse);
//     });
// }

function updateGameRequest(gameid,updatedGameObj){
    return fetch(apiURL + "/games/" + gameid,  {
        method: "PUT",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: updatedGameObj
    })
    .then(response => response.json());
}

// Difference

// "application/json"
// {"cheie": "valoare", "cheie2": "valoare2"}

//application/x-www-form-urlencoded
// cheie=valoare&cheie2=valoare2