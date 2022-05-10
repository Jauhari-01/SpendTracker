import {ADD_TRANSACTION,DELETE_TRANSACTION} from '../actions/types';

const initialstate = {
    transactions : [
        {id:1,title:'Soup1',price:-22},
        {id:2,title:'Soup2',price:400},
        {id:3,title:'Soup3',price:189},
        {id:4,title:'Soup4',price:122},
        {id:5,title:'Soup5',price:986},
    ],
};

export default (state = initialstate , {type,payload})=>{
    switch(type){
        case ADD_TRANSACTION:
            return{
                ...state,
            transactions: [payload,...state.transactions],
        }
        case DELETE_TRANSACTION:
            return{
                ...state,
                transactions:state.transactions.filter((transaction)=>transaction.id !== payload,),
            }
        default:
            return state;
    }
}