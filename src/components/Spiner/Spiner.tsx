import { CSSProperties } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

const override: CSSProperties = {
  position: 'absolute',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
  margin: 'auto',
  borderColor: 'yellow',
};

function Spiner() {
  return (
    <>
      <ClipLoader
        color="red"
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
      />
    </>
  );
}

export default Spiner;
