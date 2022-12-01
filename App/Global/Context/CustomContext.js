import React,{createContext} from 'react';
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
export {AuthContext,UserContext,DisplayTabBarContext}
