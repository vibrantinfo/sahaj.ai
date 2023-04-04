import React from "react";
import Layout from "components/layout";
import { graphql, Link } from "gatsby";
import "./StoryTemplate.scss";
import { Container } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import CustomReactShare from "components/CustomReactShare/CustomReactShare";
import StoryCard from "components/StoryCard/StoryCard";
import BackButton from "components/BackButton/BackButton";
import YoutubeVideo from "components/YoutubeVideo";
import { STORY_CATEGORY } from "../../constants/constants";

export default function StoryTemplate(props) {
  const { strapiStories, strapiStoryCategories } = props.data;
  const { previousLocation } =
    props.location && props.location.state ? props.location.state : false;
  const story = strapiStories;
  const categoryName = strapiStoryCategories.storyCategoryLabel;
  const { slug } = props.pageContext;
  const relatedStories = strapiStoryCategories.stories.filter(
    story => story.slug !== slug
  );
  const categorySlug = strapiStoryCategories.slug;
  const { UNIQUELY_TRANSPARENT, UNIQUELY_TOGETHER, TECH_AND_BUSINESS } = STORY_CATEGORY;

  const slugsInTechAndBusinessStories = [
    "agile-business-analysis",
    "mvp-12-weeks-3-timezones",
    "not-another-dogmatic-process",
  ];

  let transparent = false;
  let colorClass = "";
  if (slugsInTechAndBusinessStories.includes(slug)) {
    transparent = true;
    colorClass = TECH_AND_BUSINESS.color;
  }

  if (categorySlug === UNIQUELY_TRANSPARENT.slug)
    colorClass = `${UNIQUELY_TRANSPARENT.color}`;
  else if (categorySlug === UNIQUELY_TOGETHER.slug)
    colorClass = `${UNIQUELY_TOGETHER.color}`;

  const renderYoutubeVideo = url => {
    return (
      <div className="story-video-ctr">
        <YoutubeVideo videoUrl={url} controls />
      </div>
    );
  };

  const previousActiveTab = previousLocation
    ? previousLocation
    : "founding-stories";

  return (
    <Layout title={props.pageContext.title} className={"story-template-page"}>
      <div className={`story-template ${slug}`}>
        <Container className="story-content-wrapper">
          <h2 className={`category-title ${colorClass}`}>{categoryName}.</h2>
          <div className="story">
            <h1 className="story-title">{story.title}.</h1>
            {story.author && story.author.name && (
              <h5 className={`story-author ${colorClass}`}>{story.author.name}</h5>
            )}
            <div className="story-content-container">
              {story.youtubeEmbedURL ? (
                renderYoutubeVideo(story.youtubeEmbedURL)
              ) : (
                <ReactMarkdown source={story.content} />
              )}
            </div>
            <div className="social-share">
              <div className="share-text">Share</div>
              <CustomReactShare title={story.title} location={props.location} />
            </div>
          </div>
          <div className="related-stories-ctr">
            <div className="header-text">Related stories</div>
            <div className="related-stories-listing">
              {relatedStories.map(story => (
                <StoryCard
                  className={(transparent)?"dark-gray":"white"}
                  title={story.title}
                  slug={story.slug}
                  categorySlug={categorySlug}
                  transparent={transparent}
                  key={story.slug}
                />
              ))}
            </div>
            <div className="button-ctr">
              <BackButton to={`/what-we-think?active=${previousActiveTab}`} />
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  );
}

export const currentStoryQuery = graphql`
  query currentStoryQuery($id: String, $storyCategoryId: String) {
    strapiStories(id: { eq: $id }) {
      author {
        name
      }
      title
      slug
      content
      youtubeEmbedURL
    }
    strapiStoryCategories(strapiId: { eq: $storyCategoryId }) {
      storyCategoryLabel
      slug
      stories {
        id
        title
        slug
        youtubeEmbedURL
      }
    }
  }
`;
