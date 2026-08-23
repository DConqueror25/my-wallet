const Expenses = {

    categories: [
        "shopping",
        "food",
        "petrol",
        "travel",
        "rent",
        "lpg",
        "utensils",
        "haircare",
        "hospital",
        "family",
        "personal"
    ],

    add() {

        const input =
            document.getElementById("expenseText");

        const text =
            input.value.trim().toLowerCase();

        if (!text) {

            alert("Please enter an expense.");

            return;
        }

        const amountMatch =
            text.match(/\d+/);

        if (!amountMatch) {

            alert("Amount not found.");

            return;
        }

        const amount =
            Number(amountMatch[0]);

        let category = "other";

        for (const item of this.categories) {

            if (text.includes(item)) {

                category = item;

                break;
            }
        }

        const expenses =
            Storage.get("expenses") || [];

        expenses.push({

            id: Date.now(),

            amount: amount,

            category: category,

            description: text,

            date: new Date().toLocaleDateString("en-IN")
        });

        Storage.set(
            "expenses",
            expenses
        );

        input.value = "";

        this.load();

        Dashboard.refresh();
    },

    load() {

        const expenses =
            Storage.get("expenses") || [];

        const container =
            document.getElementById("expenseList");

        const count =
            document.getElementById("expenseCount");

        if (!container) {
            return;
        }

        if (count) {

            count.textContent =
                `${expenses.length} Records`;
        }

        if (expenses.length === 0) {

            container.innerHTML = `
                <div class="text-center text-gray-400 py-4">
                    No expenses available
                </div>
            `;

            return;
        }

        let html = "";

        [...expenses]
            .reverse()
            .forEach(expense => {

                html += `
                    <div class="border rounded-lg p-3 bg-gray-50">

                        <div class="flex justify-between">

                            <div class="font-semibold">
                                ₹${expense.amount.toLocaleString("en-IN")}
                            </div>

                            <div class="text-sm text-gray-500">
                                ${expense.date}
                            </div>

                        </div>

                        <div class="text-purple-600 text-sm mt-1">
                            ${expense.category}
                        </div>

                        <div class="text-gray-600 text-sm mt-1">
                            ${expense.description}
                        </div>

                    </div>
                `;
            });

        container.innerHTML = html;
    },

    getTotal() {

        const expenses =
            Storage.get("expenses") || [];

        return expenses.reduce(
            (sum, item) =>
                sum + Number(item.amount || 0),
            0
        );
    },

    clearAll() {

        if (!confirm("Delete all expenses?")) {
            return;
        }

        Storage.set(
            "expenses",
            []
        );

        this.load();

        Dashboard.refresh();
    }
};
