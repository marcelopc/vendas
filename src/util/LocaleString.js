export const toLocaleStringSupportsLocales = ()=>{
    var number = 0;
    try {
        number.toLocaleString("i");
    } catch(e) {
        return e.name === "RangeError";
    }
    return false;
}


export const roundOff = (number, precision) => {
    return +((+number).toFixed(precision));
};

export const replaceSeparators = (sNum, separators)=>{
    var sNumParts = sNum.split('.');

    if(separators && separators.thousands) {
        sNumParts[0] = sNumParts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + separators.thousands);
    } else if(separators && separators.hundreds) {
        sNumParts[0] = sNumParts[0].replace(/(\d)(?=(\d\d)+(?!\d))/g, "$1" + separators.hundreds);
    }

    sNum = sNumParts.join(separators.decimal);
    
    return sNum;
};

export const getLast3Digits = (sNum)=>{
    sNum = '' + roundOff(sNum, 3);
    var sNumParts = sNum.split('.');
    switch(sNumParts[0].length) {
        case 0:
            sNumParts[0] = '000';
            break;
        case 1:
            sNumParts[0] = '00' + sNumParts[0];
            break;
        case 2:
            sNumParts[0] = '0' + sNumParts[0];
            break;
    }
    sNum = sNumParts.join('.');
    return sNum;
};

export const renderFormat = (template, props)=>{
    for(let prop in props) {
        template = template.replace("{{" + prop + "}}", props[prop]);
    }

    return template;
};

export const mapMatch = function(map, locale) {
    let match = locale;
    let language = locale && locale.toLowerCase().match(/^\w+/);

    if(!map.hasOwnProperty(locale)) {
        if(map.hasOwnProperty(language)) {
            match = language;
        } else {
            match = "en";
        }
    }
    return map[match];
};

export const dotThousCommaDec = (sNum)=>{
    var separators = {
        decimal: ',',
        thousands: '.'
    };
    return replaceSeparators(sNum, separators);
};

export const commaThousDotDec = (sNum)=>{
    var separators = {
        decimal: '.',
        thousands: ','
    };
    return replaceSeparators(sNum, separators);
};

export const spaceThousCommaDec = (sNum)=>{
    var seperators = {
        decimal: ',',
        thousands: '\u00A0'
    };
    return replaceSeparators(sNum, seperators);
};

export const spaceHundredsCommaThousCommaDec = (sNum)=>{
    var hundredSeperators = {
            decimal: '.',
            hundreds: ','
        },
        thoudandSeperators = {
            decimal: '.',
            thousands: ','
        };
    sNum = +sNum;
    if(sNum >= 1000) {
        return replaceSeparators(Math.floor(sNum / 1000) + '', hundredSeperators) + ',' + getLast3Digits((sNum % 1000) + '');
    } else {
        return replaceSeparators(sNum + '', thoudandSeperators);
    }
};
export const apostrophThousDotDec = (sNum)=>{
    var seperators = {
        decimal: '.',
        thousands: '\u0027'
    };
    return replaceSeparators(sNum, seperators);
};

var transformForLocale = {
    en: commaThousDotDec,
    it: dotThousCommaDec,
    fr: spaceThousCommaDec,
    de: dotThousCommaDec,
    "pt-br": dotThousCommaDec,
    "de-DE": dotThousCommaDec,
    "de-AT": dotThousCommaDec,
    "de-CH": apostrophThousDotDec,
    "de-LI": apostrophThousDotDec,
    "de-BE": dotThousCommaDec,
    "hi-IN": spaceHundredsCommaThousCommaDec,
    "en-IN": spaceHundredsCommaThousCommaDec,
    ro: dotThousCommaDec,
    "ro-RO": dotThousCommaDec,
    hu: spaceThousCommaDec,
    "hu-HU": spaceThousCommaDec,
    "da-DK": dotThousCommaDec,
    "nb-NO": spaceThousCommaDec,
    "sv-SE": spaceThousCommaDec
};
var currencyFormatMap = {
    en: "pre",
    it: "post",
    fr: "post",
    de: "post",
    "de-DE": "post",
    "de-AT": "prespace",
    "de-CH": "prespace",
    "de-LI": "post",
    "de-BE": "post",
    ro: "post",
    "ro-RO": "post",
    hu: "post",
    "hu-HU": "post",
    "da-DK": "post",
    "nb-NO": "post",
    "sv-SE": "post"
};
var currencySymbols = {
    "afn": "؋ ",
    "ars": "$ ",
    "awg": "ƒ ",
    "aud": "$ ",
    "azn": "₼ ",
    "bsd": "$ ",
    "bbd": "$ ",
    "byr": "p. ",
    "bzd": "BZ$ ",
    "bmd": "$ ",
    "bob": "Bs. ",
    "bam": "KM ",
    "bwp": "P ",
    "bgn": "лв ",
    "brl": "R$ ",
    "bnd": "$ ",
    "khr": "៛ ",
    "cad": "$ ",
    "kyd": "$ ",
    "clp": "$ ",
    "cny": "¥ ",
    "cop": "$ ",
    "crc": "₡ ",
    "hrk": "kn ",
    "cup": "₱ ",
    "czk": "Kč ",
    "dkk": "kr. ",
    "dop": "RD$ ",
    "xcd": "$ ",
    "egp": "£ ",
    "svc": "$ ",
    "eek": "kr ",
    "eur": "€ ",
    "fkp": "£ ",
    "fjd": "$ ",
    "ghc": "¢ ",
    "gip": "£ ",
    "gtq": "Q ",
    "ggp": "£ ",
    "gyd": "$ ",
    "hnl": "L ",
    "hkd": "$ ",
    "huf": "Ft ",
    "isk": "kr ",
    "inr": "₹ ",
    "idr": "Rp ",
    "irr": "﷼ ",
    "imp": "£ ",
    "ils": "₪ ",
    "jmd": "J$ ",
    "jpy": "¥ ",
    "jep": "£ ",
    "kes": "KSh ",
    "kzt": "лв ",
    "kpw": "₩ ",
    "krw": "₩ ",
    "kgs": "лв ",
    "lak": "₭ ",
    "lvl": "Ls ",
    "lbp": "£ ",
    "lrd": "$ ",
    "ltl": "Lt ",
    "mkd": "ден ",
    "myr": "RM ",
    "mur": "₨ ",
    "mxn": "$ ",
    "mnt": "₮ ",
    "mzn": "MT ",
    "nad": "$ ",
    "npr": "₨ ",
    "ang": "ƒ ",
    "nzd": "$ ",
    "nio": "C$ ",
    "ngn": "₦ ",
    "nok": "kr ",
    "omr": "﷼ ",
    "pkr": "₨ ",
    "pab": "B/. ",
    "pyg": "Gs ",
    "pen": "S/. ",
    "php": "₱ ",
    "pln": "zł ",
    "qar": "﷼ ",
    "ron": "lei ",
    "rub": "₽ ",
    "shp": "£ ",
    "sar": "﷼ ",
    "rsd": "Дин. ",
    "scr": "₨ ",
    "sgd": "$ ",
    "sbd": "$ ",
    "sos": "S ",
    "zar": "R ",
    "lkr": "₨ ",
    "sek": "kr ",
    "chf": "CHF ",
    "srd": "$ ",
    "syp": "£ ",
    "tzs": "TSh ",
    "twd": "NT$ ",
    "thb": "฿ ",
    "ttd": "TT$ ",
    "try": " ",
    "trl": "₤ ",
    "tvd": "$ ",
    "ugx": "USh ",
    "uah": "₴ ",
    "gbp": "£ ",
    "usd": "$ ",
    "uyu": "$U ",
    "uzs": "лв ",
    "vef": "Bs ",
    "vnd": "₫ ",
    "yer": "﷼ ",
    "zwd": "Z$ "
};

var currencyFormats = {
    pre: "{{code}}{{num}}",
    post: "{{num}} {{code}}",
    prespace: "{{code}} {{num}}"
};

export const LocaleString = (value, locale, options)=>{

    if(locale && locale.length < 2)
        throw new RangeError("Invalid language tag: " + locale);

    let sNum;

    if(options && options.minimumFractionDigits !== undefined) {
        sNum = value.toFixed(options.minimumFractionDigits);
    } else {
        sNum = value.toString();
    }

    sNum = mapMatch(transformForLocale, locale)(sNum, options);

    if(options && options.currency && options.style === "currency") {
        let format = currencyFormats[mapMatch(currencyFormatMap, locale)];

        if(options.currencyDisplay === "code") {
            sNum = renderFormat(format, {
                num: sNum,
                code: options.currency.toUpperCase()
            });
        } else {
            sNum = renderFormat(format, {
                num: sNum,
                code: currencySymbols[options.currency.toLowerCase()]
            });
        }
    }
    
    return '' + sNum;
};

export default {
    LocaleString
};