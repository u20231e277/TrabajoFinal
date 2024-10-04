const DATA = JSON.parse(localStorage.getItem("reservasData"));
const misReservas = JSON.parse(localStorage.getItem("misReservas"));

document.addEventListener("DOMContentLoaded", () => {
  misReservas.reservas.forEach((reserva) => {
    const reservaCard = document.createElement("a");
    reservaCard.href =
      "./reservasDetails/reserva" + reserva.ambienteSelected + ".html";
    reservaCard.classList.add("reservas-card");
    reservaCard.innerHTML = `
          <div class="reservas-card-header">
            <img src=${
              "./img/" + reserva.ambienteSelected + ".jpg"
            } alt="Foto de la reserva" />
          </div>
          <div class="reservas-card-body">
            <h3>${
              DATA.ambientes.filter(
                (ambiente) => ambiente.id === reserva.ambienteSelected
              )[0].nombre
            }</h3>
            <p>${
              DATA.ambientes.filter(
                (ambiente) => ambiente.id === reserva.ambienteSelected
              )[0].descripcion
            }</p>
            <p>${
              DATA.ambientes
                .filter(
                  (ambiente) => ambiente.id === reserva.ambienteSelected
                )[0]
                .horarios.find((fechas) => fechas.id === reserva.fechaSelected)
                .horarios.find(
                  (horario) => horario.id === reserva.horarioSelected
                ).inicio
            } - ${
      DATA.ambientes
        .filter((ambiente) => ambiente.id === reserva.ambienteSelected)[0]
        .horarios.find((fechas) => fechas.id === reserva.fechaSelected)
        .horarios.find((horario) => horario.id === reserva.horarioSelected).fin
    }</p> 
          </div>
        `;
    document.querySelector(".reservas").appendChild(reservaCard);
  });
});
