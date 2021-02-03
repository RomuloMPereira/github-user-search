import React from 'react';
import Button from '../../../core/components/Button';
import './styles.scss';

const Result = () => {

    return (
        <div className="result-container">
            <div className="row">
                <div className="col-3 avatar-container">
                    <img src="https://avatars.githubusercontent.com/u/41589933?v=4" alt="Avatar" className="avatar" />
                    <Button text="Ver perfil" />
                </div>
                <div className="col-8 info-container">
                    <div className="d-flex">
                        <div className="info-top">Repositórios públicos: 62</div>
                        <div className="info-top">Seguidores: 127</div>
                        <div className="info-top">Seguindo: 416</div>
                    </div>
                    <div className="info-container-main">
                        <h3 className="info-title">Informações</h3>
                        <div className="info">
                            <strong>Empresa:</strong> @ZupIT
                        </div>
                        <div className="info">
                            <strong>Website/Blog:</strong> https://thewashington.dev
                        </div>
                        <div className="info">
                            <strong>Localidade:</strong> Uberlândia
                        </div>
                        <div className="info">
                            <strong>Membro desde:</strong> 19/10/2013
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Result;