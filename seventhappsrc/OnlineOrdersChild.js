export default (props) =>{
    console.log(props);
    return(
        <>
        <h1>In Child</h1>
        <button onClick={props.onClickHandler}>Next Status From Child</button>
        </>
    );
};