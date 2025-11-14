import { FastifyPluginCallbackZod } from 'fastify-type-provider-zod'
import z from 'zod'

type CurrencyType = {
	name: string
	acronym: string
	symbol: string
	countryFlagImageUrl: string
}

const commonCurrencies: CurrencyType[] = [
	{
		name: 'Dólar Americano',
		acronym: 'USD',
		symbol: '$',
		countryFlagImageUrl: 'https://flagcdn.com/us.svg'
	},
	{
		name: 'Euro',
		acronym: 'EUR',
		symbol: '€',
		countryFlagImageUrl: 'https://flagcdn.com/eu.svg'
	},
	{
		name: 'Real Brasileiro',
		acronym: 'BRL',
		symbol: 'R$',
		countryFlagImageUrl: 'https://flagcdn.com/br.svg'
	},
	{
		name: 'Libra Esterlina',
		acronym: 'GBP',
		symbol: '£',
		countryFlagImageUrl: 'https://flagcdn.com/gb.svg'
	},
	{
		name: 'Iene Japonês',
		acronym: 'JPY',
		symbol: '¥',
		countryFlagImageUrl: 'https://flagcdn.com/jp.svg'
	},
	{
		name: 'Yuan Chinês',
		acronym: 'CNY',
		symbol: '¥',
		countryFlagImageUrl: 'https://flagcdn.com/cn.svg'
	},
	{
		name: 'Dólar Canadense',
		acronym: 'CAD',
		symbol: 'C$',
		countryFlagImageUrl: 'https://flagcdn.com/ca.svg'
	},
	{
		name: 'Dólar Australiano',
		acronym: 'AUD',
		symbol: 'A$',
		countryFlagImageUrl: 'https://flagcdn.com/au.svg'
	},
	{
		name: 'Franco Suíço',
		acronym: 'CHF',
		symbol: 'Fr',
		countryFlagImageUrl: 'https://flagcdn.com/ch.svg'
	},
	{
		name: 'Rúpia Indiana',
		acronym: 'INR',
		symbol: '₹',
		countryFlagImageUrl: 'https://flagcdn.com/in.svg'
	}
]

interface CurrencyTypesResult {
	values: CurrencyType[]
}

export const getCurrencyType: FastifyPluginCallbackZod = app => {
	app.get(
		'/currency-type',
		{
			schema: {
				response: {
					200: z.object({
						values: z.array(
							z.object({
								name: z.string(),
								acronym: z.string(),
								symbol: z.string(),
								countryFlagImageUrl: z.string()
							})
						)
					})
				}
			}
		},
		async (request, reply): Promise<CurrencyTypesResult> => {
			return reply.send({ values: commonCurrencies })
		}
	)
}
