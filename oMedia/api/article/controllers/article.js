"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async findByCategoryName(ctx) {
    // const categoryName = ctx.params.categoryName;
    const { categoryName } = ctx.params;

    // maintenant qu'on a récupéré le nom de la catégorie qui nous interesse, on va faire une requete Active Record pour aller chercher les articles ciblés
    const results = await strapi.query("article").find({
      "categories.name_contains": categoryName,
    });

    return results;
  },

  async findOne(ctx) {
    // 1. récupérer l'id ciblé dans l'url
    const { id } = ctx.params;

    // 2. récupérer l'article qui correspond, avec Active Record
    const result = strapi.query("article").findOne({ id });

    // 3. ajouter les suggestion

    const idCAtegories = result.idCAtegories.map((cat) => cat.id);
    console.log(idCategories);

    result.suggest = await strapi.query("article").find({
      categories: idCAtegories,
      id_ne: id,
      _limit: 2,
    });

    // 4. renvoyer le résultat

    return result;
  },
};
