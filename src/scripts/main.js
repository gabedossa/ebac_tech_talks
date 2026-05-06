AOS.init();

const dataDoEvento = new Date("Dec 16, 2026 19:00:00");
const timeStempDoEvento = dataDoEvento.getTime();

const contaHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();
    const distanciaEvento = timeStempDoEvento - timeStampAtual;

    const diasEvento = Math.floor(distanciaEvento/ (1000 * 60 * 60 * 24));
    const horasEvento = Math.floor((distanciaEvento % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutosEvento = Math.floor((distanciaEvento % (1000 * 60 * 60)) / (1000 * 60));
    const segEvento = Math.floor((distanciaEvento % (1000*60)) / 1000);

    document.getElementById('contador').innerHTML = `Dias - [${diasEvento}] Horas - [${horasEvento}] minutos - [${minutosEvento}] segundos - [${segEvento}]`;
}, 1000);