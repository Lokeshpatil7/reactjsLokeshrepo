//step 1
// function MySecondComponent(){
//     return <h2>I'Am Inside MySecondComponent</h2>;
// }
// export default MySecondComponent;


// step 2
// const MySecondComponent = () => {
//     return <h2>I'Am Inside MySecondComponent</h2>

// }

// export default () => {
//     return <h2>Im inside MySecondComponent</h2>
    
// };

// import FirstChild from "./FirstChild";
//  import SecondChild from "./SecondChild";
//  import ThirdChild from "./ThirdChild";

// export default () => {
//     return (
//         <>
//         <h2>Im inside MySecondComponent</h2>
//         <FirstChild/>
//         <SecondChild/>
//         <ThirdChild/>
       
//         </>
//     );
// };


// export default(props) =>{
//     const {name ,age} = props;
//     console.log(name);
//     console.log(age);
//     return(
//         <>
//         <h2>hello Im {name} , i am {age} yrs old and  Iam inside MySecondComponent</h2>
//         </>
//     );
// }


//-------------------------------------
// function MySecondComponent(props){
//     const {name ,age , children } = props;
//     const {parentComponentName } = props;

//      console.log(props ,name);
//      console.log(props ,age );
  
//     return( <div>
//            <h2>My MySecondComponent called from {parentComponentName}</h2>
//            <FirstChild childComponentName = {"MySecondComponent"} />
//            <SecondChild childComponentName = {"MySecondComponent"} />
//            <ThirdChild childComponentName = {"MySecondComponent"} />
//     </div>
//     );
// }
// export default MySecondComponent;