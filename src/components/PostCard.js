import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const propTypes = {
  post: PropTypes.any.isRequired,
};

export default function PostCard({ post }) {
  return (
    <article className="card ">
      <Link to={post.frontmatter.path} className="card-title">
        <h2 className="post-title">
          <div className="post-link">{post.frontmatter.title}</div>
        </h2>
        <div className="post-meta">{post.frontmatter.date}</div>
      </Link>
    </article>
  );
}

PostCard.propTypes = propTypes;
