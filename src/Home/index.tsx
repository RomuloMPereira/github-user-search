import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../core/components/Button';
import './styles.scss';

const Home = () => {

    const history = useHistory();

    const handleStart = () => {
        history.push('/search');
    }

    return (
        <div className="home-container">
            <div className="row home-content">
                <div className="col-10">
                    <h1 className="text-title">
                        Desafio do Capítulo 3, Bootcamp DevSuperior
                    </h1>
                    <h4 className="text-description">
                        Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior.
                        <br />Favor observar as instruções passadas no capítulo sobre a elaboração deste projeto.
                        <br />Este design foi adaptado a partir de Ant Design System for Figma, de Mateusz Wierzbicki: antforfigma@gmail.com
                    </h4>
                    <Button text="começar" clickHandler={handleStart} />
                </div>
            </div>
        </div>
    );
}

export default Home;