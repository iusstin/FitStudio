import React from 'react';
import "./Block.css";

function ImageBlock(props) {
    let className = "image-block ";
    if (props.className) {
        className += props.className;
    }
    return (
        <div className={className} >
            <div className="image-block-wrapper">
                <img className="image-block-img" src={props.img} />
            </div>
            <div>
                <a className="image-block-link" href={props.training_link} target="_blank"> {props.training_type} </a>
            </div>
        </div>
    );
}
//<h3 className="image-block-title"> {props.training_type} </h3>
export default ImageBlock;