import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import texts from "../texts";


function App() {
    return (
    <div>
        <Header />
    {texts.map(keeperContent => (
        <Note 
            key={keeperContent.id}
            title={keeperContent.title}
            content={keeperContent.content}
        />

    ))}
        <Footer />
    </div>
    );
}
export default App;