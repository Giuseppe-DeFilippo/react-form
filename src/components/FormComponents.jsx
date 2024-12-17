import React, { useState } from "react";

function FormComponent() {
    // [Val, setVal] = useState(null);
    return (
        <div className="input-group mb-3">
            <input
                type="text"
                className="form-control"
                placeholder="titolo"
                aria-label="titolo"
                aria-describedby="button-addon2"
            />
            <button onClick={null}
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
            >
                invio
            </button>
        </div>
    );
}

export default FormComponent;