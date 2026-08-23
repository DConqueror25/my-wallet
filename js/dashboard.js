const Dashboard = {

    refresh() {

        const portfolio =
            Storage.get("portfolio") || {
                bank: 0,
                mf: 0,
                chit: 0,
                lend: 0
            };

        const expenses =
            Storage.get("expenses") || [];

        const totalExpenses =
            expenses.reduce(
                (total, expense) =>
                    total + Number(expense.amount || 0),
                0
            );

        const netWorth =
            Number(portfolio.bank) +
            Number(portfolio.mf) +
            Number(portfolio.chit) +
            Number(portfolio.lend);

        this.updateElement(
            "netWorth",
            netWorth
        );

        this.updateElement(
            "bankValue",
            portfolio.bank
        );

        this.updateElement(
            "mfValue",
            portfolio.mf
        );

        this.updateElement(
            "chitValue",
            portfolio.chit
        );

        this.updateElement(
            "lendValue",
            portfolio.lend
        );

        this.updateElement(
            "expenseValue",
            totalExpenses
        );
    },

    updateElement(id, value) {

        const element =
            document.getElementById(id);

        if (!element) {
            return;
        }

        element.textContent =
            "₹" +
            Number(value || 0).toLocaleString(
                "en-IN"
            );
    },

    getNetWorth() {

        const portfolio =
            Storage.get("portfolio") || {
                bank: 0,
                mf: 0,
                chit: 0,
                lend: 0
            };

        return (
            Number(portfolio.bank) +
            Number(portfolio.mf) +
            Number(portfolio.chit) +
            Number(portfolio.lend)
        );
    },

    getTotalExpenses() {

        const expenses =
            Storage.get("expenses") || [];

        return expenses.reduce(
            (total, expense) =>
                total + Number(expense.amount || 0),
            0
        );
    },

    getSummary() {

        const portfolio =
            Storage.get("portfolio") || {
                bank: 0,
                mf: 0,
                chit: 0,
                lend: 0
            };

        return {

            bank: Number(portfolio.bank),

            mf: Number(portfolio.mf),

            chit: Number(portfolio.chit),

            lend: Number(portfolio.lend),

            expenses: this.getTotalExpenses(),

            netWorth: this.getNetWorth()
        };
    }
};
