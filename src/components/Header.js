import React, { useState } from "react";

function Header ({ onDarkModeClick, darkModeOn }) {
    return(
        <header>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
        {darkModeOn ? "Dark Mode" : "Light Mode"}
        </button>
      </header>
    )
}
export default Header;