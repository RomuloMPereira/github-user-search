import React from 'react';
import './styles.scss';

type Props = {
    text: string;
    clickHandler?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ text, clickHandler }: Props) => {

    return (
        <div className="d-flex">
            <button className="btn btn-primary btn-icon" onClick={clickHandler}>
                {text}
            </button>
        </div>
    );
}

export default Button;
