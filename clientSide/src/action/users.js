import axios from "axios";
import { useNavigate } from "react-router-dom";


export const addCust = (cust) => {
    console.log(cust)

    return (dispatch) => {
        axios.post("http://localhost:8080/users/addCust",cust).
            then(response => {
                console.log(response);
                dispatch(saveAllCusts(response.data));
                alert("הלקוח התווסף בהצלחה");
            }, err => {
                console.log(err);
                console.log("קרתה שגיאה");
            })
    }
}
export const saveCust = (cust) => {
    return {
        type: "ADD_CUST",
        payload: cust
    }
}
export const getAllCusts = () => {
    return (dispatch) => {
        axios.get("http://localhost:8080/users/getAllCust").
            then(response => {
                console.log(response);
                dispatch(saveAllCusts(response.data))

            },
                err => {
                    console.log(err);
                    console.log("קרתה שגיאה");

                })
    }
}
export const saveAllCusts = (usersArr) => {
    return {
        type: "SAVE_ALL_CUSTS",
        payload: usersArr
    }
}
export const getAllVaccination = (id) => {
    return (dispatch) => {
        axios.get("http://localhost:8080/vaccination/getAllVaccination/"+id).
            then(response => {
                console.log(response);
                dispatch(saveAllVaccination(response.data))

            },
                err => {
                    console.log(err);
                    console.log("קרתה שגיאה");

                })
    }
}
export const saveAllVaccination = (vaccination) => {
    return {
        type: "SAVE_ALL_VACCINATION",
        payload: vaccination
    }
}
export const getAllVRecovery = (id) => {
    return (dispatch) => {
        axios.get("http://localhost:8080/recovery/getAllVRecovery/"+id).
            then(response => {
                console.log(response);
                dispatch(saveAllRecovery(response.data))

            },
                err => {
                    console.log(err);
                    console.log("קרתה שגיאה");

                })
    }
}
export const saveAllRecovery = (recovery) => {
    return {
        type: "SAVE_ALL_RECOVERY",
        payload: recovery
    }
}
export const deleteCust = (id) => {
    return (dispatch) => {
        axios.delete("http://localhost:8080/users/deleteCust/" + id).
            then(response => {
                console.log(response);
                dispatch(deleteCustFromAll(response.data))


            },
                err => {
                    console.log(err);
                    console.log("קרתה שגיאה");

                })
    }
}
export const deleteCustFromAll = (usersArr) => {
    return {
        type: "DELETE_USER_FROM_ALL",
        payload: usersArr
    }
}
export const updateCustomer = (item) => {
    return (dispatch) => {

        axios.put("http://localhost:8080/users/updateCust/"+item.id,item).
            then(response => {
                console.log(response);
                dispatch(saveUpdate(item));
                

            },
                err => {
                    console.log(err);
                    console.log("קרתה שגיאה");

                })
    }
}
 


export const saveUpdate = (cust) => {
    return {
      type:"CUSTOMER_UPDATED",
      payload:cust
    }
  };

