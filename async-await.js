//getTodos() is now a promise, besides "result" is also a promise 
const getTodos = async () => {
    const fetchData = await fetch('data/firstdata.json');
    // console.log(fetchData);
    const allData = await fetchData.json();
    console.log(allData);
}

getTodos();
