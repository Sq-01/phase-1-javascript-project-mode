const addCurrencyBtn = document.querySelector(".add-currency-btn");
const addCurrencyList = document.querySelector(".add-currency-list");
const currenciesList = document.querySelector(".currencies");

 const dataURL = "http://data.fixer.io/api/latest?access_key=5798bbe322be285f7e16dfbbaaed77e2";
 //const dataURL = "https://v2.api.forex/rates/latest.json?beautify=true&key=fa7b6137-36d7-478a-b1bc-aa9a2e96b940";
 //const dataURL = "https://console.fastforex.io/.json?=true&key=9481427500-660224ec37-rye2c9";
 //const dataURL = "http://app.exchangeratesapi.com/keys=c549c9835bdc80176751d6e7";

const initiallyDisplayedCurrencies = ["USD", "EUR", "GBP", "JPY", "RUB"];
let baseCurrency = "USD";
let baseCurrencyAmount;

let currencies = [{
        name: "US Dollar",
        abbreviation: "USD",
        symbol: "\u0024",
        flagURL: "https://wise.com/public-resources/assets/flags/rectangle/usd.png"
    },
    {
        name: "Euro",
        abbreviation: "EUR",
        symbol: "\u20AC",
        flagURL: "https://wise.com/public-resources/assets/flags/rectangle/eur.png"
    },
    {
        name: "Japanese Yen",
        abbreviation: "JPY",
        symbol: "\u00A5",
        flagURL: "https://wise.com/public-resources/assets/flags/rectangle/jpy.png"
    },
    {
        name: "British Pound",
        abbreviation: "GBP",
        symbol: "\u00A3",
        flagURL: "https://wise.com/public-resources/assets/flags/rectangle/gbp.png"
    },
    {
        name: "Australian Dollar",
        abbreviation: "AUD",
        symbol: "\u0024",
        flagURL: "https://wise.com/public-resources/assets/flags/rectangle/aud.png"
    },
    {
        name: "Canadian Dollar",
        abbreviation: "CAD",
        symbol: "\u0024",
        flagURL: "https://wise.com/public-resources/assets/flags/rectangle/cad.png"
    },
    {
        name: "Swiss Franc",
        abbreviation: "CHF",
        symbol: "\u0043\u0048\u0046",
        flagURL: "https://wise.com/public-resources/assets/flags/rectangle/chf.png"
    },
    {
        name: "Chinese Yuan Renminbi",
        abbreviation: "CNY",
        symbol: "\u00A5",
        flagURL: "https://wise.com/public-resources/assets/flags/rectangle/cny.png"
    },
    {
        name: "Swedish Krona",
        abbreviation: "SEK",
        symbol: "\u006B\u0072",
        flagURL: "https://wise.com/public-resources/assets/flags/rectangle/sek.png"
    },
    {
        name: "New Zealand Dollar",
        abbreviation: "NZD",
        symbol: "\u0024",
        flagURL: "https://wise.com/public-resources/assets/flags/rectangle/nzd.png"
    },
    {
        name: "Mexican Peso",
        abbreviation: "MXN",
        symbol: "\u0024",
        flagURL: "https://wise.com/public-resources/assets/flags/rectangle/mxn.png"
    },
    {
        name: "Singapore Dollar",
        abbreviation: "SGD",
        symbol: "\u0024",
        flagURL: "https://wise.com/public-resources/assets/flags/rectangle/sgd.png"
    },
    {
        name: "Hong Kong Dollar",
        abbreviation: "HKD",
        symbol: "\u0024",
        flagURL: "https://wise.com/public-resources/assets/flags/rectangle/hkd.png"
    },
    {
        name: "Norwegian Krone",
        abbreviation: "NOK",
        symbol: "\u006B\u0072",
        flagURL: "https://wise.com/public-resources/assets/flags/rectangle/nok.png"
    },
    {
        name: "South Korean Won",
        abbreviation: "KRW",
        symbol: "\u20A9",
        flagURL: "https://wise.com/public-resources/assets/flags/rectangle/krw.png"
    },
    {
        name: "Turkish Lira",
        abbreviation: "TRY",
        symbol: "\u20BA",
        flagURL: "https://wise.com/public-resources/assets/flags/rectangle/try.png"
    },
    {
        name: "Russian Ruble",
        abbreviation: "RUB",
        symbol: "\u20BD",
        flagURL: "https://wise.com/public-resources/assets/flags/rectangle/rub.png"
    },
    {
        name: "Indian Rupee",
        abbreviation: "INR",
        symbol: "\u20B9",
        flagURL: "https://wise.com/public-resources/assets/flags/rectangle/inr.png"
    },
    {
        name: "Brazilian Real",
        abbreviation: "BRL",
        symbol: "\u0052\u0024",
        flagURL: "https://wise.com/public-resources/assets/flags/rectangle/brl.png"
    },
    {
        name: "South African Rand",
        abbreviation: "ZAR",
        symbol: "\u0052",
        flagURL: "https://wise.com/public-resources/assets/flags/rectangle/zar.png"
    },
    {
        name: "Philippine Peso",
        abbreviation: "PHP",
        symbol: "\u20B1",
        flagURL: "https://wise.com/public-resources/assets/flags/rectangle/php.png"
    },
    {
        name: "Czech Koruna",
        abbreviation: "CZK",
        symbol: "\u004B\u010D",
        flagURL: "https://wise.com/public-resources/assets/flags/rectangle/czk.png"
    },
    {
        name: "Indonesian Rupiah",
        abbreviation: "IDR",
        symbol: "\u0052\u0070",
        flagURL: "https://wise.com/public-resources/assets/flags/rectangle/idr.png"
    },
    {
        name: "Malaysian Ringgit",
        abbreviation: "MYR",
        symbol: "\u0052\u004D",
        flagURL: "https://wise.com/public-resources/assets/flags/rectangle/myr.png"
    },
    {
        name: "Hungarian Forint",
        abbreviation: "HUF",
        symbol: "\u0046\u0074",
        flagURL: "https://wise.com/public-resources/assets/flags/rectangle/huf.png"
    },
    {
        name: "Icelandic Krona",
        abbreviation: "ISK",
        symbol: "\u006B\u0072",
        flagURL: "https://wise.com/public-resources/assets/flags/rectangle/isk.png"
    },
    {
        name: "Croatian Kuna",
        abbreviation: "HRK",
        symbol: "\u006B\u006E",
        flagURL: "https://wise.com/public-resources/assets/flags/rectangle/hrk.png"
    },
    {
        name: "Bulgarian Lev",
        abbreviation: "BGN",
        symbol: "\u043B\u0432",
        flagURL: "https://wise.com/public-resources/assets/flags/rectangle/bgn.png"
    },
    {
        name: "Romanian Leu",
        abbreviation: "RON",
        symbol: "\u006C\u0065\u0069",
        flagURL: "https://wise.com/public-resources/assets/flags/rectangle/ron.png"
    },
    {
        name: "Danish Krone",
        abbreviation: "DKK",
        symbol: "\u006B\u0072",
        flagURL: "https://wise.com/public-resources/assets/flags/rectangle/dkk.png"
    },
    {
        name: "Thai Baht",
        abbreviation: "THB",
        symbol: "\u0E3F",
        flagURL: "https://wise.com/public-resources/assets/flags/rectangle/thb.png"
    },
    {
        name: "Polish Zloty",
        abbreviation: "PLN",
        symbol: "\u007A\u0142",
        flagURL: "https://wise.com/public-resources/assets/flags/rectangle/pln.png"
    },
    {
        name: "Israeli Shekel",
        abbreviation: "ILS",
        symbol: "\u20AA",
        flagURL: "https://wise.com/public-resources/assets/flags/rectangle/ils.png"
    }
];

// Event Listeners

addCurrencyBtn.addEventListener("click", addCurrencyBtnClick);

function addCurrencyBtnClick(event) {
    addCurrencyBtn.classList.toggle("open");
}

addCurrencyList.addEventListener("click", addCurrencyListClick);

function addCurrencyListClick(event) {
    const clickedListItem = event.target.closest("li");
    if (!clickedListItem.classList.contains("disabled")) {
        const newCurrency = currencies.find(c => c.abbreviation === clickedListItem.getAttribute("data-currency"));
        if (newCurrency) newCurrenciesListItem(newCurrency);
    }
}

currenciesList.addEventListener("click", currenciesListClick);

function currenciesListClick(event) {
    if (event.target.classList.contains("close")) {
        const parentNode = event.target.parentNode;
        parentNode.remove();
        addCurrencyList.querySelector(`[data-currency=${parentNode.id}]`).classList.remove("disabled");
        if (parentNode.classList.contains("base-currency")) {
            const newBaseCurrencyLI = currenciesList.querySelector(".currency");
            if (newBaseCurrencyLI) {
                setNewBaseCurrency(newBaseCurrencyLI);
                baseCurrencyAmount = Number(newBaseCurrencyLI.querySelector(".input input").value);
            }
        }
    }
}

function setNewBaseCurrency(newBaseCurrencyLI) {
    newBaseCurrencyLI.classList.add("base-currency");
    baseCurrency = newBaseCurrencyLI.id;
    const baseCurrencyRate = currencies.find(currency => currency.abbreviation === baseCurrency).rate;
    currenciesList.querySelectorAll(".currency").forEach(currencyLI => {
        const currencyRate = getCurrencyRate(currencyLI.id);

        const exchangeRate = currencyLI.id === baseCurrency ? 1 : (currencyRate / baseCurrencyRate).toFixed(4);
        currencyLI.querySelector(".base-currency-rate").textContent = `1 ${baseCurrency} = ${exchangeRate} ${currencyLI.id}`;
    });
}

currenciesList.addEventListener("input", currenciesListInputChange);

/**
 * Rates in usd
 */
const rates = {
    usd: 1,
    jpy: 111.04,
    gbp: 0.785,
    cny: 6.7756,
    rub: 66.9615,
    euro: 0.8875
}

/**
 * Return the amount in USD of a given currency
 * 
 * @param {string} curr currency to find USD rate for
 * @param {float} value amount
 */
function getUsdRate(curr) {
    if (Object(rates).hasOwnProperty(curr)) {
        return rates[curr]
    }

    return 0
}

/**
 * Return the currency rate of the given currency abbreviation in base currency
 * @param {string} curr currency abbreviation
 */
function getCurrencyRate(curr) {
    const baseCurrencyEntry = currencies.find(currency => currency.abbreviation === curr);
    let baseCurrencyRate = 0;

    /**
     * :TODO - remove condition when API works
     */
    if (Object(baseCurrencyEntry).hasOwnProperty('rate')) {
        baseCurrencyRate = baseCurrencyEntry.rate
    } else {
        // find rate in rates 
        baseCurrencyRate = getUsdRate(curr.toLowerCase())
    }

    return baseCurrencyRate
}



function currenciesListInputChange(event) {
    const currencyValue = parseFloat(event.target.value)

    const isNewBaseCurrency = event.target.closest("li").id !== baseCurrency;

    if (isNewBaseCurrency) {
        // baseCurrency initialized as undefined, include this condition
        if (baseCurrency) {
            currenciesList.querySelector(`#${baseCurrency}`).classList.remove("base-currency");
            setNewBaseCurrency(event.target.closest("li"));
        }
    }

    // get amount
    const newBaseCurrencyAmount = isNaN(currencyValue) ? 0 : Number(currencyValue);

    if (baseCurrencyAmount !== newBaseCurrencyAmount || isNewBaseCurrency) {
        baseCurrencyAmount = newBaseCurrencyAmount;

        let baseCurrencyRate = getCurrencyRate(baseCurrency);

        currenciesList.querySelectorAll(".currency").forEach(currencyLI => {

            if (currencyLI.id !== baseCurrency) {
                const curr = currencyLI.id;
                const currencyRate = getCurrencyRate(curr)

                const exchangeRate = curr === baseCurrency ? 1 : (currencyRate / baseCurrencyRate).toFixed(4);

                currencyLI.querySelector(".input input").value = exchangeRate * baseCurrencyAmount !== 0 ? (exchangeRate * baseCurrencyAmount).toFixed(4) : "";
            }
        });
    }
}

currenciesList.addEventListener("focusout", currenciesListFocusOut);

function currenciesListFocusOut(event) {
    const inputValue = event.target.value;
    if (isNaN(inputValue) || Number(inputValue) === 0) event.target.value = "";
    else event.target.value = Number(inputValue).toFixed(4);
}

currenciesList.addEventListener("keydown", currenciesListKeyDown);

function currenciesListKeyDown(event) {
    if (event.key === "Enter") event.target.blur();
}

// Auxiliary Functions

function populateAddCurrencyList() {
    for (let i = 0; i < currencies.length; i++) {
        addCurrencyList.insertAdjacentHTML(
            "beforeend",
            `<li data-currency=${currencies[i].abbreviation}>
        <img src=${currencies[i].flagURL} class="flag"><span>${currencies[i].abbreviation} - ${currencies[i].name}</span>
      </li>`
        );
    }
}

function populateCurrenciesList() {
    for (let i = 0; i < initiallyDisplayedCurrencies.length; i++) {
        const currency = currencies.find(c => c.abbreviation === initiallyDisplayedCurrencies[i]);
        if (currency) newCurrenciesListItem(currency);
    }
}

function newCurrenciesListItem(currency) {
    if (currenciesList.childElementCount === 0) {
        baseCurrency = currency.abbreviation;
        baseCurrencyAmount = 0;
    }
    addCurrencyList.querySelector(`[data-currency=${currency.abbreviation}]`).classList.add("disabled");

    const baseCurrencyRate = getCurrencyRate(baseCurrency);

    const exchangeRate = currency.abbreviation === baseCurrency ? 1 : (currency.rate / baseCurrencyRate).toFixed(4);
    const inputValue = baseCurrencyAmount ? (baseCurrencyAmount * exchangeRate).toFixed(4) : "";

    currenciesList.insertAdjacentHTML(
        "beforeend",
        `<li class="currency ${currency.abbreviation===baseCurrency ? "base-currency" : ""}" id=${currency.abbreviation}>
      <img src=${currency.flagURL} class="flag">
      <div class="info">
        <p class="input"><span class="currency-symbol">${currency.symbol}</span><input placeholder="0.0000" value=${inputValue}></p>
        <p class="currency-name">${currency.abbreviation} - ${currency.name}</p>
        <p class="base-currency-rate">1 ${baseCurrency} = ${exchangeRate} ${currency.abbreviation}</p>
      </div>
      <span class="close">&times;</span>
    </li>`
    );
}

fetch(dataURL)
    .then(res => res.json())
    .then(data => {
        console.log(data)

        document.querySelector(".date").textContent = data.date;
        data.rates["EUR"] = 1;
        currencies = currencies.filter(currency => data.rates[currency.abbreviation]);
        currencies.forEach(currency => currency.rate = data.rates[currency.abbreviation]);
        populateAddCurrencyList();
        populateCurrenciesList();
    })
    .catch(err => console.log(err));