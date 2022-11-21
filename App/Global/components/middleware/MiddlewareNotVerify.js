import React from 'react';
export default function MiddlewareNotVerify (props) {
    const {Verify,children} = props;
    if (Verify != null){
        if (!Verify){
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
