module.exports = {


  friendlyName: 'Delete article',


  description: 'Delete an article from the database.',


  inputs: {
    articleId: {
      description: 'The ID of the article.',
      type: 'number',
      required: true
    },
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


  fn: async function ({ articleId }, exits) {
    const article = await Article.destroyOne({
      id: articleId
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
