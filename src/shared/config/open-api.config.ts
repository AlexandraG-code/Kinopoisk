import api from 'swagger-typescript-api'

api.generateApi({
	name: 'api.ts', // Имя основного файла
	output: 'src/shared/types', // Папка для сгенерированных файлов
	url: 'http://localhost:5001/api/swagger/v1/swagger.json', // Путь к вашему swagger.json
	httpClientType: 'axios', // Выбор HTTP клиента (axios, fetch и т.д.)
	generateClient: true, // Генерация клиентского кода
	generateRouteTypes: true, // Генерация типов маршрутов
	generateResponses: true // Генерация типов ответов
	// generateRequestTypes: true, // Генерация типов запросов
	// split: true, // Разделение на файлы
})

api.generateTemplates({
	cleanOutput: false,
	output: 'src/shared/types',
	httpClientType: 'axios',
	modular: true,
	silent: true
})
