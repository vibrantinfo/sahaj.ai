const path = require("path");

const createStoryPages = async (graphql, createPage) => {
  const storyTemplate = path.resolve("./src/templates/Story/StoryTemplate.js");
  const res = await graphql(`
    query allStories {
      allStrapiStories {
        nodes {
          id
          slug
          title
          storyCategory {
            id
            storyCategoryLabel
          }
        }
      }
    }
  `);
  res.data.allStrapiStories.nodes.forEach(node => {
    createPage({
      component: storyTemplate,
      path: `/stories/${node.slug}`,
      context: {
        slug: node.slug,
        id: node.id,
        storyCategoryId: node.storyCategory.id,
        storyCategoryLabel: node.storyCategory.storyCategoryLabel,
        title: node.title
      },
    });
  });
};

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  await createStoryPages(graphql, createPage);
};
