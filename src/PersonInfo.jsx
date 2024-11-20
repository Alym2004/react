import React, { useState } from 'react';

const PersonInfo = () => {
    const [message, setMessage] = useState("");
    const [position, setPosition] = useState("Junior Developer");

    const handleClick = () => {
        console.log("Кнопка нажата!");  // Проверяем, что кнопка нажимается
        setMessage("Поздравляем с повышением!");
        setPosition("Middle Developer");
    };

    return (
        <div>
            <h1>Alym Yrysmamatov</h1>
            <p>Должность: {position}</p>
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
