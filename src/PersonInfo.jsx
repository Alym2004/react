import React, { useState } from "react";

const PersonInfo = () => {
    const [message, setMessage] = useState("");

    const handleClick = () => {
        setMessage("Сообщение йоуу");
    };

    return (
        <div>
            <h1>Alym Yrysmamtov</h1>
            <p>Должность: Junior Developer</p>
            <p>Компания: Mega</p>
            <ul>
                <li>Опыт: 2 года</li>
                <li>Образование: Бакалавр информатики</li>
                <li>Навыки: React, Node.js, Java</li>
            </ul>
            {message && <p>{message}</p>}
            <button onClick={handleClick}>Повысить в должности</button>

        </div>
    );
};

export default PersonInfo;
