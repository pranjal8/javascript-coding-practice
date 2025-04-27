async function runProcess() {
    const URL=  'https://github.com/pranjal8?tab=repositories';
    try {

        const response= await fetch(URL);
        const data= await response.json();
        console.log(data)

        
    } catch (error) {
        console.log(error)
    }
    
}

runProcess();

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))
//   .catch(error => console.log(error));