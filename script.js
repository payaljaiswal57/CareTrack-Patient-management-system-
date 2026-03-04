let patients = JSON.parse(localStorage.getItem("patients")) || [];

function saveData(){
    localStorage.setItem("patients", JSON.stringify(patients));
}

function toggleMenu(){
    let nav = document.getElementById("navLinks");
    nav.classList.toggle("show");
}

function toggleDark(){
    document.body.classList.toggle("dark");

    let btn = document.getElementById("darkBtn");

    if(document.body.classList.contains("dark")){
        btn.innerText = "Switch to Light Mode";
    } else {
        btn.innerText = "Switch to Dark Mode";
    }
}
