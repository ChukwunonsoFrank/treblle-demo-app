module.exports = {

  friendlyName: 'Save article',

  description: 'Save a new article in the database.',

  inputs: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    content: { type: 'string', required: true }
  },

  exits: {
    success: {
      responseType: "",
      statusCode: 201
    },
    articleNotCreated: {
      responseType: "",
      statusCode: 500
    }
  },

  fn: async function ({ title, description, content }, exits) {
    const article = await Article.create({
      title,
      description,
      content
    }).fetch()

    if (!article) {
      throw {
        articleNotCreated: {
          status: "error",
          message: "The article was not stored on the database! This may be an error from our side."
        }
      }
    }

    return exits.success(article)
  }

};
