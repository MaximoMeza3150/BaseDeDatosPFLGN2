// Scripts de index.html y emisiones fugitivas

const tiempoTranscurrido = Date.now();
const hoy = new Date (tiempoTranscurrido);
utc = hoy.toLocaleDateString();
horasDashboardEmisiones = hoy.getHours()
minutosDashboardEmisiones = hoy.getMinutes()
segundosDashboardEmisiones = hoy.getSeconds()
console.log(utc)

const fechaEmisiones = document.querySelector('#fechaActualizacionEmisiones');
fechaEmisiones.textContent = 'Actualizado al ' + utc + ' a las ' + horasDashboardEmisiones + ':' + minutosDashboardEmisiones + ':' + segundosDashboardEmisiones + ' hrs' ;

const fechaEmisiones2 = document.querySelector('#footerMyPieChart');
fechaEmisiones2.textContent = 'Actualizado al ' + utc + ' a las ' + horasDashboardEmisiones + ':' + minutosDashboardEmisiones + ':' + segundosDashboardEmisiones + ' hrs' ;
