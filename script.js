// Placeholder for assignment -----------------
fetch('https://api.adviceslip.com/advice').then(response => {
    return response.json();
}).then(adviceData => {
    const advice = adviceData.slip;
    adviceWrapper.innerHTML = `<p>${advice.advice}</p>`;
});


// Ajax attempt -----------------
// function generateAdvice() {

//     $.ajax('https://api.adviceslip.com/advice', {
//         success: function (APIResponse) {
//             var adviceData = $(`<p>${APIResponse.slip.advice}</p>`);
//             $('#adviceWrapper').append(adviceData);
//         }
//     })
// };

// For testing -----------------
// let myRequest = new XMLHttpRequest();
// myRequest.open('GET', 'https://api.adviceslip.com/advice', true);
// myRequest.send();