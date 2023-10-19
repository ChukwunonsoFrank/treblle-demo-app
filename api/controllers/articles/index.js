module.exports = {


  friendlyName: 'Show all articles',


  description: 'Show every article in the database.',


  inputs: {},


  exits: {
    success: {
      responseType: "",
      statusCode: 200
    }
  },


  fn: async function (inputs, exits) {
    const articles = await Article.find()
    return exits.success(articles)
  }

};
