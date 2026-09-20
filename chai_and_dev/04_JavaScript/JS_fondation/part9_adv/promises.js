function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // let success = false;
            let success = true;
            if (success) {
                resolve(`Data Fetched Successfully`)
            }
            else {
                reject(`Error Fetching Data`)
            }
        }, 2000);
    })
}

fetchData()
    // .then((data) => { console.log(data) })
    .then((data) => {
        console.log(data)
        // return `shantanu`
        return data.toLowerCase();
    })
    .then((value) => {
        console.log(value);
    })
    .catch((error) => { console.error(error) })
