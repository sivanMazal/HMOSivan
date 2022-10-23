const initialState =
{
    
    userArr: [],
    cust:null,
    vaccination:[],
    recovery:[],
   

}
const reducer = (state = initialState, action) => {
    switch (action.type) {

        case "SAVE_ALL_CUSTS":
            console.log(action.payload);
            return {
                ...state,
                userArr: action.payload
            }
            case "SAVE_ALL_VACCINATION":
                console.log(action.payload);
                return {
                    ...state,
                    vaccination: action.payload
                }
                case "SAVE_ALL_RECOVERY":
            console.log(action.payload);
            return {
                ...state,
                recovery: action.payload
            }
        case "ADD_CUST":
            console.log(action.payload);
            return {
                ...state,
                userArr :[...state.userArr,action.payload],
              };
     
              case "CUSTOMER_UPDATED":
                let item = [...state.userArr];
                for (let index = 0; index < item.length; index++) {
                  if (item.find((x) => x.Id == action.payload.Id)) {
                    item[index] = action.payload;
                    break;
                  }
                }
                return {
                  ...state,
                  userArr: [...item],
                };
            


        case "DELETE_USER_FROM_ALL":
            let arrU = [...state.userArr].filter((item) => item.id != action.payload);
             
            return {
                ...state,
                userArr: arrU
            }
    }
    return state;

}
export default reducer;

