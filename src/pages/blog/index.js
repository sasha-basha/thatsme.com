import React from "react";
import styled from "styled-components";
import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";
const BlogIndexSection = styled.section`
  height: 90vh;
  background-image: linear-gradient(110deg, #9796f0, #fbc7d4);
`;

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <BlogIndexSection>
          <div
            className="full-width-image-container margin-top-0"
            style={{
              backgroundImage: `url('/img/chicken-2.jpg')`
            }}
          >
            <h1
              className="has-text-weight-bold is-size-1"
              style={{
                boxShadow: "0.5rem 0 0 #f40, -0.5rem 0 0 #f40",
                backgroundColor: "#f40",
                color: "white",
                padding: "1rem"
              }}
            >
              Latest Stories from Sasha
            </h1>
          </div>
          <section className="section">
            <div className="container">
              <div className="content">
                <BlogRoll />
              </div>
            </div>
          </section>
        </BlogIndexSection>
      </Layout>
    );
  }
}
