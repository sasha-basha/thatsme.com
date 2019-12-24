import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import styled from "styled-components";

import Layout from "../components/Layout";
import BlogRoll from "../components/BlogRoll";
const StarrySection = styled.section`
  background-image: url(${"/img/star.svg"}),
    linear-gradient(110deg, #000000, #00010a);
  background-repeat: space;
`;

const MainSection = styled.section`
  background-image: url(${"/img/night-moon.jpg"}),
    linear-gradient(110deg, #000000, #00010a);
  background-position: center;
  background-repeat: no-repeat ;
  
  /*
  MOON PICTURE AS BACKGROUND ONLY
  background-size: cover;
  background-image: url(${"/img/night-moon.jpg"});
  background-repeat: no-repeat;
  background-position: center;
    */
`;
const ContentSection = styled.section`
color: #272727;
border 1px dashed #272727;
border-shadow: 0 0 0 5px;
border-radius: 5px
background:#ffc600;

`;
export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro
}) => (
  <div>
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`
      }}
    >
      <div
        style={{
          display: "flex",
          height: "150px",
          lineHeight: "1",
          justifyContent: "space-around",
          alignItems: "left",
          flexDirection: "column"
        }}
      >
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            boxShadow: "#FF0000 0.5rem 0px 0px, #FF0000 -0.5rem 0px 0px",
            backgroundColor: "#FF0000",
            color: "white",
            lineHeight: "1",
            padding: "0.25em"
          }}
        >
          {title}
        </h1>
        <h3
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            boxShadow: "#FF0000 0.5rem 0px 0px, #FF0000 -0.5rem 0px 0px",
            backgroundColor: "#FF0000",
            color: "white",
            lineHeight: "1",
            padding: "0.25em",
            alignItems: `center`,
            textAlign: "center"
          }}
        >
          {subheading}
        </h3>
      </div>
    </div>
    <StarrySection>
      <MainSection className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <div className="columns">
                    <ContentSection className="column is-12">
                      <h3 className="has-text-weight-semibold is-size-2">
                        {heading}
                      </h3>
                      <p>{description}</p>
                    </ContentSection>
                  </div>
                  <div className="column is-12">
                    <h3
                      className="has-text-weight-semibold is-size-2"
                      style={{
                        borderRadius: "5px",
                        boxShadow:
                          "#f93d66 0.5rem 0px 0px, #f93d66 -0.5rem 0px 0px",
                        backgroundColor: "#f93d66",
                        color: "#fff",
                        lineHeight: "1",
                        padding: "0.25em",
                        alignItems: `center`,
                        textAlign: "center"
                      }}
                    >
                      Latest stories from Sasha
                    </h3>
                    <BlogRoll />
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/blog">
                        Read more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainSection>
    </StarrySection>
  </div>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array
  })
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        description
      }
    }
  }
`;
