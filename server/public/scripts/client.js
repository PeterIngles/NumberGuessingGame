$(document).ready(handleReady);

let numbers = []

// make a click for 
function handleReady() {
  console.log("jquery is loaded!")

  $('#submit').on('click', submitNumbers);
  getNumbers()
}

function submitNumbers(event) {
  event.preventDefault();
  console.log('in submitNumbers');
  const playerGuesses = {
    player1: {player:'Player 1', number: $('#numberInput1').val() },
    player2: {player:'Player 2', number: $('#numberInput2').val() },
    player3: {player:'Player 3', number: $('#numberInput3').val() }
  }

// Ajax will communicate and send dat to the server
  $.ajax({
    method: "POST", // type of request
    url: "/addguesses", //route that will be used
    data: playerGuesses // Needs to be an object
  }).then((response) => {
    console.log("POST was successful", response) //Expect 201
    getNumbers()
    render()
  }).catch((error) => {
    console.log("Error with POST request", error)
    alert("Error with POST")
  })
  $('#numberInput1').val("")
  $('#numberInput2').val("")
  $('#numberInput3').val("")
  // Take some data and send to server
  }

  let getNumbers = () => {
    // Use Ajax to retrieve (GET) quotes from server
        // Server endpooint: /quotes
  console.log('inside getNumbers')
//   AJAX
    $.ajax({
        // Tells Ajax how to communicate with server,
        // also tells Ajax where to go on the server
        method: 'GET',
        url: '/numbers'
    }).then((response) => {
        console.log(response)
        numbers = response //Adds our numbers to the DOM (as long as the server is still running)
        render() 
    }).catch((error) => {
        alert("Request failed")
        console.log("Request failed", error)
    })
}

let render = () => {
  $('#output').empty()
  // Looping over and appending to DOM
  for(let guess in numbers) {

  }
      $('#output').append(`
     <tr id = "playerOneOutput">
      <td>ROUND</td> 
      <td>HELLO</td>
      <td>PLATO</td>
      <td>Winner</td>
     </tr> `)
  }

// ROUND needs to increment with counter






 