import React from 'react';

const PopupSearchBox = () => {
    return (
        <>
        <div id="dl-popup-search-box">
            <div className="box-inner-wrap d-flex align-items-center">
                <form id="form" action="#" method="get" role="search">
                    <input id="popup-search" type="text" name="s" placeholder="Type keywords here..."/>
                    <button id="popup-search-button" type="submit" name="submit"><i className="ti-search"></i></button>
                </form>
            </div>
        </div>
        </>
    );
};

export default PopupSearchBox;