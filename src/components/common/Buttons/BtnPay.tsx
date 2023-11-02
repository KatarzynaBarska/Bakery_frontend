import React from 'react';

import './BtnPay.css';

interface Props {
    action: () => void;
}

export const BtnPay = ({action} : Props) => {
    return <button
        onClick={action}
        className="BtnPay"
    >
        Zapłać
    </button>
}