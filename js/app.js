function showTab(tabId) {

    document.querySelectorAll("[id]").forEach(element => {

        if (
            element.id === "dashboard" ||
            element.id === "portfolio" ||
            element.id === "expenses"
        ) {
            element.classList.add("hidden");
        }
    });

    document.getElementById(tabId)
        .classList.remove("hidden");
}
