function showTab(tabId) {

    const tabs = [
        "dashboard",
        "portfolio",
        "expenses"
    ];

    tabs.forEach(tab => {

        const element =
            document.getElementById(tab);

        if (element) {
            element.classList.add("hidden");
        }
    });

    const selectedTab =
        document.getElementById(tabId);

    if (selectedTab) {
        selectedTab.classList.remove("hidden");
    }
}

function initializeApp() {

    try {

        if (typeof Portfolio !== "undefined") {
            Portfolio.load();
        }

        if (typeof Expenses !== "undefined") {
            Expenses.load();
        }

        if (typeof Dashboard !== "undefined") {
            Dashboard.refresh();
        }

        showTab("dashboard");

    } catch (error) {

        console.error(
            "Application initialization failed:",
            error
        );
    }
}

document.addEventListener(
    "DOMContentLoaded",
    initializeApp
);
