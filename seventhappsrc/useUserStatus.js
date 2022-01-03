import OnlineOrders from "./OnlineOrders";

export default (userId) =>{
    
//     let status = "Online";
    
//     //code to fetch the user status from server(API call)
//     //WAC to return status as online if user id is even else reuten offline

//   if (userId % 2===0) {
//       status = "Online";
//   } else {
//     status = "Offline";
//   }
//     return status;
    return userId % 2 ? "Offline" : "Online"; //same
};