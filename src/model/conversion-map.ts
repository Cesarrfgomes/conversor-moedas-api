type ConversionRates = {
	[fromCurrency: string]: {
		[toCurrency: string]: number
	}
}

export const conversionRates: ConversionRates = {
	USD: {
		USD: 1,
		EUR: 0.92,
		BRL: 5.75,
		GBP: 0.79,
		JPY: 149.5,
		CNY: 7.24,
		AUD: 1.53,
		CHF: 0.88,
		INR: 83.25
	},
	EUR: {
		USD: 1.09,
		EUR: 1,
		BRL: 6.26,
		GBP: 0.86,
		JPY: 162.75,
		CNY: 7.88,
		AUD: 1.67,
		CHF: 0.96,
		INR: 90.65
	},
	BRL: {
		USD: 0.174,
		EUR: 0.16,
		BRL: 1,
		GBP: 0.137,
		JPY: 26.0,
		CNY: 1.26,
		AUD: 0.266,
		CHF: 0.153,
		INR: 14.48
	},
	GBP: {
		USD: 1.27,
		EUR: 1.16,
		BRL: 7.3,
		GBP: 1,
		JPY: 189.87,
		CNY: 9.2,
		AUD: 1.94,
		CHF: 1.12,
		INR: 105.73
	},
	JPY: {
		USD: 0.0067,
		EUR: 0.0061,
		BRL: 0.0385,
		GBP: 0.0053,
		JPY: 1,
		CNY: 0.0484,
		AUD: 0.0102,
		CHF: 0.0059,
		INR: 0.557
	},
	CNY: {
		USD: 0.138,
		EUR: 0.127,
		BRL: 0.794,
		GBP: 0.109,
		JPY: 20.66,
		CNY: 1,
		AUD: 0.211,
		CHF: 0.122,
		INR: 11.5
	},
	AUD: {
		USD: 0.654,
		EUR: 0.599,
		BRL: 3.76,
		GBP: 0.515,
		JPY: 97.71,
		CNY: 4.73,
		AUD: 1,
		CHF: 0.575,
		INR: 54.44
	},
	CHF: {
		USD: 1.14,
		EUR: 1.04,
		BRL: 6.54,
		GBP: 0.89,
		JPY: 169.89,
		CNY: 8.23,
		AUD: 1.74,
		CHF: 1,
		INR: 94.66
	},
	INR: {
		USD: 0.012,
		EUR: 0.011,
		BRL: 0.069,
		GBP: 0.0095,
		JPY: 1.795,
		CNY: 0.087,
		AUD: 0.0184,
		CHF: 0.0106,
		INR: 1
	}
}
