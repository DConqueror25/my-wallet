const Portfolio = {

    save() {

        const data = {

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

        Storage.set(
            "portfolio",
            data
        );

        alert("Portfolio Saved");
    },

    load() {

        const data =
            Storage.get("portfolio") || {};

        document.getElementById("bank").value =
            data.bank || "";

        document.getElementById("mf").value =
            data.mf || "";

        document.getElementById("chit").value =
            data.chit || "";

        document.getElementById("lend").value =
            data.lend || "";
    }
};
