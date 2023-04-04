import React, { useState, useEffect } from "react";
import "./MediumBlogListing.scss";
import { Col, Row } from "react-bootstrap";
import { Spinner } from "react-bootstrap";
import MediumBlogCard from "../MediumBlogCard/MediumBlogCard";
import StoryCard from "components/StoryCard/StoryCard";
import { useStaticQuery, graphql } from "gatsby";

export default function MediumBlogListing() {
  const data = useStaticQuery(graphql`
    query storyQuery {
      allStrapiStories {
        nodes {
          title
          id
          slug
        }
      }
    }
  `);

  const slugsInTechAndBusinessStories = [
    "agile-business-analysis",
    "mvp-12-weeks-3-timezones",
    "not-another-dogmatic-process",
  ];
  const storiesData = data.allStrapiStories.nodes;
  const stories = storiesData.filter(story =>
    slugsInTechAndBusinessStories.includes(story.slug)
  );

  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const getBlogs = async () => {
      const response = await fetch(
        `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/inspiredbrilliance`
      );
      const jsonResponse = await response.json();
      return jsonResponse.items;
    };
    const insertStoriesInBlogs = async () => {
      const blogs = await getBlogs();
      const data = blogs.map(blog => ({ type: "blog", item: blog }));
      data.splice(1, 0, { type: "story", item: stories[0] });
      data.splice(7, 0, { type: "story", item: stories[1] });
      data.splice(9, 0, { type: "story", item: stories[2] });
      setBlogs(data);
      setLoading(false);
    };
    insertStoriesInBlogs(blogs);
  }, []);

  return (
    <div className="medium-blog-listing-ctr">
      <Col xs="12" md="12" className="blog-listing">
        {loading ? (
          <div className="spinner-ctr">
            <Spinner
              className="growing-loader"
              animation="grow"
              variant="danger"
            />
            <Spinner
              className="growing-loader"
              animation="grow"
              variant="danger"
            />
            <Spinner
              className="growing-loader"
              animation="grow"
              variant="danger"
            />
          </div>
        ) : (
          <div className="blog-masonry-listing">
            {blogs.map((blog, index) => (
              <div className="medium-blog-anchor" key={index}>
                {blog.type === "story" ? (
                  <StoryCard
                    className="dark-gray light-weight"
                    title={blog.item.title}
                    slug={blog.item.slug}
                    transparent
                    isTechnologyCategory
                  />
                ) : (
                  <MediumBlogCard
                    title={blog.item.title}
                    pubDate={blog.item.pubDate}
                    link={blog.item.link}
                    thumbnail={blog.item.thumbnail}
                  />
                )}
              </div>
            ))}
          </div>
        )}
      </Col>
    </div>
  );
}
