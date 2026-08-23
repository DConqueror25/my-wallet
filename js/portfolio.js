const Portfolio = {

    save() {

        const portfolio = {

            bank: Number(
                document.getElementById("bank").value || 0
            ),

            mf: Number(
                document.getElementById("mf").value || 0
            ),

            chit: Number(
                document.getElementById("chit").value || 0
            ),

            lend: Number(
                document.getElementById("lend").value || 0
            )
        };

        const success =
            Storage.set(
                "portfolio",
                portfolio
            );

        if (success) {

            if (typeof Dashboard !== "undefined") {
                Dashboard.refresh();
            }

            alert(
                "Portfolio saved successfully."
            );
        }
    },

    load() {

        const portfolio =
            Storage.get("portfolio");

        if (!portfolio) {
            return;
        }

        document.getElementById("bank").value =
            portfolio.bank || "";

        document.getElementById("mf").value =
            portfolio.mf || "";

        document.getElementById("chit").value =
            portfolio.chit || "";

        document.getElementById("lend").value =
            portfolio.lend || "";
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
