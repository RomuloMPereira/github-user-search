import React from 'react';
import Button from '../../../core/components/Button';
import { UserResponse } from '../../../core/types/UserResponse';
import './styles.scss';

type Props = {
    user?: UserResponse;
}

const Result = ({ user }: Props) => {

    const clickHandler = () => {
        window.location.href = user?.html_url || 'https://github.com/';
    }

    return (
        <div className="result-container">
            <div className="row">
                <div className="col-3 avatar-container">
                    <img src={user?.avatar_url} alt="Avatar" className="avatar" />
                    <Button text="Ver perfil" clickHandler={clickHandler} />
                </div>
                <div className="col-8 info-container">
                    <div className="d-flex">
                        <div className="info-top">Repositórios públicos: {user?.public_repos}</div>
                        <div className="info-top">Seguidores: {user?.followers}</div>
                        <div className="info-top">Seguindo: {user?.following}</div>
                    </div>
                    <div className="info-container-main">
                        <h3 className="info-title">Informações</h3>
                        <div className="info">
                            <strong>Empresa:</strong> {user?.company}
                        </div>
                        <div className="info">
                            <strong>Website/Blog:</strong> {user?.blog}
                        </div>
                        <div className="info">
                            <strong>Localidade:</strong> {user?.location}
                        </div>
                        <div className="info">
                            <strong>Membro desde:</strong> {user?.created_at}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Result;