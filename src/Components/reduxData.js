import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { fetchData2 } from "../reduxKit/action/apiAction";
const ReduxData = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchData2());
    }, [dispatch])
    return (
        <div/>
   )
}
export default ReduxData;