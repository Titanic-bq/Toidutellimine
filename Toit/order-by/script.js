function toggleSchedule() {
  const option = document.getElementById("deliveryOption").value;
  const box = document.getElementById("scheduleBox");

  if (option === "schedule") {
    box.classList.remove("hidden");
  } else {
    box.classList.add("hidden");
  }
}
