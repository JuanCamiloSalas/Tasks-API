export const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Tasks API',
            version: '1.0.0',
            description: 'A simple API of a list of tasks'
        },
        servers: [
            {
                url: "http://localhost:3000"
            }
        ]
    },
    apis: ['./src/routes/*.ts']
}