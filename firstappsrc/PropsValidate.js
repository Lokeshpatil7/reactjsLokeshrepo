//===================proptypes============20/11/21
import PropTypes from "prop-types";
function PropValidate(props)
{
  const {name,age} = props;
  return(
    <>
    <h2>Name : {name }</h2>
    <h2>Age : {age}</h2>
    <h2>After five years my age will be : {age + 5}</h2>
    </>
  );
}
PropValidate.propTypes ={
    name : PropTypes.string,
    age :PropTypes.number.isRequired,
    children : PropTypes.element.isRequired,
    renderable : PropTypes.node,
    rollNumber : PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
    remark : PropTypes.any,
    myArr : PropTypes.arrayOf(PropTypes.number), // in array if we pass string then it will give error on console
    
    // myObject : PropTypes.shape({ //it will allow new properties
    // name : PropTypes.string,     //passing dattyes does't matter
    // age: PropTypes.number,
    // }),
    myObject : PropTypes.exact({ //pass all the datatypes which are mention in abject
        name : PropTypes.string,
        age: PropTypes.number,
        mobile : PropTypes.string,
    }),

};

export default PropValidate;