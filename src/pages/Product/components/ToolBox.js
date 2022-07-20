import React from 'react';

const ToolBox = () => {
    return (
        <>
            <div className="row toolbox">
                <div className="col-4">
                    <ul>
                        <li className="catgory-1">
                            <a href="#/">Skateboard</a>
                        </li>
                        <li className="catgory-2">
                            <a href="#/">Decks</a>
                        </li>
                        <li className="catgory-3">
                            <a href="#/">Trucks</a>
                        </li>
                        <li className="catgory-4">
                            <a href="#/">Wheels</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default ToolBox;
