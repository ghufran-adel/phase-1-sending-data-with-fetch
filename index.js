// Add your code here
// Add your code here
function submitData(name,email){
    const formData = {
    name: "Steve",
    email: "steve@steve.com",
    };
    
    const object ={
    method: "POST",
    headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    },
    body: JSON.stringify(formData)};
    return fetch(`http://localhost:3000/users`,object)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        document.body.innerHTML=data.id;
    }).catch(error=> {
      document.body.innerHTML=error.message;
    });
};

submitData()