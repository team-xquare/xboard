import React, { useEffect, useState } from 'react';
import github from '../../libs/api/organization';

const XBoard = () => {
    const [ data, setData ] = useState<any>([]);

    useEffect(() => {
        github.getOraRepos()
        .then((res) => {
            setData(res.data);
            console.log(res.data);
        })

    },[])

    return (
        <>
            {
                data.map((data) => {
                    return (
                        <div>{data.name}</div>
                    )
                })
            }
        </>
    )
}

export default XBoard;