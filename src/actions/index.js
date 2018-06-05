import { CATEGORY_UPDATE,SORT_UPDATE,GOODSLIST_UPDATE,GOODSSHOW_UPDATE,CLASSGOODS_UPDATE} from "../actionTypes";
import jsonp from "fetch-jsonp"

export const categoryUpdate = text => ({type : CATEGORY_UPDATE,text})
export const sortUpdate = text => ({type : SORT_UPDATE,text})
export const goodslistUpdate = text => ({type : GOODSLIST_UPDATE,text})
export const goodssUpdhowate = text => ({type : GOODSSHOW_UPDATE,text})
export const classGoodsUpdate = text => ({type : CLASSGOODS_UPDATE,text})