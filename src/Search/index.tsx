import React from 'react';
import Button from '../core/components/Button';
import './styles.scss';

const Search = () => {

    const handleSearch = () => {

    }

    return (
        <div className="search-container">
            <h4 className="search-title">
                Encontre um perfil Github
            </h4>
            <div className="row">
                <div className="col-6 form-group">
                    <input
                        type="text"
                        className="form-control form-input"
                        placeholder="Usuário Github"
                    />
                    <div className="form-action">
                        <Button text="Encontrar" clickHandler={handleSearch} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search;