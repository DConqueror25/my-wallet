async function loadPage(page) {
    try {

        const response = await fetch(
            `pages/${page}.html`
        );

        if (!response.ok) {
            throw new Error(
                `Unable to load ${page}.html`
            );
        }

        const html =
            await response.text();

        document.getElementById(
            "content"
        ).innerHTML = html;

        switch (page) {

            case "dashboard":
                if (
                    typeof Dashboard !==
                    "undefined"
                ) {
                    Dashboard.refresh();
                }
                break;

            case "portfolio":
                if (
                    typeof Portfolio !==
                    "undefined"
                ) {
                    Portfolio.load();
                }
                break;

            case "expenses":
                if (
                    typeof Expenses !==
                    "undefined"
                ) {
                    Expenses.load();
                }
                break;
        }

    } catch (error) {

        console.error(
            "Page load failed:",
            error
        );

        document.getElementById(
            "content"
        ).innerHTML = `
            <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                Failed to load page.
            </div>
        `;
    }
}

function initializeApp() {

    try {

        loadPage(
            "dashboard"
        );

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
