
const form = document.querySelector("#ticketForm");
const type = document.querySelector("#type");
const extraContainer = document.querySelector("#extraContainer");
const extraLabel = document.querySelector("#extraLabel");
const extra = document.querySelector("#extra");
const output = document.querySelector("#output");

function updateExtraField() {
  const value = type.value;

  if (value === "student") {
    extraContainer.hidden = false;
    extraLabel.textContent = "Student I#";
    extra.required = true;
  } else if (value === "guest") {
    extraContainer.hidden = false;
    extraLabel.textContent = "Access Code";
    extra.required = true;
  } else {
    extraContainer.hidden = true;
    extra.required = false;
    extra.value = "";
  }
}

type.addEventListener("change", updateExtraField);
updateExtraField();


function isFutureDate(value) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const chosen = new Date(value + "T00:00:00");
  return chosen > today;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  output.textContent = "";

  const firstName = form.firstName.value.trim();
  const lastName = form.lastName.value.trim();
  const email = form.email.value.trim();
  const ticketType = form.type.value;
  const eventDate = form.eventDate.value;
  const extraValue = form.extra.value.trim();


  if (!isFutureDate(eventDate)) {
    output.textContent = "Event Date must be later than today.";
    return;
  }

  if (ticketType === "student" && !/^\d{9}$/.test(extraValue)) {
    output.textContent = "Student I# must be 9 digits";
    return;
  }

  if (ticketType === "guest" && extraValue !== "EVENT131") {
    output.textContent = "Access Code is not correct";
    return;
  }

  output.innerHTML = `
  <h2>Ticket Created</h2>
  <p>${firstName} ${lastName}</p>
  <p>${ticketType}</p>
  <p>${eventDate}</p>
  `;

  form.reset();
  updateExtraField();
});
