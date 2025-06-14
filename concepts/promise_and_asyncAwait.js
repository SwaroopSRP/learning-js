// Promises (2 states: resolved, rejected)
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = true;
            if (success) {
                resolve("Data fetched successfully");
            } else {
                reject("Error fetching data");
            }
        }, 3000);
    });
}

fetchData()
    .then((data) => {
        console.log(data);
        return data.toLowerCase();
    })
    .then((value) => {
        console.log(value);
    })
    .catch((error) => console.error(error));


// Async/Await
function fetchUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject({ name: "chaicode", url: "https://chaicode.com" });
        }, 3000);
    });
}

async function getUserData() {
    try {
        console.log("Fetching user data...");
        const userData = await fetchUserData();
        console.log("User data fetched successfully");

        console.log("User data: ", userData);
    } catch (error) {
        console.log("Error fetching data", error);
    }
}
getUserData();
