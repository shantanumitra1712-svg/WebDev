const { use } = require("react");

function fetchUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ name: "Shantanu", url: "https://shantanu.com" })
        }, 3000);
    })
}

// fetchUserData.then().catch()

async function getUserData() {
    try {
        console.log(`Fetching User Data....`);
        const userData = await fetchUserData()
        console.log("User Data fetched successfully");

        console.log("User Data: ", userData);

    } catch (error) {
        console.log("Error fetching data", error);

    }
}

