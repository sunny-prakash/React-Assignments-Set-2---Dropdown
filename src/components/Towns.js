import React, { useState } from "react";
import Options from "./Options";
const Towns = ({ town }) => {
    const [townValue, setTownValue] = useState(0);
    const onChangeSelect = (e) => {
        setTownValue(e.target.value);
    };
    return (
        <div className="slection_box">
            <div>
                <label htmlFor="landmark">{"Towns : "}</label>
                <select
                    name="landmark"
                    id="city"
                    onChange={(e) => {
                        onChangeSelect(e);
                    }}
                >
                    {town.map((town, index) => {
                        return <Options key={town.name} item={town} index={index} />;
                    })}
                </select>
            </div>
            <div className="des_box">{town[townValue].description}</div>
        </div>
    );
};

export default Towns;
