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
                default: () => k,
                getIcon: () => t,
                getIcons: () => l,
                getModesIcons: () => o,
            });
        const n = {
                cardbanks: {
                    amex: ["amexccemi", "scbl"],
                    aus: [
                        "au small finance bank",
                        "aus",
                        "au small",
                        "au small finance",
                        "au",
                        "aublr",
                        "ausmallccemi",
                        "ausmall",
                        "aubl",
                    ],
                    axis: [
                        "axis bank",
                        "axis",
                        "utibr",
                        "axisc",
                        "utibc",
                        "utib",
                    ],
                    bdnc: [
                        "bandhan bank",
                        "bandhan",
                        "bdnc",
                        "bdblc",
                        "bdnr",
                        "bdblr",
                        "bdbl",
                    ],
                    bobc: [
                        "bobc",
                        "bank of baroda",
                        "barbc",
                        "bob",
                        "bobr",
                        "barbr",
                        "barb",
                    ],
                    boi: [
                        "boi",
                        "bank of india",
                        "bkidr",
                        "bkidc",
                        "boic",
                        "bkid",
                    ],
                    bom: ["bom", "bank of maharashtra", "mahbr", "mahb"],
                    canara: ["canara", "canara bank", "cnrbr", "cnrb"],
                    cbi: ["central bank of india", "cbi", "cbinr", "cbin"],
                    csb: [
                        "csb bank",
                        "csb",
                        "catholic syrian bank",
                        "csbkr",
                        "csbk",
                    ],
                    cub: [
                        "city union bank",
                        "cub",
                        "ciubr",
                        "ciubc",
                        "cubc",
                        "ciub",
                    ],
                    dbs: ["dbs", "dbs bank", "digibank", "dbssr", "dbss"],
                    deutsche: ["deutsche", "deutsche bank", "deutr", "deut"],
                    dhanlakshmi: [
                        "dhanlakshmi",
                        "dhanlakshmi bank",
                        "dlxbr",
                        "dlxbc",
                        "dhanc",
                        "dhanlaxmi",
                        "dhanlaxmi bank",
                        "dlxb",
                    ],
                    equitas: [
                        "equitas small finance bank",
                        "equitas",
                        "equitas small finance",
                        "equitas bank",
                        "esfbr",
                        "esfb",
                    ],
                    federal: ["federal bank", "federal", "fdrlr", "fdrl"],
                    hdfc: [
                        "hdfc",
                        "hdfc bank",
                        "hdfcr",
                        "hdfcc",
                        "hdfccorpnb",
                        "hdfcretailnb",
                    ],
                    icici: [
                        "icici",
                        "icici bank",
                        "icicir",
                        "icicic",
                        "icici corp nb",
                        "icic",
                    ],
                    idfc: [
                        "idfc",
                        "idfc bank",
                        "idfc first bank",
                        "idfbr",
                        "idfb",
                    ],
                    indian: ["indian", "indian bank", "idibr", "idib"],
                    indusind: [
                        "indusind",
                        "indusind bank",
                        "indbr",
                        "indus ind",
                        "indb",
                    ],
                    iob: [
                        "iob",
                        "iob bank",
                        "indian overseas bank",
                        "iobar",
                        "iobc",
                        "indian overseas",
                        "iobac",
                        "ioba",
                    ],
                    jkb: [
                        "jkb",
                        "jammu & kashmir bank",
                        "jammu and kashmir bank",
                        "j&k bank",
                        "jakar",
                        "jaka",
                    ],
                    karnatka: [
                        "karnataka",
                        "karnataka bank",
                        "karnatka",
                        "karnatka bank",
                        "karbr",
                        "karb",
                    ],
                    karur: [
                        "karur",
                        "karur bank",
                        "karur vysya bank",
                        "karur vysya",
                        "kvblr",
                        "kvbl",
                    ],
                    kotak: [
                        "kotak",
                        "kotak bank",
                        "kkbkr",
                        "kotak mahindra bank",
                        "kkbk",
                    ],
                    lvbc: [
                        "lvbc",
                        "lavbc",
                        "lvbr",
                        "lvb",
                        "lavbr",
                        "laxmi vilas bank",
                        "lavb",
                    ],
                    pnbc: [
                        "pnbc",
                        "pnb",
                        "punjab national bank",
                        "punbc",
                        "pnbr",
                        "punjab national bank",
                        "punbr",
                        "punb",
                    ],
                    rbl: [
                        "rbl",
                        "ratnakar bank",
                        "rbl bank",
                        "ratnr",
                        "ratnakar",
                        "rblc",
                        "ratnc",
                        "rtc",
                        "ratn",
                    ],
                    saraswat: ["saraswat", "saraswat bank", "srcbr", "srcb"],
                    sbi: [
                        "sbi",
                        "state bank of india",
                        "sbinr",
                        "sbic",
                        "sbinc",
                        "sbin",
                    ],
                    scb: [
                        "scb",
                        "standard chartered",
                        "standard chartered bank",
                        "scblr",
                        "sc",
                        "scbl",
                    ],
                    shivalik: ["shivalik", "shivalik bank", "smcbr", "smcb"],
                    sib: ["sib", "south indian bank", "siblr", "sibl"],
                    sur: [
                        "sur",
                        "sur bank",
                        "surat peoples cooperative bank",
                        "spcb",
                    ],
                    tamcop: [
                        "tamcop",
                        "tamcop bank",
                        "tamilnadu state cooperative bank",
                        "tamil nadu state cooperative bank",
                        "tnsc",
                    ],
                    tammerc: [
                        "tammerc",
                        "tammerc bank",
                        "tamilnad mercantile bank",
                        "tmbl",
                    ],
                    uco: [
                        "uco",
                        "uco bank",
                        "united commercial bank",
                        "ucbar",
                        "ucbac",
                        "ucc",
                        "ucba",
                    ],
                    union: [
                        "union",
                        "union bank",
                        "ubinr",
                        "ubinc",
                        "ubic",
                        "union bank of india",
                        "ubi",
                        "ubin",
                    ],
                    utk: [
                        "utk",
                        "utk bank",
                        "utkarsh small finance bank",
                        "utkarsh small finance",
                        "utksr",
                        "utks",
                    ],
                    yes: ["yes", "yes bank", "yesbc", "yesbr", "yesc", "yesb"],
                    allahabad: ["allahabad bank", "allahabad", "alla"],
                    apg: ["andhra pragathi grameena bank", "apg", "apgb"],
                    bbk: ["bank of bahrain and kuwait", "bbk", "bbkm"],
                    bcb: ["bassien catholic cooperative bank", "bcb", "bacb"],
                    bclc: ["barclays", "bclc", "barc"],
                    cpb: [
                        "capital small finance",
                        "cpb",
                        "capital small finance bank",
                        "clbl",
                    ],
                    dcb: ["dcb", "dcbc", "dcbp", "dcb bank", "dcbl"],
                    esaf: ["esaf", "esaf small finance bank", "esf", "esmf"],
                    fnc: ["fincare", "fnc", "fincare bank", "fsfb"],
                    gsb: ["gsb", "gujarat state cooperative bank", "gscb"],
                    hsb: ["hsb", "hsbc", "hsbc bank"],
                    jsb: [
                        "jsb",
                        "janata sahakari bank",
                        "janata sahakari bank pune",
                        "jsbp",
                    ],
                    kjb: ["kjb", "kalyan janata sahakari bank", "kjsb"],
                    klb: ["klb", "kalupur commercial cooperative bank", "kccb"],
                    kvg: ["kvg", "karnataka vikas grameena bank", "kvgb"],
                    mgb: ["mgb", "maharashtra gramin bank", "mahg"],
                    msb: ["msb", "mehsana urban cooperative bank", "msnu"],
                    neb: ["neb", "north east small finance bank", "nesf"],
                    nkb: ["nkb", "nkgsb", "nkgsb cooperative bank", "nkgs"],
                    nut: ["nut", "nutan nagarik sahakari bank", "nnsb"],
                    pkb: ["pkb", "karnataka gramin bank", "pkgb"],
                    som: ["som", "sbm bank", "sbm", "sbm bank india", "stcb"],
                    srb: ["srb", "suryoday small finance bank", "sury"],
                    sut: ["sut", "sutex", "sutex cooperative bank", "sutb"],
                    tbb: [
                        "tbb",
                        "thane bharat sahakari bank",
                        "thane bharat",
                        "tbsb",
                    ],
                    tjb: ["tjsb", "tjb", "tjsb sahakari bank", "tjsb bank"],
                    vijaya: ["vijaya", "vijaya bank", "vijb", "barb"],
                    vrb: [
                        "vrb",
                        "varachha",
                        "varachha cooperative bank",
                        "vara",
                    ],
                    zob: ["zob", "zoroastrian cooperative bank", "zcbl"],
                    airtel: ["airtelnb"],
                    paytm: ["paytmnb"],
                    idbi: [
                        "idbi",
                        "idbi bank",
                        "idbicorpnb",
                        "idbiretailnb",
                        "ibkl",
                    ],
                    pnsb: [
                        "pnsb",
                        "punjab and sind bank",
                        "punjab & sind bank",
                        "psib",
                    ],
                    svcb: [
                        "shamrao vithal cooperative bank",
                        "svbc",
                        "shamrao vithal bank",
                        "shamrao vitthal cooperative bank",
                        "shamrao vitthal bank",
                        "svcb",
                    ],
                    cob: ["cob", "cosmos", "cosmos bank", "cosb"],
                    jnb: ["jnb", "jana small finance bank", "jsfb"],
                    usfb: ["usfb", "ujjivan small finance bank", "ujvn"],
                    citi: ["citi", "citi bank"],
                },
                cardschemes: {
                    amex: ["amex", "american express"],
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
                    lazypay: ["lazypay", "lazy pay"],
                    olapostpaid: ["olapostpaid", "ola", "olamoney post paid"],
                    simpl: ["simpl"],
                    zestmoneypaylater: ["zestmoney", "zestmoneypaylater"],
                    mobikwik: ["mobikwikpaylater", "mobikwik"],
                    ringpaylater: ["ring", "ringpay", "ringpaylater"],
                },
                upi: {
                    bhim: ["bhim", "upi"],
                    gpay: ["gpay", "googlepay", "google pay"],
                    paytm: ["paytm"],
                    phonepe: ["phonepe"],
                    whatsapp: ["whatsapp"],
                    credpay: ["cred", "credpay", "cred pay"],
                },
                wallet: {
                    airtel: [
                        "airtel",
                        "airtelmoney",
                        "airpr",
                        "airtel money",
                        "airtel payments bank",
                    ],
                    amazon: ["amazon", "amazonpay", "amazon pay"],
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
                    ola: ["ola", "ola money"],
                    paytm: ["paytm"],
                    phonepe: ["phonepe"],
                    paypal: ["paypal"],
                    payzapp: ["payzapp"],
                    cashfree: ["cashfreepay"],
                },
                cardless: {
                    flexipay: ["flexipay"],
                    snapmint: ["snapmint"],
                    cashe: ["cashe"],
                    kreditbee: ["kreditbee"],
                    hdfc: ["hdfc"],
                    kotak: ["kotak"],
                    idfc: ["idfc"],
                    icici: ["icici"],
                    federal: ["federal"],
                    bobc: ["bob"],
                    zestmoneypaylater: ["zestmoneyv2"],
                    tvscredit: ["tvs", "tvscredit", "tvs credit"],
                },
                aggregators: {
                    cashfree: ["cashfree", "cashfreealt"],
                    paytm: ["paytm"],
                    razorpay: ["razorpay"],
                    payu: ["payu"],
                    techprocess: ["techprocess"],
                    ccavenue: ["ccavenue", "cc avenue"],
                    phonepe: ["phonepe"],
                    hdfc: ["hdfc", "hdfc upi"],
                    easebuzz: ["easebuzz"],
                    stripe: ["stripe"],
                    lyra: ["lyra", "lyraicici"],
                    atom: ["atom"],
                    plural: ["plural"],
                },
            },
            e = { sm: "32", md: "64", lg: "128", svg: "svg" },
            r = { sm: "png", md: "png", lg: "png", svg: "svg" },
            c = "https://cashfreelogo.cashfree.com/assets_images/pg",
            i = {
                aus: "nb",
                axis: "nb",
                bdnc: "nb",
                bobc: "nb",
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
                jkb: "nb",
                karnatka: "nb",
                karur: "nb",
                kotak: "nb",
                lvbc: "nb",
                pnbc: "nb",
                rbl: "nb",
                saraswat: "nb",
                sbi: "nb",
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
                kotak: "paylater",
                lazypay: "paylater",
                olapostpaid: "paylater",
                simpl: "paylater",
                zestmoneypaylater: "paylater",
                bhim: "upi",
                gpay: "upi",
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
                tvscredit: "cardless",
                cashfree: "pa",
                razorpay: "pa",
                payu: "pa",
                techprocess: "pa",
                ccavenue: "pa",
                easebuzz: "pa",
                stripe: "pa",
                lyra: "pa",
                atom: "pa",
                plural: "pa",
            };
        function s(a) {
            let b;
            return (b = ["sm", "md", "lg", "svg"].includes(a) ? a : "sm"), b;
        }
        function t(a, b) {
            let t = s(b),
                l = {
                    icon_name: "default",
                    icon_version: "1",
                    icon_url:
                        "https://cashfreelogo.cashfree.com/assets_images/pg/nb/svg/default.svg",
                };
            return a
                ? ((a = (function (a) {
                      return (
                          (a = (a = a?.toLowerCase() || "")
                              .replace(/-/g, "")
                              .replace(/\bltd\b/g, "")
                              .replace(/\blimited\b/g, "")
                              .replace(/\bthe\b/g, "")
                              .replace(/\bcoop\b/g, "cooperative")
                              .replace(/\bpersonal\b/g, "")
                              .replace(/\bretail\b/g, "")
                              .replace(/\bcorporate\b/g, "")
                              .replace(/\bnet\s*banking\b/g, "")
                              .replace(/\bnetbanking\b/g, "")
                              .replace(/\bbanking\b/g, "")
                              .replace(/\bpaylater\b/g, "")
                              .replace(/\bpay\s*later\b/g, "")
                              .replace(/\bcredit\s*card\s*emi\b/g, "")
                              .replace(/\bdebit\s*card\s*emi\b/g, "")
                              .replace(/\bcardless\s*emi\b/g, "")
                              .replace(/\bcardless\b/g, "")
                              .replace(/ +/g, " ")),
                          /^[a-z]{4}0[a-z0-9]{6}$/.test(a) &&
                              (a = a.slice(0, 4)),
                          a.trim()
                      );
                  })(a)),
                  Object.values(n).every((b) => {
                      let n = !0;
                      return (
                          Object.keys(b).every(
                              (s) =>
                                  !b[s].includes(a) ||
                                  ((l = {
                                      icon_name: s,
                                      icon_version: "1",
                                      icon_url: `${c}/${i[s]}/${e[t]}/${s}.${r[t]}`,
                                  }),
                                  (n = !1),
                                  !1)
                          ),
                          n
                      );
                  }),
                  l)
                : l;
        }
        function l(a, b) {
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
        function o(a, b) {
            let t = s(b),
                l = [];
            return (
                Object.keys(n[a]) &&
                    Object.keys(n[a]).forEach((a) => {
                        l.push({
                            icon_name: a,
                            icon_version: "1",
                            icon_url: `${c}/${i[a]}/${e[t]}/${a}.${r[t]}`,
                        });
                    }),
                l
            );
        }
        const k = { getIcon: t, getIcons: l, getModesIcons: o };
        return b;
    })()
);
