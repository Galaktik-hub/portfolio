import React from 'react';
import { useNavigate } from 'react-router-dom';

const StickyBackArrow: React.FC = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <button className="sticky-back-arrow" onClick={handleBack}>
            &larr;
        </button>
    );
};

export default StickyBackArrow;