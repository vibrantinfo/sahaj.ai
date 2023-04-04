import React from "react";
import StoryCard from '../StoryCard/StoryCard';
import StoryCategoryCard from '../StoryCategoryCard/StoryCategoryCard';
import { STORY_CATEGORY } from "../../constants/constants";
import "./StoriesListing.scss";
import { useStaticQuery, graphql } from "gatsby";

export default function StoriesListing() {
  const data = useStaticQuery(graphql`
    query storyCategoryQuery {
      allStrapiStories {
        nodes {
          storyCategory {
            slug
          }
          id
          title
          slug
        }
      }
      allStrapiStoryCategories {
        nodes {
          slug
          id
          storyCategoryLabel
        }
      }
    }
  `);

  const { UNIQUELY_TRANSPARENT, UNIQUELY_TOGETHER } = STORY_CATEGORY;

  const storiesUniquelyTransparent = data.allStrapiStories.nodes.filter(story => story.storyCategory.slug === UNIQUELY_TRANSPARENT.slug);
  const storiesUniquelyTogether = data.allStrapiStories.nodes.filter(story => story.storyCategory.slug === UNIQUELY_TOGETHER.slug);

  const storiesDataShuffled = []
  let i = 0;
  while (true) {
    if (storiesUniquelyTransparent[i])
      storiesDataShuffled.push(storiesUniquelyTransparent[i]);
    if (storiesUniquelyTogether[i])
      storiesDataShuffled.push(storiesUniquelyTogether[i]);
    i++
    if (!storiesUniquelyTransparent[i] && !storiesUniquelyTogether[i])
      break;
  }

  // insert category cards in array
  const rawCategoryData = data.allStrapiStoryCategories.nodes;
  const storyCategory1 = rawCategoryData.find(category => category.slug === UNIQUELY_TRANSPARENT.slug);
  const storyCategory2 = rawCategoryData.find(category => category.slug === UNIQUELY_TOGETHER.slug);

  const storiesData = storiesDataShuffled.map(story => {
    return <StoryCard title={story.title} slug={story.slug} categorySlug={story.storyCategory.slug} className="is-founding" />;
  });

  storiesData.splice(3, 0, <StoryCategoryCard label={storyCategory1.storyCategoryLabel} />);
  storiesData.splice(5, 0, <StoryCategoryCard label={storyCategory2.storyCategoryLabel} />);

  return (
    <div className="stories-listing-ctr">
      <div className="stories-listing">
        {storiesData.map((card, index) =>
          <div className="story-anchor" key={index}>
            {card}
          </div>
        )}
      </div>
    </div>
  );
}
