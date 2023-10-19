module.exports = {


  friendlyName: 'Show article',


  description: 'Show a specific article usually by an identifier(ID).',


  inputs: {
    articleId: {
      description: 'The ID of the article.',
      type: 'number',
      required: true
    }
  },


  exits: {
    success: {
      responseType: "",
      statusCode: 200
    },
    notFound: {
      responseType: "",
      statusCode: 404
    }
  },


  fn: async function ({ articleId }, exits) {

    const article = await Article.findOne({
      id: articleId
    })

    if(!article) {
      throw {
        notFound: {
          status: "error",
          message: "The article with the specified ID does not exist in the database. Please check your ID and try again!"
        }
      }
    }
    // All done.
    return exits.success(article);

  }


};
