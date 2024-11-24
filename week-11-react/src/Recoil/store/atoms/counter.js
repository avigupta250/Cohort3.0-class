import {atom,selector} from "recoil"

export const counterAtom=atom({
    key:"counter",
    default:0
})

export const evenSelector=selector({
    key:"isEvenSelector",
    get:function({get}){
        const cuurentCount=get(counterAtom);
        return cuurentCount%2==0;

    }
})