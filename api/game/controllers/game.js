"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

// curl -X POST http://localhost:1337/games/populate\?page\=1\&search\=bla
module.exports = {
  populate: async (ctx) => {
    console.log("Starting to populate");
    console.log(ctx.query);
    ctx.send("Finishing populate");
  },
};
