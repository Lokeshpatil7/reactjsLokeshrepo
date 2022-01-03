import { getFarmerById, getFarmersList } from "./farmer.service"


export default()=>{
    const [farmersList, setFarmersList]= useState([])

    useEffect(() => {
    getFarmersList().then((response) => {
        if (response && response.data){
   setFarmersList(response.data);
        }
    }, []);


const onGetDetailsClickHandler=(farmerId)=>{
getFarmerById()=>{

    if(response && response.data){
        alert('Name'+response.data.farmerName)
    }
    }
});

return(
    <>
<h1 className="text-center" > FarmerList</h1>
<table>
    <thead>
        <tr>
        <th>Name</th>
        <th>Mobile</th>
        </tr>
    </thead>
    <tbody>
        {farmersList.map((farmer)=>{ 
            return(
                <tr key={farmer.farmerId} >
                    <td>{farmer.farmerName}</td>
                    <td>{farmer.farmerContact}</td>
                    <td>
                        <button  onClick={()=>{onGetDetailsClickHandler(farmer.farmerId);}} >
                            get details</buttton>
                    </td>
                    </tr>
            )

        })}
    </tbody>
</table>
    </>
)
    }