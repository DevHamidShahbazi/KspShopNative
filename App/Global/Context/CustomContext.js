import React, {createContext} from 'react';
const AuthContext = createContext({
    Auth:null,
    setAuth:() => {}
});
const UserContext = createContext({
    User:null,
    setUser:() => {}
});
const DisplayTabBarContext = createContext({
    DisplayTabBar:true,
    setDisplayTabBar:() => {}
});
const BasketContext = createContext({
    BasketCount:0,
    setBasketCount:() => {}
});
export {AuthContext,UserContext,DisplayTabBarContext,BasketContext}
