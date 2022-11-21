import React from 'react';

export default function MiddlewareNotAuth (props) {
    const {Auth,children} = props;
    if (Auth != null){
        if (!Auth){
            return (
                <React.Fragment>
                    {children}
                </React.Fragment>
            )
        }else {
            return (
                <React.Fragment>

                </React.Fragment>
            )
        }
    }
}
