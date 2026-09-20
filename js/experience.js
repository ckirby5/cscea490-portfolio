function toggleRow(mainRow) {
    mainRow.classList.toggle("open");
    mainRow.setAttribute("aria-expanded", mainRow.classList.contains("open"));
}

document.querySelectorAll(".role-information").forEach((row) => {
    row.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            toggleRow(row);
        }
    });
});