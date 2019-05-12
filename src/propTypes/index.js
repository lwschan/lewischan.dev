import PropTypes from 'prop-types';

const {
    shape: ptShape,
    string: ptString,
    // number: ptNumber,
    arrayOf: ptArrayOf,
} = PropTypes;

export const siteSocial = ptShape({
    githubUrl: ptString.isRequired,
    keybaseUrl: ptString.isRequired,
    linkedInUrl: ptString.isRequired,
    twitterUrl: ptString.isRequired,
});

export const site = ptShape({
    siteMetadata: ptShape({
        title: ptString.isRequired,
        author: ptString.isRequired,
    }).isRequired,
});

export const image = ptShape({
    sizes: ptString.isRequired,
});

export const markdownRemark = ptShape({
    frontmatter: ptShape({
        excerpt: ptString,
        title: ptString.isRequired,
        date: ptString.isRequired,
    }).isRequired,
    excerpt: ptString.isRequired,
    html: ptString.isRequired,
}).isRequired;

export const allMarkdownRemark = ptShape({
    edges: ptArrayOf(
        ptShape({
            node: markdownRemark,
        }).isRequired,
    ).isRequired,
}).isRequired;
