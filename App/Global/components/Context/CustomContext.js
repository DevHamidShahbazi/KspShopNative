import React,{createContext,useState} from 'react';


const AuthContext = createContext(false);
const UserContext = createContext(null);
const NameContext = createContext({
    name:'Hamid',
    setName:(value) => {console.log(value)},
});

export {AuthContext,UserContext,NameContext}
