import categoryReducer from "./categoryReducer";


export default (state,action)=>{
    // console.log(state);
    return {
        category : categoryReducer(state.category,action),
        sort : categoryReducer(state.sort,action),
        goods : categoryReducer(state.goods,action),
        classGoods : categoryReducer(state.classGoods,action),
    }
    
}