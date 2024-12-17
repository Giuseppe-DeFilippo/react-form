import React, { useState } from "react";

function FormComponent({ titoli, setTitoli }) {
    const [title, setTitle] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim()) {
            setTitoli([...titoli, title]);
            setTitle(""); //questo resetta l input in modo da poter scrivere nuovo titolo direttamente
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-group mb-3">
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="form-control"
                    placeholder="Inserisci titolo"
                    aria-label="Inserisci titolo"
                />
                <button
                    className="btn btn-outline-secondary"
                    type="submit"
                    id="button-addon2"
                >
                    Aggiungi
                </button>
            </div>
        </form>
    );
}

export default FormComponent;