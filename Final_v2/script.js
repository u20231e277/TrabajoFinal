let DATA = {
  ambientes: [
    {
      id: 1,
      nombre: "Cancha 01 - Tenis de campo",
      descripcion:
        "Tenis de campo, exclusivo para asociados y sus invitados. Cancha 1.",
      price: {
        socios: 0,
        invitados: {
          adultos: 50,
          niños: 20,
        },
      },
      horarios: [
        {
          id: 1,
          fecha: "Jueves 13",
          horarios: [
            {
              id: 1,
              inicio: "09:00",
              fin: "10:00",
              disponible: true,
            },
            {
              id: 2,
              inicio: "10:00",
              fin: "11:00",
              disponible: true,
            },
            {
              id: 3,
              inicio: "11:00",
              fin: "12:00",
              disponible: true,
            },
            {
              id: 4,
              inicio: "12:00",
              fin: "13:00",
              disponible: true,
            },
          ],
        },
      ],
    },
    {
      id: 2,
      nombre: "Cancha 02 - Tenis de campo",
      descripcion:
        "Tenis de campo, exclusivo para asociados y sus invitados. Cancha 2.",
      price: {
        socios: 0,
        invitados: {
          adultos: 40,
          niños: 15,
        },
      },
      horarios: [
        {
          id: 1,
          fecha: "Jueves 13",
          horarios: [
            {
              id: 1,
              inicio: "09:00",
              fin: "10:00",
              disponible: true,
            },
            {
              id: 2,
              inicio: "10:00",
              fin: "11:00",
              disponible: true,
            },
            {
              id: 3,
              inicio: "11:00",
              fin: "12:00",
              disponible: true,
            },
            {
              id: 4,
              inicio: "12:00",
              fin: "13:00",
              disponible: true,
            },
          ],
        },
        {
          id: 2,
          fecha: "Viernes 14",
          horarios: [
            {
              id: 1,
              inicio: "08:30",
              fin: "09:30",
              disponible: true,
            },
            {
              id: 2,
              inicio: "09:30",
              fin: "10:30",
              disponible: true,
            },
            {
              id: 3,
              inicio: "10:30",
              fin: "11:30",
              disponible: true,
            },
            {
              id: 4,
              inicio: "11:30",
              fin: "12:30",
              disponible: true,
            },
          ],
        },
        {
          id: 3,
          fecha: "Sábado 15",
          horarios: [
            {
              id: 1,
              inicio: "13:00",
              fin: "14:00",
              disponible: true,
            },
          ],
        },
      ],
    },
    {
      id: 3,
      nombre: "Cancha de Fútbol 12 Personas",
      descripcion:
        "Cancha de fútbol, exclusivo para asociados y sus invitados. Aforo máximo de 12 personas",
      price: {
        socios: 0,
        invitados: {
          adultos: 55,
          niños: 25,
        },
      },
      horarios: [
        {
          id: 1,
          fecha: "Jueves 13",
          horarios: [
            {
              id: 1,
              inicio: "09:00",
              fin: "10:00",
              disponible: true,
            },
          ],
        },
      ],
    },
    {
      id: 4,
      nombre: "Cancha de Fútbol 6 Personas",
      descripcion:
        "Cancha de fútbol, exclusivo para asociados y sus invitados. Aforo máximo de 6 personas",
      price: {
        socios: 0,
        invitados: {
          adultos: 40,
          niños: 10,
        },
      },
      horarios: [
        {
          id: 1,
          fecha: "Jueves 13",
          horarios: [
            {
              id: 1,
              inicio: "09:00",
              fin: "10:00",
              disponible: true,
            },
          ],
        },
        {
          id: 2,
          fecha: "Viernes 14",
          horarios: [
            {
              id: 1,
              inicio: "08:30",
              fin: "09:30",
              disponible: true,
            },
            {
              id: 2,
              inicio: "09:30",
              fin: "10:30",
              disponible: true,
            },
            {
              id: 3,
              inicio: "10:30",
              fin: "11:30",
              disponible: true,
            },
            {
              id: 4,
              inicio: "11:30",
              fin: "12:30",
              disponible: true,
            },
          ],
        },
        {
          id: 3,
          fecha: "Sábado 15",
          horarios: [
            {
              id: 1,
              inicio: "13:00",
              fin: "14:00",
              disponible: true,
            },
          ],
        },
      ],
    },
    {
      id: 5,
      nombre: "Piscina de Natación Profesional",
      descripcion:
        "Piscina de natación, exclusivo para asociados y sus invitados",
      price: {
        socios: 0,
        invitados: {
          adultos: 70,
          niños: 35,
        },
      },
      horarios: [
        {
          id: 1,
          fecha: "Jueves 13",
          horarios: [
            {
              id: 1,
              inicio: "09:00",
              fin: "10:00",
              disponible: true,
            },
          ],
        },
        {
          id: 2,
          fecha: "Viernes 14",
          horarios: [
            {
              id: 1,
              inicio: "08:30",
              fin: "09:30",
              disponible: true,
            },
            {
              id: 2,
              inicio: "09:30",
              fin: "10:30",
              disponible: true,
            },
            {
              id: 3,
              inicio: "10:30",
              fin: "11:30",
              disponible: true,
            },
            {
              id: 4,
              inicio: "11:30",
              fin: "12:30",
              disponible: true,
            },
          ],
        },
        {
          id: 3,
          fecha: "Sábado 15",
          horarios: [
            {
              id: 1,
              inicio: "13:00",
              fin: "14:00",
              disponible: true,
            },
          ],
        },
      ],
    },
    {
      id: 6,
      nombre: "Piscina de Relajo 2024 - J65",
      descripcion:
        "Piscina de relajo, exclusivo para asociados y sus invitados",
      price: {
        socios: 0,
        invitados: {
          adultos: 50,
          niños: 20,
        },
      },
      horarios: [
        {
          id: 1,
          fecha: "Jueves 13",
          horarios: [
            {
              id: 1,
              inicio: "09:00",
              fin: "10:00",
              disponible: true,
            },
          ],
        },
        {
          id: 2,
          fecha: "Viernes 14",
          horarios: [
            {
              id: 1,
              inicio: "08:30",
              fin: "09:30",
              disponible: true,
            },
            {
              id: 2,
              inicio: "09:30",
              fin: "10:30",
              disponible: true,
            },
            {
              id: 3,
              inicio: "10:30",
              fin: "11:30",
              disponible: true,
            },
            {
              id: 4,
              inicio: "11:30",
              fin: "12:30",
              disponible: true,
            },
          ],
        },
        {
          id: 3,
          fecha: "Sábado 15",
          horarios: [
            {
              id: 1,
              inicio: "13:00",
              fin: "14:00",
              disponible: true,
            },
          ],
        },
      ],
    },
    {
      id: 7,
      nombre: "Cancha de Basketball 2024 Renovado",
      descripcion:
        "Cancha de basketball, exclusivo para asociados y sus invitados",
      price: {
        socios: 0,
        invitados: {
          adultos: 50,
          niños: 20,
        },
      },
      horarios: [
        {
          id: 1,
          fecha: "Jueves 13",
          horarios: [
            {
              id: 1,
              inicio: "09:00",
              fin: "10:00",
              disponible: true,
            },
          ],
        },
        {
          id: 2,
          fecha: "Viernes 14",
          horarios: [
            {
              id: 1,
              inicio: "08:30",
              fin: "09:30",
              disponible: true,
            },
            {
              id: 2,
              inicio: "09:30",
              fin: "10:30",
              disponible: true,
            },
            {
              id: 3,
              inicio: "10:30",
              fin: "11:30",
              disponible: true,
            },
            {
              id: 4,
              inicio: "11:30",
              fin: "12:30",
              disponible: true,
            },
          ],
        },
        {
          id: 3,
          fecha: "Sábado 15",
          horarios: [
            {
              id: 1,
              inicio: "13:00",
              fin: "14:00",
              disponible: true,
            },
          ],
        },
      ],
    },
    {
      id: 8,
      nombre: "Cancha de Basketball - 4 Invitados Max",
      descripcion:
        "Cancha de basketball, exclusivo para asociados y sus invitados. Aforo máximo de 4 invitados",
      price: {
        socios: 0,
        invitados: {
          adultos: 50,
          niños: 20,
        },
      },
      horarios: [
        {
          id: 1,
          fecha: "Jueves 13",
          horarios: [
            {
              id: 1,
              inicio: "09:00",
              fin: "10:00",
              disponible: true,
            },
          ],
        },
        {
          id: 2,
          fecha: "Viernes 14",
          horarios: [
            {
              id: 1,
              inicio: "08:30",
              fin: "09:30",
              disponible: true,
            },
            {
              id: 2,
              inicio: "09:30",
              fin: "10:30",
              disponible: true,
            },
            {
              id: 3,
              inicio: "10:30",
              fin: "11:30",
              disponible: true,
            },
            {
              id: 4,
              inicio: "11:30",
              fin: "12:30",
              disponible: true,
            },
            {
              id: 5,
              inicio: "12:30",
              fin: "13:30",
              disponible: true,
            },
          ],
        },
      ],
    },
  ],
};

let misReservas = {
  reservas: [],
};

// document.addEventListener("DOMContentLoaded", () => {
//   const calendarEl = document.getElementById("calendar");
//   const calendar = new FullCalendar.Calendar(calendarEl, {
//     locale: "es",
//     initialView: "dayGridMonth",
//   });
//   calendar.render();
//   if (localStorage.getItem("reservasData")) {
//     DATA = JSON.parse(localStorage.getItem("reservasData"));
//     misReservas = JSON.parse(localStorage.getItem("misReservas"));
//   } else {
//     localStorage.setItem("reservasData", JSON.stringify(DATA));
//     localStorage.setItem("misReservas", JSON.stringify(misReservas));
//   }
//   getAmbientes();
// });

document.addEventListener("DOMContentLoaded", () => {
  const selectedDateStartSpan = document.getElementById("selected-date-start");
  const selectedDateEndSpan = document.getElementById("selected-date-end");

 if (!selectedDateStartSpan || !selectedDateEndSpan) {
  console.error('Elementos con id "selected-date-start" o "selected-date-end" no encontrados.');
  }

  const calendarStartEl = document.getElementById("calendar-start");
  const calendarEndEl = document.getElementById("calendar-end");
  
  const calendarStartContainer = document.querySelector(".datesStart .calendar-container");
  const calendarEndContainer = document.querySelector(".datesEnd .calendar-container");

  // const calendar = new FullCalendar.Calendar(calendarEl, {
  //   locale: "es",
  //   initialView: "dayGridMonth",
  //   selectable: true,
  //   dateClick: function(info) {
  //     const options = { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' };
  //     const formattedDate = new Date(info.dateStr + 'T00:00:00').toLocaleDateString('es-ES', options);
  //     selectedDateSpan.textContent = formattedDate;
  //     calendarContainer.style.display = "none"; 
  //   }
  // });
  // calendar.render();

  const calendarStart = new FullCalendar.Calendar(calendarStartEl, {
    locale: "es",
    initialView: "dayGridMonth",
    selectable: true,
    dateClick: function(info) {
      const options = { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' };
      const formattedDate = new Date(info.dateStr + 'T00:00:00').toLocaleDateString('es-ES', options);
      selectedDateStartSpan.textContent = formattedDate;
      calendarStartContainer.style.display = "none"; 
    }
  });
  calendarStart.render();

  const calendarEnd = new FullCalendar.Calendar(calendarEndEl, {
    locale: "es",
    initialView: "dayGridMonth",
    selectable: true,
    dateClick: function(info) {
      const options = { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' };
      const formattedDate = new Date(info.dateStr + 'T00:00:00').toLocaleDateString('es-ES', options);
      selectedDateEndSpan.textContent = formattedDate;
      calendarEndContainer.style.display = "none"; 
    }
  });
  calendarEnd.render();

  const iconTopStart = document.querySelector(".datesStart .icon-top");
  iconTopStart.addEventListener("click", () => {
    calendarStartContainer.style.display = "block";
  });

  const iconTopEnd = document.querySelector(".datesEnd .icon-top");
  iconTopEnd.addEventListener("click", () => {
    calendarEndContainer.style.display = "block";
  });

  if (localStorage.getItem("reservasData")) {
    DATA = JSON.parse(localStorage.getItem("reservasData"));
    misReservas = JSON.parse(localStorage.getItem("misReservas"));
  } else {
    localStorage.setItem("reservasData", JSON.stringify(DATA));
    localStorage.setItem("misReservas", JSON.stringify(misReservas));
  }
  getAmbientes();
});

const startDateSelector = document.querySelector(".datesStart .dropdown");
const endDateSelector = document.querySelector(".datesEnd .dropdown");
const addInvitados = document.querySelector(".invites .dropdown .message");
const addAdultos = document.querySelector(
  ".invites .dropdown .add-invitados input[name='add-adultos']"
);
const addNiños = document.querySelector(
  ".invites .dropdown .add-invitados input[name='add-niños']"
);

addAdultos.addEventListener("change", () => {
  addAdultos.parentElement.parentElement.parentElement.querySelector(
    ".message .cantidadAdultos"
  ).innerHTML = addAdultos.value;
});

addAdultos.addEventListener("change", () => {
  addAdultos.parentElement.parentElement.parentElement.querySelector(
    ".message .cantidadAdultos"
  ).innerHTML = addAdultos.value;
});

addNiños.addEventListener("change", () => {
  addNiños.parentElement.parentElement.parentElement.querySelector(
    ".message .cantidadNiños"
  ).innerHTML = addNiños.value;
});

addNiños.addEventListener("change", () => {
  addNiños.parentElement.parentElement.parentElement.querySelector(
    ".message .cantidadNiños"
  ).innerHTML = addNiños.value;
});

addInvitados.addEventListener("click", () => {
  if (
    addInvitados.parentElement.querySelector(".add-invitados").style.display ===
    "flex"
  ) {
    addInvitados.parentElement.querySelector(".add-invitados").style.display =
      "none";
    addInvitados.parentElement.querySelector(".icon-bottom").style.display =
      "none";
    addInvitados.parentElement.querySelector(".icon-top").style.display =
      "flex";
  } else {
    addInvitados.parentElement.querySelector(".icon-bottom").style.display =
      "flex";
    addInvitados.parentElement.querySelector(".icon-top").style.display =
      "none";
    addInvitados.parentElement.querySelector(".add-invitados").style.display =
      "flex";
  }
});

startDateSelector.addEventListener("click", () => {
  startDateSelector.querySelector(".calendar-container").style.display = "flex";
});

endDateSelector.addEventListener("click", () => {
  endDateSelector.querySelector(".calendar-container").style.display = "flex";
});

function openMenu() {
  document.getElementById("menu").style.width = "250px"; // Ajustar el ancho deseado del menú
}

function closeMenu() {
  document.getElementById("menu").style.width = "0";
}

function showResults() {
  const ambienteSelected = parseInt(
    document.querySelector('input[name="area"]:checked')?.dataset.id
  );

  if (!ambienteSelected) {
    window.errorSearch.showModal();
    setTimeout(() => {
      window.errorSearch.close();
    }, 2000);
    return;
  }

  const ambiente = DATA.ambientes.find(
    (ambiente) => ambiente.id === ambienteSelected
  );

  const dayResults = document.querySelector(".containner-results");
  dayResults.innerHTML = `<div class="section-title">
          <svg
          width="11"
          height="12"
          viewBox="0 0 11 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="5.5" cy="5.5" r="5.5" fill="#e2a30e" />
          <path
            d="M8.93563 4.79961C9.49421 5.2064 9.4817 6.04362 8.91121 6.43354L4.85375 9.2068C4.18442 9.66429 3.27747 9.17694 3.28958 8.36628L3.37427 2.69974C3.38638 1.88908 4.30749 1.42905 4.96286 1.90633L8.93563 4.79961Z"
            fill="white"
          />
        </svg>
          <span>Resultados encontrados</span>
        </div>`;

  ambiente.horarios.forEach((day) => {
    const dayResult = document.createElement("div");
    dayResult.classList.add("day-results");

    dayResult.innerHTML = `
        <h4>${day.fecha}</h4>
        <div class="time-buttons">
            ${day.horarios
              .map(
                (time) => `
                <button data-ambiente="${ambienteSelected}" data-fecha="${
                  day.id
                }" data-horario="${time.id}" class="time-button ${
                  time.disponible ? "available" : "not-available"
                }" onclick="selectTime(this)">${time.inicio} - ${
                  time.fin
                }</button>`
              )
              .join("")}
        </div>
    `;
    dayResults.appendChild(dayResult);
  });
}
let botonHorario;
let reservaSelected = {};
function selectTime(button) {
  botonHorario = button;
  const isAvailable = button.classList.contains("available");

  if (!isAvailable) {
    window.dialogError.showModal();
    setTimeout(() => {
      window.dialogError.close();
    }, 1500);
    return;
  }

  const ambienteSelected = parseInt(button.dataset.ambiente);
  const horarioSelected = parseInt(button.dataset.horario);
  const fechaSelected = parseInt(button.dataset.fecha);

  window.dialogConfirmation.showModal();

  const selecttime = document.querySelector(
    "#dialogConfirmation #selected-time"
  );

  selecttime.innerHTML =
    DATA.ambientes
      .find((ambiente) => ambiente.id === ambienteSelected)
      .horarios.find((fechas) => fechas.id === fechaSelected)
      .horarios.find((horario) => horario.id === horarioSelected).inicio +
    " - " +
    DATA.ambientes
      .find((ambiente) => ambiente.id === ambienteSelected)
      .horarios.find((fechas) => fechas.id === fechaSelected)
      .horarios.find((horario) => horario.id === horarioSelected).fin;

  const adultos = document.querySelector(
    ".invites .dropdown .add-invitados input[name='add-adultos']"
  ).value;
  const niños = document.querySelector(
    ".invites .dropdown .add-invitados input[name='add-niños']"
  ).value;

  reservaSelected = {
    ambienteSelected,
    fechaSelected,
    horarioSelected,
    invitados: {
      adultos,
      niños,
    },
  };

  return;
}

document
  .querySelector("#dialogConfirmation #cancel-button")
  .addEventListener("click", () => {
    window.dialogConfirmation.close();
    return;
  });

document
  .querySelector("#dialogConfirmation #confirm-button")
  .addEventListener("click", () => {
    misReservas.reservas.push(reservaSelected);
    // cambiar el estado de la reserva en el array de reservas
    DATA.ambientes.forEach((ambiente) => {
      if (ambiente.id === reservaSelected.ambienteSelected) {
        ambiente.horarios.forEach((day) => {
          if (day.id === reservaSelected.fechaSelected) {
            day.horarios.forEach((time) => {
              if (time.id === reservaSelected.horarioSelected) {
                time.disponible = false;
              }
            });
          }
        });
      }
    });
    localStorage.setItem("misReservas", JSON.stringify(misReservas));
    localStorage.setItem("reservasData", JSON.stringify(DATA));

    // cambiar el estado de la reserva
    botonHorario.classList.remove("available");
    botonHorario.classList.add("not-available");

    window.dialogConfirmation.close();
    return;
  });

// Obtener los áreas disponibles, por defecto solo traera los primeros 4 ambientes de la lista
const getAmbientes = () => {
  DATA.ambientes.forEach((ambiente, index) => {
    if (index > 3) {
      return;
    }
    const searchResult = document.createElement("li");

    searchResult.innerHTML = `
        <label>
            <input type="radio" name="area" data-id="${ambiente.id}" />
            <span class="radio-custom"></span>
            ${ambiente.nombre}
        </label>
    `;
    document.querySelector(".select-area .area-list").appendChild(searchResult);
  });
};

// Filtrar los resultados de la búsqueda
const searchInput = document.querySelector(".search-input");
searchInput.addEventListener("keyup", (event) => {
  const searchValue = event.target.value;
  const searchResultsList = document.querySelector(".select-area .area-list");
  searchResultsList.innerHTML = "";

  if (searchValue.length < 4) {
    getAmbientes();
    return;
  }

  const searchResults = DATA.ambientes.filter((ambiente) =>
    ambiente.nombre.toLowerCase().includes(searchValue.toLowerCase())
  );

  searchResults.forEach((ambiente, index) => {
    const searchResult = document.createElement("li");
    searchResult.innerHTML = `
        <label>
            <input type="radio" name="area" data-id="${ambiente.id}" />
            <span class="radio-custom"></span>
            ${ambiente.nombre}
        </label> `;

    searchResultsList.appendChild(searchResult);
  });
});
