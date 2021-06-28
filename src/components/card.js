import React from 'react'

export default function Card(props) {
    let newClassName = `color_bg ${props.alt}`
    let bg_img = `url(${props.images})`
    let url = `${props.url}`
    let { title, price, bdt} = props
    return (

        <div className="card">
            <div className="warpper">
                <div className={newClassName}></div>
                <a href={url} target="_blank" rel="noopener noreferrer">
                <div className="card_img" style={{ "backgroundImage": bg_img }}></div></a>
                <div className="cardInfo">
                    <h1>{title}</h1>
                    <div className="action">
                     <div className="priceGroup">
                            <p className="price newPrice">{bdt}{price}</p>
                      </div>
                        <div className="cart">
                            <svg className="outCart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                                <path d="M2 6h10l10 40h32l8-24H16"></path>
                                <circle cx="23" cy="54" r="4"></circle>
                                <circle cx="49" cy="54" r="4"></circle>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
