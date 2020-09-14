import React from 'react';

const TitleBanner = props => {
    const {title} = props;
    return (
        <div className="title-banner__container" data-test="title-banner__container">
            <h1 className="title-banner__title" data-test="title-banner__title">{title}</h1>
        </div>
    )
}

export default TitleBanner;
