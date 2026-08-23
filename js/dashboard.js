const Dashboard = {

    refresh() {

        const portfolio =
            Storage.get("portfolio") || {
                bank: 0,
                mf: 0,
                chit: 0,
                lend: 0
            };

        const netWorth =
            Number(portfolio.bank) +
            Number(portfolio.mf) +
            Number(portfolio.chit) +
            Number(portfolio.lend);

        document.getElementById("netWorth").innerText =
            "₹" + netWorth.toLocaleString();

        document.getElementById("bankValue").innerText =
            "₹" + Number(portfolio.bank).toLocaleString();

        document.getElementById("mfValue").innerText =
            "₹" + Number(portfolio.mf).toLocaleString();

        document.getElementById("chitValue").innerText =
            "₹" + Number(portfolio.chit).toLocaleString();

        document.getElementById("lendValue").innerText =
            "₹" + Number(portfolio.lend).toLocaleString();
    }
};
