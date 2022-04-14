import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import GrifGrid from "./components/GifGrid";

const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch']);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />
            <ol>
                {categories.map(x =>(
                <GrifGrid key={x} category={x} />
                ))}
            </ol>
        </>
    );
};

export default GifExpertApp;