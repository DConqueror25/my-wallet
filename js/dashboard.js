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
                    total +
                    Number(expense.amount || 0),
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

        this.updateDistribution(
            portfolio,
            netWorth
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
            Number(
                value || 0
            ).toLocaleString(
                "en-IN"
            );
    },

    updateDistribution(
        portfolio,
        netWorth
    ) {

        if (netWorth <= 0) {
            netWorth = 1;
        }

        const items = [
            {
                value: Number(portfolio.bank),
                percentId: "bankPercent",
                barId: "bankBar"
            },
            {
                value: Number(portfolio.mf),
                percentId: "mfPercent",
                barId: "mfBar"
            },
            {
                value: Number(portfolio.chit),
                percentId: "chitPercent",
                barId: "chitBar"
            },
            {
                value: Number(portfolio.lend),
                percentId: "lendPercent",
                barId: "lendBar"
            }
        ];

        items.forEach(item => {

            const percent =
                Math.round(
                    (item.value / netWorth) * 100
                );

            const percentElement =
                document.getElementById(
                    item.percentId
                );

            const barElement =
                document.getElementById(
                    item.barId
                );

            if (percentElement) {
                percentElement.textContent =
                    `${percent}%`;
            }

            if (barElement) {
                barElement.style.width =
                    `${percent}%`;
            }
        });
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
                total +
                Number(expense.amount || 0),
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
