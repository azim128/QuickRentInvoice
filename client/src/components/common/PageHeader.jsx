import propTypes from "prop-types";

const PageHeader = ({ title }) => {
  return (
    <div className="py-16 bg-blue-600 text-white font-bold text-3xl text-center">
      {title}
    </div>
  );
};

PageHeader.propTypes = {
  title: propTypes.string.isRequired,
};

export default PageHeader;
