import "./parallax.scss";

const Parallax = ({ type }) => {
  return (
    <div className="parallax">
      <h1>{type === "services" ? "What we Do?" : "What we Did?"}</h1>
    </div>
  );
};

export default Parallax;
