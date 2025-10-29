import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import Container from './Container.jsx';
import PopupForm from './PopupForm.jsx';
import Calculator from './Calculator.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import './Calculator.css';
import './Todolist.css';
import Todolist from "./Todolist.jsx";
import Weather from "./WeatherApp.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
        <Container />
        <PopupForm />
        <Calculator />
        <Todolist />
        <Weather />
    </StrictMode>
);
