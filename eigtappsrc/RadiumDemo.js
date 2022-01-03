import Radium from "radium";

const RadiumDemo = () => {
  //   return (
  //     <>
  //       <h1>In RadiumDemo</h1>
  //       <button style={[styles.button]}>My Button</button>
  //     </>
  //   );
  // };

  // const styles = {
  //   button: {
  //     backgroundColor: "#b1a296",
  //   },
  // };

  return (
    <div style={[styles.block]}>
      <h1>In RadiumDemo</h1>
      <button style={[styles.basebutton, styles.primaryButton]}>
        Primary Button
      </button>
      <button style={[styles.basebutton, styles.secondaryButton]}>
        Secondary Button
      </button>
    </div>
  );
};

const styles = {
  block: {
    backgroundColor: "#557a95",
  },
  basebutton: {
    color: "white",
  },
  primaryButton: {
    backgroundColor: "#5d5c61",
  },
  secondaryButton: {
    backgroundColor: "#379683",
  },
};

export default Radium(RadiumDemo);
