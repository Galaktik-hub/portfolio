import React from 'react';

const StickyBackArrow: React.FC = () => {
    const handleBack = () => {
        window.location.href = '/';
    };

    return (
        <button className="sticky-back-arrow" onClick={handleBack}>
            &larr;
        </button>
    );
};

export default StickyBackArrow;