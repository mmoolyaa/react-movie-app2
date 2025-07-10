import ClipLoader from "react-spinners/ClipLoader";

const Spinner = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100px' }}>
    <ClipLoader color="#fff" size={50} aria-label="Loading..." />
  </div>
);

export default Spinner;
