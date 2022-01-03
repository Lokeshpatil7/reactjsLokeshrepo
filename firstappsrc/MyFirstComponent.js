// function MyFirstComponent() {
//   return <h2>I'Am Inside MyFirstComponent</h2>;
// }
// export default MyFirstComponent;
//-------------------------------------------------------------------------
// import FirstChild from "./FirstChild";
// import SecondChild from "./SecondChild";
// import ThirdChild from "./ThirdChild";

// function MyFirstComponent() {
//   return (
//     <>
//       <h2>Im inside MyFirstComponent</h2>
//       <FirstChild />
//       <SecondChild />
//       <ThirdChild />
//     </>
//   );
// }
// export default MyFirstComponent;
//-------------------------------------------------------------------------------------------
function MyFirstComponent(props) {
  const { name, age, children } = props;
  console.log(name);
  console.log(age);
  console.log(props);
  return (
    <>
      <h2>
        hello Im {name} , i am {age} yrs old and Iam inside MyFirstComponent
      </h2>
      {children}
    </>
  );
}
export default MyFirstComponent;

//-----------------task--------------------------

// function MyFirstComponent(props){
//     const {name ,age , children } = props;
//     const {parentComponentName } = props;

//      console.log(props ,name);
//      console.log(props ,age );

//     return( <div>
//            <h2>My MyFirstComponent called from {parentComponentName}</h2>
//            <FirstChild childComponentName = {"MyFirstComponent"} />
//            <SecondChild childComponentName = {"MyFirstComponent"} />
//            <ThirdChild childComponentName = {"MyFirstComponent"} />

//     </div>
//     );
// }
// export default MyFirstComponent;
