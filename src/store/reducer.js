
import axios from 'axios'


const initialState ={
    currencylist:["name"],
    rates:{}
};



const reducer =  async(state=initialState, action) => {
    const newState = {...state};

    switch(action.type){
        case 'CURRENCY_LIST':{
            var resp = await axios({
                method: 'post',
                url: 'http://localhost:8015/currencies',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {
                  name: ["USD","INR","JPY","CAD"],
                }
              })
            newState.currencylist = [...resp.data.name]
            return newState;

            break
        }
        // case 'GET_CURRENCY_LIST':{
        //     var resp = await axios({
        //         method: 'get',
        //         url: 'http://localhost:8015/currencies',
        //         headers: {
        //             'Content-Type': 'application/json'
        //         }
        //       })
        //     newState.currencylist = [...resp.data.name]
        //     break
        // }

         case 'RATES':{
            newState.rates = action.value;
            return newState;

            break

            
         }  
         default: return newState


    }
};
export default reducer;

