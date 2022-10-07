fetch('https://jsonplaceholder.typicode.com/users').then(res=> res.json()).then(
    data => {
        let x;
        for (let i in data) {
            let El = document.createElement("div");
            console.log(data[i])
            El.innerHTML =
            `<div class="user1">
            <p id="name">${data[i].name}</p>
            <p id="username">@${data[i].username}</p>
            <p id="phone">${data[i].phone}</p>
            <p id="emai">${data[i].email}</p>
            <p id="company">${data[i].company.name}</p>
            <div class="street" style="display: flex;">
            <p id="street">${data[i].address.street}</p><p id="street2">, ${data[i].address.suite}</p></div>
            <p id="website">${data[i].website}</p>
        </div>`
        document.getElementById('whole').appendChild(El);
          }
    }
)