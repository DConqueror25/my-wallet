const Portfolio = {

    save() {

        const portfolio = {

            bank: Number(
                document.getElementById("bank")?.value || 0
            ),

            mf: Number(
                document.getElementById("mf")?.value || 0
            ),

            chit: Number(
                document.getElementById("chit")?.value || 0
            ),

            lend: Number(
                document.getElementById("lend")?.value || 0
            )

        };

        const success =
            Storage.set(
                "portfolio",
                portfolio
            );

        if (success) {

            this.updateDisplay();

            if (
                typeof Dashboard !==
                "undefined"
            ) {
                Dashboard.refresh();
            }

            alert(
                "Portfolio saved successfully."
            );
        }
    },

    load() {

        const portfolio =
            Storage.get("portfolio") || {
                bank: 0,
                mf: 0,
                chit: 0,
                lend: 0
            };

        const bank =
            document.getElementById("bank");

        const mf =
            document.getElementById("mf");

        const chit =
            document.getElementById("chit");

        const lend =
            document.getElementById("lend");

        if (bank) {
            bank.value =
                portfolio.bank || "";
        }

        if (mf) {
            mf.value =
                portfolio.mf || "";
        }

        if (chit) {
            chit.value =
                portfolio.chit || "";
        }

        if (lend) {
            lend.value =
                portfolio.lend || "";
        }

        this.updateDisplay();
    },

    updateDisplay() {

        const portfolio =
            Storage.get("portfolio") || {
                bank: 0,
                mf: 0,
                chit: 0,
                lend: 0
            };

        const format = value =>
            "₹" +
            Number(
                value || 0
            ).toLocaleString(
                "en-IN"
            );

        const total =
            Number(portfolio.bank) +
            Number(portfolio.mf) +
            Number(portfolio.chit) +
            Number(portfolio.lend);

        const bankDisplay =
            document.getElementById(
                "portfolioBankDisplay"
            );

        const mfDisplay =
            document.getElementById(
                "portfolioMfDisplay"
            );

        const chitDisplay =
            document.getElementById(
                "portfolioChitDisplay"
            );

        const lendDisplay =
            document.getElementById(
                "portfolioLendDisplay"
            );

        const totalDisplay =
            document.getElementById(
                "portfolioTotalDisplay"
            );

        if (bankDisplay) {
            bankDisplay.textContent =
                format(portfolio.bank);
        }

        if (mfDisplay) {
            mfDisplay.textContent =
                format(portfolio.mf);
        }

        if (chitDisplay) {
            chitDisplay.textContent =
                format(portfolio.chit);
        }

        if (lendDisplay) {
            lendDisplay.textContent =
                format(portfolio.lend);
        }

        if (totalDisplay) {
            totalDisplay.textContent =
                format(total);
        }
    },

    getTotal() {

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

    getData() {

        return (
            Storage.get("portfolio") || {
                bank: 0,
                mf: 0,
                chit: 0,
                lend: 0
            }
        );
    }

};
