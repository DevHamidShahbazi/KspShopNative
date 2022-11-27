import React,{createContext} from 'react';
const AuthContext = createContext({
    Auth:null,
    setAuth:() => {}
});
const UserContext = createContext({
    User:null,
    setUser:() => {}
});
export {AuthContext,UserContext}
