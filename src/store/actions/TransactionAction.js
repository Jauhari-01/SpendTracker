import {ADD_TRANSACTION,DELETE_TRANSACTION} from './types';

export const addTransaction = ({id,title,price}) => (dispatch)=>{
    console.log(id,title,price);

    const newTransaction = {
        id, title , price ,
    };

    dispatch({type: ADD_TRANSACTION,payload: newTransaction});
}


export const deletTransaction = (id)=>(dispatch)=>{
    dispatch({type:DELETE_TRANSACTION,payload:id});
}
