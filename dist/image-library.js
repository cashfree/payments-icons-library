!(function (a, b) {
    "object" == typeof exports && "object" == typeof module
        ? (module.exports = b())
        : "function" == typeof define && define.amd
        ? define([], b)
        : "object" == typeof exports
        ? (exports.paymentsIcons = b())
        : (a.paymentsIcons = b());
})(this, () =>
    (() => {
        "use strict";
        var a = {
                d: (b, n) => {
                    for (var e in n)
                        a.o(n, e) &&
                            !a.o(b, e) &&
                            Object.defineProperty(b, e, {
                                enumerable: !0,
                                get: n[e],
                            });
                },
                o: (a, b) => Object.prototype.hasOwnProperty.call(a, b),
                r: (a) => {
                    "undefined" != typeof Symbol &&
                        Symbol.toStringTag &&
                        Object.defineProperty(a, Symbol.toStringTag, {
                            value: "Module",
                        }),
                        Object.defineProperty(a, "__esModule", { value: !0 });
                },
            },
            b = {};
        a.r(b),
            a.d(b, {
                default: () => l,
                getIcon: () => t,
                getIcons: () => o,
                getModesIcons: () => k,
            });
        const n = {
                cardbanks: {
                    amex: ["amexccemi"],
                    aus: [
                        "au small finance bank",
                        "aus",
                        "au small finance bank limited",
                        "au small",
                        "au small finance",
                        "au",
                        "aublr",
                        "ausmallccemi",
                    ],
                    axis: ["axis bank", "axis", "utibr"],
                    axisc: ["axisc", "axis corporate", "utibc"],
                    bdnc: [
                        "bandhan bank",
                        "bandhan",
                        "bdnc",
                        "bandhan corporate",
                        "bdblc",
                        "bandhan bank - corporate",
                    ],
                    bdnr: [
                        "bdnr",
                        "bandhan retail",
                        "bdblr",
                        "bandhan bank - retail banking",
                    ],
                    bobc: [
                        "bobc",
                        "bank of baroda",
                        "barbc",
                        "bank of baroda - corporate",
                        "bob",
                    ],
                    bobr: ["bobr", "barbr", "bank of baroda - retail banking"],
                    boi: ["boi", "bank of india", "bkidr", "bkidc", "boic"],
                    bom: ["bom", "bank of maharashtra", "mahbr"],
                    canara: ["canara", "canara bank", "cnrbr"],
                    cbi: ["central bank of india", "cbi", "cbinr"],
                    csb: [
                        "csb bank",
                        "csb",
                        "catholic syrian bank limited",
                        "catholic syrian bank",
                        "csbkr",
                    ],
                    cub: ["city union bank", "cub", "ciubr", "ciubc", "cubc"],
                    dbs: ["dbs", "dbs bank", "digibank", "dbssr"],
                    deutsche: ["deutsche", "deutsche bank", "deutr"],
                    dhanlakshmi: [
                        "dhanlakshmi",
                        "dhanlakshmi bank",
                        "dlxbr",
                        "dlxbc",
                        "dhanc",
                    ],
                    equitas: [
                        "equitas small finance bank",
                        "equitas",
                        "equitas small finance",
                        "equitas bank",
                        "esfbr",
                    ],
                    federal: ["federal bank", "federal", "fdrlr"],
                    hdfc: [
                        "hdfc",
                        "hdfc bank",
                        "hdfcr",
                        "hdfcc",
                        "hdfc bank limited",
                    ],
                    icici: ["icici", "icici bank", "icicir", "icicic"],
                    idfc: ["idfc", "idfc bank", "idfc first bank", "idfbr"],
                    indian: ["indian", "indian bank", "idibr"],
                    indusind: ["indusind", "indusind bank", "indbr"],
                    iob: [
                        "iob",
                        "iob bank",
                        "indian overseas bank",
                        "indian overseas bank",
                        "iobar",
                    ],
                    iobc: [
                        "iobc",
                        "iob corporate",
                        "indian overseas corporate",
                        "indian overseas bank corporate",
                        "iobac",
                    ],
                    jkb: [
                        "jkb",
                        "jammu & kashmir bank",
                        "jammu and kashmir bank",
                        "j&k bank",
                        "jakar",
                    ],
                    karnatka: [
                        "karnataka",
                        "karnataka bank",
                        "karnatka",
                        "karnatka bank",
                        "karbr",
                    ],
                    karur: [
                        "karur",
                        "karur bank",
                        "karur vysya bank",
                        "karur vysya",
                        "kvblr",
                    ],
                    kotak: [
                        "kotak",
                        "kotak bank",
                        "kkbkr",
                        "kotak mahindra bank",
                    ],
                    lvbc: ["lvbc", "lvb corporate", "lavbc"],
                    lvbr: ["lvbr", "lvb retail", "lavbr"],
                    pnbc: [
                        "pnbc",
                        "punjab national bank corporate",
                        "pnb",
                        "punjab national bank",
                        "punbc",
                        "punjab national bank - corporate",
                    ],
                    pnbr: [
                        "pnbr",
                        "punjab national bank retail",
                        "punbr",
                        "punjab national bank - retail banking",
                    ],
                    rbl: ["rbl", "ratnakar bank", "rbl bank", "ratnr"],
                    rblc: ["rbl corporate", "rblc", "ratnc", "rtc"],
                    saraswat: ["saraswat", "saraswat bank", "srcbr"],
                    sbi: ["sbi", "state bank of india", "sbinr"],
                    sbic: [
                        "sbic",
                        "sbi corporate",
                        "state bank of india corporate",
                        "sbinc",
                    ],
                    scb: [
                        "scb",
                        "standard chartered",
                        "standard chartered bank",
                        "scblr",
                        "sc",
                    ],
                    shivalik: ["shivalik", "shivalik bank", "smcbr"],
                    sib: ["sib", "south indian bank", "siblr"],
                    sur: ["sur", "sur bank", "surat peoples cooperative bank"],
                    tamcop: ["tamcop", "tamcop bank"],
                    tammerc: ["tammerc", "tammerc bank"],
                    uco: [
                        "uco",
                        "uco bank",
                        "united commercial bank",
                        "ucbar",
                        "ucbac",
                        "ucc",
                    ],
                    union: ["union", "union bank", "ubinr", "ubinc", "ubic"],
                    utk: [
                        "utk",
                        "utk bank",
                        "utkarsh small finance bank",
                        "utkarsh small finance",
                        "utksr",
                    ],
                    yes: ["yes", "yes bank", "yesbc", "yesbr", "yesc"],
                    allahabad: ["allahabad bank", "allahabad"],
                    apg: ["andhra pragathi grameena", "apg"],
                    bbk: ["bank of bahrain and kuwait", "bbk"],
                    bcb: ["bassien catholic coop", "bcb"],
                    bclc: ["barclays", "barclays corporate", "bclc"],
                    cpb: ["capital small finance", "cpb"],
                    dcb: ["dcb", "dcbc", "dcbp", "dcb bank"],
                    esaf: ["esaf", "esaf small finance", "esf"],
                    fnc: ["fincare", "fnc"],
                    gsb: ["gsb", "gujarat state cooperative bank"],
                    hsb: ["hsb", "hsbc", "hsbc bank"],
                    jsb: ["jsb", "janata sahakari bank"],
                    kjb: ["kjb", "kalyan janata sahakari bank"],
                    klb: ["klb", "kalapur commercial cooperative bank"],
                    kvg: ["kvg", "karnataka vikas grameena bank"],
                    mgb: ["mgb", "maharashtra gramin bank"],
                    msb: ["msb", "mehsana urban cooperative bank"],
                    neb: ["neb", "north east small finance bank"],
                    nkb: ["nkb", "nkgsb", "nkgsb cooperative bank"],
                    nut: ["nut", "nuthan nagarik sahakari bank"],
                    pkb: ["pkb", "karnataka gramin bank"],
                    som: ["som", "sbm bank"],
                    srb: ["srb", "suryodaya small finance bank"],
                    sut: ["sut", "sutex", "sutex cooperative bank"],
                    tbb: ["tbb", "thane bharat sahakari bank", "thane bharat"],
                    tjb: ["tjsb", "tjb", "tjsb sahakari bank"],
                    vijaya: ["vijaya", "vijaya bank"],
                    vrb: ["vrb", "varachha", "varachha cooperative bank"],
                    zob: ["zob", "zoroastrian cooperative bank"],
                    airtel: ["airtelnb"],
                    paytm: ["paytmnb"],
                    idbi: ["idbi", "idbi bank", "idbicorpnb"],
                    pnsb: ["pnsb", "punjab and sind bank"],
                    svcb: ["svcb", "shamrao vittal cooperative bank", "svbc"],
                    cob: ["cob", "cosmos", "cosmos bank"],
                    jnb: ["jnb", "jana small finance bank"],
                    usfb: ["usfb", "ujjivan small finance bank"],
                    citi: ["citi", "citi bank"],
                },
                cardschemes: {
                    amex: ["amex"],
                    diners: ["diners"],
                    discover: ["discover"],
                    jcb: ["jcb"],
                    maestro: ["maestro"],
                    mastercard: ["mastercard"],
                    rupay: ["rupay"],
                    visa: ["visa"],
                },
                paylater: {
                    epaylater: ["epaylater"],
                    freecharge: ["freecharge", "freechargepaylater"],
                    hdfc: ["hdfc", "hdfcpaylater"],
                    kotak: ["kotak", "kotakpaylater"],
                    lazypay: ["lazypay"],
                    olapostpaid: ["olapostpaid"],
                    simpl: ["simpl"],
                    zestmoneypaylater: ["zestmoney", "zestmoneypaylater"],
                    mobikwik: ["mobikwikpaylater"],
                    ringpaylater: ["ringpay", "ringpaylater"],
                },
                upi: {
                    bhim: ["bhim", "upi"],
                    gpay: ["gpay", "googlepay"],
                    paytm: ["paytm"],
                    phonepe: ["phonepe"],
                    whatsapp: ["whatsapp"],
                    credpay: ["cred", "credpay"],
                },
                wallet: {
                    airtel: [
                        "airtel",
                        "airtelmoney",
                        "airpr",
                        "airtel money",
                        "airtel payments bank",
                    ],
                    amazon: ["amazon", "amazonpay"],
                    freecharge: ["freecharge"],
                    jio: [
                        "jio",
                        "jiomoney",
                        "jiopr",
                        "reliance jio money",
                        "jio payments bank",
                        "jpb",
                    ],
                    mobikwik: ["mobikwik"],
                    ola: ["ola"],
                    paytm: ["paytm"],
                    phonepe: ["phonepe"],
                    paypal: ["paypal"],
                    payzapp: ["payzapp"],
                },
                cardless: {
                    flexipay: ["flexipay"],
                    snapmint: ["snapmint"],
                    cashe: ["cashe"],
                    kreditbee: ["kreditbee"],
                },
            },
            e = { sm: "32", md: "64", lg: "128", svg: "svg" },
            r = { sm: "png", md: "png", lg: "png", svg: "svg" },
            i = "https://cashfreelogo.cashfree.com/assets_images/pg",
            c = {
                aus: "nb",
                axis: "nb",
                axisc: "nb",
                bdnc: "nb",
                bdnr: "nb",
                bobc: "nb",
                bobr: "nb",
                boi: "nb",
                bom: "nb",
                canara: "nb",
                cbi: "nb",
                csb: "nb",
                cub: "nb",
                dbs: "nb",
                deutsche: "nb",
                dhanlakshmi: "nb",
                equitas: "nb",
                federal: "nb",
                hdfc: "nb",
                icici: "nb",
                idfc: "nb",
                indian: "nb",
                indusind: "nb",
                iob: "nb",
                iobc: "nb",
                jkb: "nb",
                karnatka: "nb",
                karur: "nb",
                kotak: "nb",
                lvbc: "nb",
                lvbr: "nb",
                pnbc: "nb",
                pnbr: "nb",
                rbl: "nb",
                rblc: "nb",
                saraswat: "nb",
                sbi: "nb",
                sbic: "nb",
                scb: "nb",
                shivalik: "nb",
                sib: "nb",
                sur: "nb",
                tamcop: "nb",
                tammerc: "nb",
                uco: "nb",
                union: "nb",
                utk: "nb",
                yes: "nb",
                amex: "card",
                diners: "card",
                discover: "card",
                jcb: "card",
                maestro: "card",
                mastercard: "card",
                paypal: "card",
                rupay: "card",
                visa: "card",
                epaylater: "paylater",
                freecharge: "paylater",
                hdfc: "paylater",
                kotak: "paylater",
                lazypay: "paylater",
                olapostpaid: "paylater",
                simpl: "paylater",
                zestmoneypaylater: "paylater",
                bhim: "upi",
                gpay: "upi",
                paytm: "upi",
                phonepe: "upi",
                credpay: "upi",
                whatsapp: "upi",
                airtel: "wallet",
                amazon: "wallet",
                freecharge: "wallet",
                jio: "wallet",
                mobikwik: "wallet",
                ola: "wallet",
                paytm: "wallet",
                phonepe: "wallet",
                flexipay: "cardless",
                allahabad: "nb",
                apg: "nb",
                bbk: "nb",
                bcb: "nb",
                bclc: "nb",
                cpb: "nb",
                dcb: "nb",
                esaf: "nb",
                fnc: "nb",
                gsb: "nb",
                hsb: "nb",
                jsb: "nb",
                kjb: "nb",
                klb: "nb",
                kvg: "nb",
                mgb: "nb",
                msb: "nb",
                neb: "nb",
                nkb: "nb",
                nut: "nb",
                pkb: "nb",
                som: "nb",
                srb: "nb",
                sut: "nb",
                tbb: "nb",
                tjb: "nb",
                vijaya: "nb",
                vrb: "nb",
                zob: "nb",
                idbi: "nb",
                pnsb: "nb",
                svcb: "nb",
                cob: "nb",
                jnb: "nb",
                usfb: "nb",
                citi: "nb",
                payzapp: "wallet",
                ringpaylater: "paylater",
                snapmint: "cardless",
                cashe: "cardless",
                kreditbee: "cardless",
            };
        function s(a) {
            let b;
            return (b = ["sm", "md", "lg", "svg"].includes(a) ? a : "sm"), b;
        }
        function t(a, b) {
            let t = s(b),
                o = {
                    icon_name: "default",
                    icon_version: "1",
                    icon_url:
                        "https://cashfreelogo.cashfree.com/assets_images/pg/nb/svg/default.svg",
                };
            return a
                ? ((a = a.toLowerCase()),
                  Object.values(n).every((b) => {
                      let n = !0;
                      return (
                          Object.keys(b).every(
                              (s) =>
                                  !b[s].includes(a) ||
                                  ((o = {
                                      icon_name: s,
                                      icon_version: "1",
                                      icon_url: `${i}/${c[s]}/${e[t]}/${s}.${r[t]}`,
                                  }),
                                  (n = !1),
                                  !1)
                          ),
                          n
                      );
                  }),
                  o)
                : o;
        }
        function o(a, b) {
            let n = "";
            n = ["sm", "md", "lg", "svg"].includes(b) ? b : "sm";
            let e = [];
            return (
                a.forEach((a) => {
                    e.push(t(a, n));
                }),
                e
            );
        }
        function k(a, b) {
            let t = s(b),
                o = [];
            return (
                Object.keys(n[a]) &&
                    Object.keys(n[a]).forEach((a) => {
                        o.push({
                            icon_name: a,
                            icon_version: "1",
                            icon_url: `${i}/${c[a]}/${e[t]}/${a}.${r[t]}`,
                        });
                    }),
                o
            );
        }
        const l = { getIcon: t, getIcons: o, getModesIcons: k };
        return b;
    })()
);
