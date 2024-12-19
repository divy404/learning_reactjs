import React from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function GitHub () {
    const data = useLoaderData()

    return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
    <img src={data.avatar_url} width={300} alt="" />
    </div>
    )

}

export default GitHub