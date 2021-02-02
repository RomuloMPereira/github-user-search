import React from 'react';
import './styles.scss';

const Home = () => {

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
                    <button className="btn btn-primary">Começar</button>
                </div>
            </div>
        </div>
    );
}

export default Home;