import React, {useState} from 'react';
import {ColorRing} from "react-loader-spinner";

const Loading = () => {
    return (
        <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={["#292929","#333333", "#383838"]}
        />
    );
};

export default Loading;