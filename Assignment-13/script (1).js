const folderList = document.getElementById("folderList");
const message = document.getElementById("message");

// Simulate loading / retrieval delay
function simulateLoading(callback) {
    message.style.color = "orange";
    message.innerText = "Retrieving data... Please wait";

    setTimeout(() => {
        callback();
    }, 1500); // 1.5 sec delay
}

function createFolder() {
    const folderName = document.getElementById("folderName").value.trim();

    if (folderName === "") {
        message.style.color = "red";
        message.innerText = "Folder name cannot be empty!";
        return;
    }

    simulateLoading(() => {
        try {
            const li = document.createElement("li");
            li.innerText = folderName;

            folderList.appendChild(li);

            message.style.color = "green";
            message.innerText = "Folder created successfully!";

            document.getElementById("folderName").value = "";

        } catch (error) {
            message.style.color = "red";
            message.innerText = "Error retrieving data. Try again.";
        }
    });
}