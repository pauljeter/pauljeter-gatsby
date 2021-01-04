import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

const Archive = () => {
  const data = useStaticQuery(graphql`
    query BlogPostArchive {
      allMdx(limit: 5, sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            frontmatter {
              title
              slug
            }
          }
        }
      }
    }
  `);

  return (
    <>
      <aside>
        <h3>Archive</h3>
        <ul>
          {data.allMdx.edges.map((post) => (
            <li key={post.node.frontmatter.slug}>
              <Link to={`/blog${post.node.frontmatter.slug}`}>{post.node.frontmatter.title}</Link>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default Archive;
