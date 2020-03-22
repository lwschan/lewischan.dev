import PropTypes from 'prop-types';

const site = PropTypes.shape({
  siteMetadata: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
});

const sharedPropTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  site,
  data: PropTypes.shape({
    site,
  }),
};

export default sharedPropTypes;
