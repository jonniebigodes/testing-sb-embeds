import PropTypes from "prop-types";

export const ExampleEmbedComponent = ({
  author,
  title,
  description,
  summary,
}) => (
  <div>
    <h1>Fictional work information</h1>
    <h2>
      {title} by {author}
    </h2>
    <p>{description}</p>
    <p>{summary}</p>
  </div>
);

ExampleEmbedComponent.defaultProps = {
  author: "No author available",
  title: "No title available",
  description: "No description available",
  summary: "No summary available",
};
ExampleEmbedComponent.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  summary: PropTypes.string,
};
