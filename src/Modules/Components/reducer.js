export const initialState = {
    cart: [],
    user: null,
};

export const getCartTotal = (cart) => 
    cart?.reduce((amount, item) => item.salePrice + amount, 0);

function reducer(state, action){
    switch(action.type){
        case 'ADD_TO_CART':
            return { 
                ...state,
                cart: [...state.cart, action.item],
             };
        case 'REMOVE_FROM_CART':
            let newCart = [...state.cart];
            const index = state.cart.findIndex((item) => item.url === action.item.url);
            if(index >= 0){
                newCart.splice(index, 1);
            }
            return {...state, cart: newCart};
        case 'REMOVE_ALL_FROM_CART':
            return {...state, cart: []}
        case 'SET_USER':
            return{
                ...state,
                user: action.user
            }
        default:
            return state;
    }
}

export default reducer;