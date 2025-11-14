import { FastifyPluginCallbackZod } from 'fastify-type-provider-zod'
import z from 'zod'
import { conversionRates } from '../../model/conversion-map.ts'

export const getExchangeRate: FastifyPluginCallbackZod = app => {
	app.get(
		'/exchange_rate/:from/:to',
		{
			schema: {
				params: z.object({
					from: z.string(),
					to: z.string()
				}),
				response: {
					200: z.object({
						from: z.string(),
						to: z.string(),
						exchange_rate: z.number()
					})
				}
			}
		},
		async (request, reply) => {
			const { from, to } = request.params

			return
		}
	)
}
