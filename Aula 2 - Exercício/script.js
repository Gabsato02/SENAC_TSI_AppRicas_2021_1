function flag() {
    const canvas = document.getElementById('flag');
    canvas.style.backgroundColor = "#DC241F";
    const context = canvas.getContext('2d');

    // Definição dos triângulos
    triangle(context, '#FFC726', 0, 150, 75, 150);
    triangle(context, '#000', 0, 100, 75, 150);

    // Definição do texto
    context.beginPath();
    context.moveTo(410,24);
    context.font = '58px Arial';
    context.fillStyle = '#fff';
    context.fillText('★',10,90);
}

function triangle(context, color, start, xCenter, yCenter, end) {
    context.beginPath();
    context.fillStyle = color;
    context.strokeStyle = color;
    context.moveTo(start,start);
    context.lineTo(xCenter, yCenter);
    context.lineTo(start, end);
    context.closePath();
    context.fill();
    context.stroke();
}

function balloon() {
    const canvas = document.getElementById('balloon');
    canvas.style.backgroundColor = "#fff";
    const context = canvas.getContext('2d');

    context.beginPath();
    context.strokeStyle = "#000";
    context.moveTo(50,45);
    context.quadraticCurveTo(100, 10, 120, 45);
    context.quadraticCurveTo(150, 90, 100, 90);
    context.quadraticCurveTo(120, 120, 130, 120);
    context.quadraticCurveTo(120, 120, 90, 90);
    context.quadraticCurveTo(50, 90, 50, 45);
    context.stroke();
    context.closePath;

    // Definição do texto
    context.beginPath();
    context.font = '20px Arial';
    context.fillStyle = '#000';
    context.fillText("(ツ)",135,130);

    // Definição do texto
    context.beginPath();
    context.font = '10px Arial';
    context.fillStyle = '#000';
    context.fillText("Hello World!",65,65);
}