import { fastify } from 'fastify'
import {
	serializerCompiler,
	validatorCompiler,
	jsonSchemaTransform,
	type ZodTypeProvider
} from 'fastify-type-provider-zod'
import fastifyCors from '@fastify/cors'
import fastifySwagger from '@fastify/swagger'
import ScalarApiRefecence from '@scalar/fastify-api-reference'
import { env } from './env/index.ts'

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.register(fastifyCors, {
	origin: true,
	methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
})

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.register(fastifySwagger, {
	openapi: {
		info: {
			title: 'Conversor de Moedas API',
			version: '1.0.0',
			description: 'API for the conversion of currencies'
		}
	},
	transform: jsonSchemaTransform
})

app.register(ScalarApiRefecence, {
	routePrefix: '/docs',
	configuration: {
		layout: 'modern',
		theme: 'default',
		hideClientButton: false,
		showSidebar: true,
		showToolbar: 'localhost',
		operationTitleSource: 'summary',
		persistAuth: false,
		telemetry: true,
		isEditable: false,
		isLoading: false,
		hideModels: false,
		documentDownloadType: 'both',
		hideTestRequestButton: false,
		hideSearch: false,
		showOperationId: false,
		hideDarkModeToggle: false,
		withDefaultFonts: true,
		defaultOpenAllTags: false,
		expandAllModelSections: false,
		expandAllResponses: false,
		orderSchemaPropertiesBy: 'alpha',
		orderRequiredPropertiesFirst: true,
		_integration: 'fastify',
		default: false,
		slug: 'api-1',
		title: 'API #1'
	}
})

app.get('/health', async (request, reply) => {
	return reply.send({ message: 'OK' })
})

app.listen({ host: '0.0.0.0', port: env.PORT }, () => {
	console.log(`Server is running! 🚀 ${env.PORT}`)
	console.log(`Docs are available at http://localhost:${env.PORT}/docs`)
})
