import React, { useState } from 'react';
import Button from '../core/components/Button';
import { UserResponse } from '../core/types/UserResponse';
import { makeRequest } from '../core/utils/request';
import ImageLoader from './components/Loader/ImageLoader';
import InfoLoader from './components/Loader/InfoLoader';
import Result from './components/Result';
import './styles.scss';

const Search = () => {

    const [user, setUser] = useState('');
    const [userResponse, setUserResponse] = useState<UserResponse>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [hasError, setHasError] = useState<boolean>(false);

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUser(event.target.value);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);
        setHasError(false);

        makeRequest({ url: user })
            .then((response) => setUserResponse(response.data))
            .catch((error) => {
                console.error(error);
                setHasError(true);
            })
            .finally(() => setIsLoading(false));
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="search-container">
                    <h4 className="search-title">
                        Encontre um perfil Github
                    </h4>
                    <div className="row">
                        <div className="col-6 form-group">
                            <input
                                name="user"
                                value={user}
                                type="text"
                                className="form-control form-input"
                                onChange={handleOnChange}
                                placeholder="Usuário Github"
                            />
                            <div className="form-action">
                                <Button text="Encontrar" />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            {isLoading && (<div className="d-flex loader-container">
                <ImageLoader />
                <InfoLoader />
            </div>)}
            {(userResponse && !hasError && !isLoading) && <Result user={userResponse} />}
            {hasError && <div className="error"><h3>Usuário não encontrado</h3></div>}

        </>
    );
}

export default Search;