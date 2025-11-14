import { FastifyPluginCallbackZod } from 'fastify-type-provider-zod'
import z from 'zod'

type CurrencyType = {
	name: string
	acronym: string
	symbol: string
	countryFlagImageUrl: string
}

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
						message: z.string()
					})
				}
			}
		},
		async (request, reply) => {}
	)
}
