const createSchema = {
  schema: {
    body: {
      type: 'object',
      required: ['user'],
      properties: {
        user: {
          type: 'object',
          required: [
            'email',
            'name',
            'mobile_no',
            'gender'
          ],
          properties: {
            email: {
              type: 'string'
            },
            name: { type: 'string' },
            mobile_no: { type: 'string' },
            gender: { type: 'string' },
          }
        }
      }
    },
    response: {
      200: {
        description: 'Successful response',
        type: 'object',
        properties: {
          properties: {
            id: { type: 'number' },
            email: {
              type: 'string'
            },
            name: { type: 'string' },
            mobile_no: { type: 'string' },
            gender: { type: 'string' },
          }
        }
      },
      422: {
        description: 'Validation errors',
        type: 'object',
        properties: {
          errors: { type: 'array', items: { type: 'string' } }
        }
      }
    }
  }
};

module.exports = { createSchema };
