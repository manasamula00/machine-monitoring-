// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyB20OKf5dTwLL8ojh3w-bBC3GmkRTm-UTg",
    authDomain: "machinemonitor-fd101.firebaseapp.com",
    databaseURL: "https://machinemonitor-fd101-default-rtdb.firebaseio.com",
    projectId: "machinemonitor-fd101",
    storageBucket: "machinemonitor-fd101.firebasestorage.app",
    messagingSenderId: "681417446765",
    appId: "1:681417446765:web:49234ba7c69cca5db2b664",
    measurementId: "G-GLG2EH2FLV"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Reference Firebase Database
const dataRef = database.ref("mainbucket"); // Update if necessary

// Fetch Real-time Data
dataRef.on("value", (snapshot) => {
    const data = snapshot.val();
    console.log(data); // Debugging: Log the data received from Firebase

    if (data) {
        document.getElementById("Temperature").innerText = data.temp || "--";
        document.getElementById("Current").innerText = data.current || "--";
        document.getElementById("Vibration").innerText = data.vibration || "--";
        
        // Update alert status based on vibration level
        if (data.vibration > 50) {
            document.getElementById("Alert").innerText = "⚠️ Machine Defect Detected!";
            document.getElementById("Alert").style.color = "red";
        } else {
            document.getElementById("Alert").innerText = "✅ Normal";
            document.getElementById("Alert").style.color = "green";
        }
    } else {
        document.getElementById("Alert").innerText = "❌ No Data Received!";
        document.getElementById("Alert").style.color = "orange";
    }
});
