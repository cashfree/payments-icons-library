const icons = require("../dist/image-library");

describe("paymentsIcons", () => {
    it("should return object of length 3 when nick is provided", async () => {
        let data = icons.getIcon("sbi");

        expect(Object.keys(data).length).toBe(3);
    });

    it("should return object with keys which are necessary when nick is provided", async () => {
        let data = icons.getIcon("sbi");
        let keys = ["icon_name", "icon_url", "icon_version"];
        let temp = true;

        keys.map((key) => {
            if (data[key] === undefined || data[key] === null) {
                temp = false;
            }
        });

        expect(temp).toBe(true);
    });

    it("should return logos in array of objects if group of nicks are provided", async () => {
        let nicks = [
            "hdfc",
            "icici",
            "sbi",
            "rupay",
            "visa",
            "simpl",
            "freecharge",
            "gpay",
            "phonepe",
            "airtel",
            "kreditbee",
        ];

        let data = icons.getIcons(nicks);
        expect(data.length).toBe(nicks.length);
    });

    it("should return logos in array of objects if categories are provided", async () => {
        let categories = [
            "cardbanks",
            "cardschemes",
            "paylater",
            "upi",
            "wallet",
            "cardless",
        ];
        let temp = true;

        categories.map((category) => {
            let categoryIcons = icons.getModesIcons(category);
            console.log(categoryIcons)
            if (categoryIcons.length === 0) {
                temp = false;
            }
        });
        expect(temp).toBe(true);
    });
});
