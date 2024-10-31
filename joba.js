function calculateForce() {
    var mass = document.getElementById("mass").value;
    var acceleration = document.getElementById("acceleration").value;
    var force = mass * acceleration;
    document.getElementById("result").innerText = "Força: " + force + " N";
    
    var object = document.getElementById("object");
    var distance = acceleration * 100; // Distância proporcional à aceleração
    object.style.transition = "transform 1s";
    object.style.transform = "translateX(" + distance + "px)";
}
