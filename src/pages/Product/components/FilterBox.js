import { display } from '@mui/system';
import React, { useState } from 'react';

const FilterBox = () => {
    const [price, setPrice] = useState(false);
    const [colour, setColour] = useState(false);
    const [brand, setBrand] = useState(false);
    const [sortby, setSortby] = useState(false);
    const [searchInput, setSearchInput] = useState(false);

    return (
        <>
            <div className="row filterBox">
                <div className="col-10 d-flex justify-content-center">
                    <div className="col-3">
                        <div
                            className="filter"
                            onClick={() => {
                                setPrice(!price);
                            }}
                        >
                            <h5>Price</h5>
                            <span
                                style={{
                                    display: price === false ? 'block' : 'none',
                                }}
                                id="span1"
                                onClick={() => {
                                    setPrice(!price);
                                }}
                            >
                                <i className="fa-solid fa-angle-down"></i>
                            </span>
                            <span
                                style={{
                                    display: price === false ? 'none' : 'block',
                                }}
                                id="span2"
                                onClick={() => {
                                    setPrice(!price);
                                }}
                            >
                                <i className="fa-solid fa-angle-up"></i>
                            </span>
                        </div>

                        <div
                            className="priceFilter w-100"
                            style={{
                                display: price === false ? 'none' : 'block',
                            }}
                        >
                            <input
                                className="w-100"
                                type="range"
                                name=""
                                id=""
                            />
                        </div>
                    </div>
                    <div className="col-3">
                        <div
                            className="filter"
                            onClick={() => {
                                setColour(!colour);
                            }}
                        >
                            <h5>Colour</h5>
                            <span
                                style={{
                                    display:
                                        colour === false ? 'block' : 'none',
                                }}
                                onClick={() => {
                                    setColour(!colour);
                                }}
                            >
                                <i className="fa-solid fa-angle-down"></i>
                            </span>
                            <span
                                style={{
                                    display:
                                        colour === false ? 'none' : 'block',
                                }}
                                onClick={() => {
                                    setColour(!colour);
                                }}
                            >
                                <i className="fa-solid fa-angle-up"></i>
                            </span>
                        </div>

                        <div
                            className="colorFilter"
                            style={{
                                display: colour === false ? 'none' : 'block',
                            }}
                        >
                            <div className="colorBox pt-2">
                                <div className="colorBoxCheckbox">
                                    <input type="checkbox" />
                                    <span>White</span>
                                </div>
                                <div className="color">
                                    <div className="whiteBox"></div>
                                </div>
                            </div>

                            <div className="colorBox">
                                <div className="colorBoxCheckbox">
                                    <input type="checkbox" />
                                    <span>Black</span>
                                </div>
                                <div className="color">
                                    <div className="blackBox"></div>
                                </div>
                            </div>

                            <div className="colorBox">
                                <div className="colorBoxCheckbox">
                                    <input type="checkbox" />
                                    <span>Blue</span>
                                </div>
                                <div className="color">
                                    <div className="blueBox"></div>
                                </div>
                            </div>

                            <div className="colorBox">
                                <div className="colorBoxCheckbox">
                                    <input type="checkbox" />
                                    <span>Green</span>
                                </div>

                                <div className="color">
                                    <div className="greenBox"></div>
                                </div>
                            </div>

                            <div className="colorBox">
                                <div className="colorBoxCheckbox">
                                    <input type="checkbox" />
                                    <span>Yellow</span>
                                </div>

                                <div className="color">
                                    <div className="yellowBox"></div>
                                </div>
                            </div>

                            <div className="colorBox">
                                <div className="colorBoxCheckbox">
                                    <input type="checkbox" />
                                    <span>Orange</span>
                                </div>

                                <div className="color">
                                    <div className="orangeBox"></div>
                                </div>
                            </div>

                            <div className="colorBox">
                                <div className="colorBoxCheckbox">
                                    <input type="checkbox" />
                                    <span>Red</span>
                                </div>

                                <div className="color">
                                    <div className="redBox"></div>
                                </div>
                            </div>

                            <div className="colorBox">
                                <div className="colorBoxCheckbox">
                                    <input type="checkbox" />
                                    <span>Pink</span>
                                </div>

                                <div className="color">
                                    <div className="pinkBox"></div>
                                </div>
                            </div>

                            <div className="colorBox">
                                <div className="colorBoxCheckbox">
                                    <input type="checkbox" />
                                    <span>Purple</span>
                                </div>

                                <div className="color">
                                    <div className="purpleBox"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-3">
                        <div
                            className="filter"
                            onClick={() => {
                                setBrand(!brand);
                            }}
                        >
                            <h5>Brand</h5>
                            <span
                                style={{
                                    display: brand === false ? 'block' : 'none',
                                }}
                                onClick={() => {
                                    setBrand(!brand);
                                }}
                            >
                                <i className="fa-solid fa-angle-down"></i>
                            </span>
                            <span
                                style={{
                                    display: brand === false ? 'none' : 'block',
                                }}
                                onClick={() => {
                                    setBrand(!brand);
                                }}
                            >
                                <i className="fa-solid fa-angle-up"></i>
                            </span>
                        </div>

                        <div
                            className="brandFilter"
                            style={{
                                display: brand === false ? 'none' : 'block',
                            }}
                        >
                            <div className="brandBox pt-2">
                                <input type="checkbox" />
                                <span>POLAR</span>
                            </div>

                            <div className="brandBox">
                                <input type="checkbox" />
                                <span>PALACE</span>
                            </div>

                            <div className="brandBox">
                                <input type="checkbox" />
                                <span>FUCKING AWESOME</span>
                            </div>

                            <div className="brandBox">
                                <input type="checkbox" />
                                <span>HOCKEY</span>
                            </div>

                            <div className="brandBox">
                                <input type="checkbox" />
                                <span>GX1000</span>
                            </div>

                            <div className="brandBox">
                                <input type="checkbox" />
                                <span>SANTA CRUZ</span>
                            </div>

                            <div className="brandBox">
                                <input type="checkbox" />
                                <span>CREATURE</span>
                            </div>

                            <div className="brandBox">
                                <input type="checkbox" />
                                <span>SOUR</span>
                            </div>

                            <div className="brandBox">
                                <input type="checkbox" />
                                <span>ALLTIMERS</span>
                            </div>

                            <div className="brandBox">
                                <input type="checkbox" />
                                <span>Paris</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-3">
                        <div
                            className="filter"
                            onClick={() => {
                                setSortby(!sortby);
                            }}
                        >
                            <h5>Sort by</h5>
                            <span
                                style={{
                                    display:
                                        sortby === false ? 'block' : 'none',
                                }}
                                onClick={() => {
                                    setSortby(!sortby);
                                }}
                            >
                                <i className="fa-solid fa-angle-down"></i>
                            </span>
                            <span
                                style={{
                                    display:
                                        sortby === false ? 'none' : 'block',
                                }}
                                onClick={() => {
                                    setSortby(!sortby);
                                }}
                            >
                                <i className="fa-solid fa-angle-up"></i>
                            </span>
                        </div>

                        <div
                            className="sortbyFilter"
                            style={{
                                display: sortby === false ? 'none' : 'block',
                            }}
                        >
                            <div className="sortbyBox pt-2">
                                <span>Recommended</span>
                            </div>

                            <div className="sortbyBox">
                                <span>Categories</span>
                            </div>

                            <div className="sortbyBox">
                                <span>Name asc (A-Z)</span>
                            </div>

                            <div className="sortbyBox">
                                <span>Name desc (Z-A)</span>
                            </div>

                            <div className="sortbyBox">
                                <span>Price Lowest</span>
                            </div>

                            <div className="sortbyBox">
                                <span>Price Highest</span>
                            </div>

                            <div className="sortbyBox pb-2">
                                <span>Sales</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-2 d-flex search">
                    <input
                        className="col-10 search-input"
                        type="search"
                        placeholder=" Search"
                        aria-label="Search"
                        style={{ width: searchInput === false ? '40%' : '80%' }}
                        onMouseOver={() => {
                            setSearchInput(!searchInput);
                        }}
                        onMouseOut={() => {
                            setSearchInput(!searchInput);
                        }}
                    />
                    <button className="col-2 search-btn">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </>
    );
};

export default FilterBox;