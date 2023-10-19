module.exports = {


  friendlyName: 'Update article',


  description: 'Update an article with the specified ID.',


  inputs: {
    articleId: {
      description: 'The ID of the article.',
      type: 'number',
      required: true
    },
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    content: { type: 'string', required: true }
  },

  exits: {
    success: {
      responseType: "",
      statusCode: 204
    },
    notFound: {
      responseType: "",
      statusCode: 404
    }
  },


  fn: async function ({ articleId, title, description, content }, exits) {

    const article = await Article.updateOne({
      id: articleId
    }).set({
      title,
      description,
      content
    })

    if (!article) {
      throw {
        notFound: {
          status: "error",
          message: "The article with the specified ID does not exist in the database. Please check your ID and try again!"
        }
      }
    }

    // All done.
    return exits.success();

  }


};
