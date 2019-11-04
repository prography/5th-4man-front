import React from 'react';

const HotList = () => {
    return (
        <>
            <div style={{display : "flex", flexDirection: "column", justifyContent:"center"}}>
                <h1 style={{marginTop:"5%", marginBottom:"0",textAlign: "center"}}> 지금 제일 인기 있는 팀!</h1>
                <h4 style={{textAlign: "center", color:'#ADB5BD'}}>이번주에 제일 인기가 많은 팀들이에요</h4>
                <hr style={{width:"30px"}}/>
            </div>
        </>
    );
};

export default HotList;