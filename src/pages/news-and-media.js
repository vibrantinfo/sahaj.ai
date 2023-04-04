import React from "react";
import Image from "gatsby-image";
import Layout from "components/layout";
import { useStaticQuery, graphql } from "gatsby";
import "page-styles/news-and-media.scss";

function ArticleListing({ article }) {

  const MAX_TITLE_CHARS = 40;

  const truncateTitle = (input) => input.length > MAX_TITLE_CHARS ? `${input.substring(0, MAX_TITLE_CHARS)}...` : input;

  return (
    <div className="article-listing">
      <div className="article-image-container">
        {article.image}
      </div>
      <div className="article-description">
        <div className="publish-date">{article.publishDate}</div>
        <div className="title">{truncateTitle(article.title)}</div>
        <div className="article-link">
          <a href={article.publishUrl} target="_blank" >
            View Story
          </a>
        </div>
      </div>
    </div>
  );
}

function ArticleGroupedListing({ articles }) {
  return (
    <div className="article-grouped-listing">
      {articles.map(article => {
        return (
          <div className="article" key={article.id}>
            <ArticleListing article={article}/>
          </div>
        )
      })}
    </div>
  )
}

export default function newsAndMedia({ location }) {

  const images = useStaticQuery(graphql`
  query {
    articleOne: file(
      relativePath: { eq: "graphics/articles/image_article 1.jpeg" }
    ) {
      childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      articleTwo: file(
        relativePath: { eq: "graphics/articles/image_article 2.jpg" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      articleThree: file(
        relativePath: { eq: "graphics/articles/image_article 3.jpg" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      articleFour: file(
        relativePath: { eq: "graphics/articles/image_article 4.jpg" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      articleFive: file(
        relativePath: { eq: "graphics/articles/image_article 5.jpg" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      articleSix: file(
        relativePath: { eq: "graphics/articles/image_article 6.jpg" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
`);

  const articles = [
    {
      id: "0",
      title: "Pay transparency far cry in India",
      publishDate: "October 17, 2021",
      image: <Image fluid={images.articleSix.childImageSharp.fluid} />,
      publishUrl: "https://www.newindianexpress.com/business/2021/oct/17/pay-transparency-a-far-cry-in-india-2372304.html",
    },
    {
      id: "1",
      title: "Why this company allows its employees to see each other’s salary",
      publishDate: "September 21, 2021",
      image: <Image fluid={images.articleTwo.childImageSharp.fluid} />,
      publishUrl: "https://hr.economictimes.indiatimes.com/news/workplace-4-0/talent-management/why-this-company-allows-its-employees-to-see-each-others-salary/86389783",
    },
    {
      id: "2",
      title: "Rising Attrition Or Retaining Talent, What Exactly Is The Challenge?",
      publishDate: "September 04, 2021",
      image: <Image fluid={images.articleThree.childImageSharp.fluid} />,
      publishUrl: "http://bwpeople.businessworld.in/article/Rising-Attrition-Or-Retaining-Talent-What-Exactly-Is-The-Challenge-/04-09-2021-403163/",
    },
    {
      id: "3",
      title: "How being data led and data native is crucial in transforming OOH advertising",
      publishDate: "September 04, 2021",
      image: <Image fluid={images.articleFive.childImageSharp.fluid} />,
      publishUrl: "https://www.financialexpress.com/brandwagon/how-being-data-led-and-data-native-is-crucial-in-transforming-ooh-advertising/2323902/",
    },
    {
      id: "4",
      title: "Reimagining OOH: A technology perspective to enable data-led transformation",
      publishDate: "August 15, 2021",
      image: <Image fluid={images.articleFour.childImageSharp.fluid} />,
      publishUrl: "https://brandequity.economictimes.indiatimes.com/news/advertising/reimagining-ooh-a-technology-perspective-to-enable-data-led-transformation/85344721",
    },
    {
      id: "5",
      title: "Transformation in education from teaching-led learning to guided learning: Sunder Malyandi, Sahaj Software",
      publishDate: "July 14, 2021",
      image: <Image fluid={images.articleOne.childImageSharp.fluid} />,
      publishUrl: "https://www.financialexpress.com/education-2/transformation-in-education-from-teaching-led-learning-to-guided-learning-sunder-malyandi-sahaj-software/2289969/",
    },
  ];

  return (
    <Layout title="News and Media" className="news-and-media-page" location={location}>
      <div className="news-and-media">
        <div className="intro-section">
          <div className="small-title">News and Media</div>
          <h1 className="header-text">Making headlines</h1>
          <div className="description">
            Media coverage about our work, partnership with clients across a 
            wide spectrum of industries, our culture, and everything else that 
            makes us Sahaj.
          </div>
        </div>
        <div className="news-listing-ctr">
          <div className="news-grid-section">
              <ArticleGroupedListing 
                articles={articles}
              />
          </div>
        </div>
      </div>
    </Layout>
    );
}