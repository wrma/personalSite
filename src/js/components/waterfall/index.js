/*
* @Author: wrma
* @Date:   2017-11-29 22:19:16
* @Last Modified by:   wrma
* @Last Modified time: 2017-11-29 22:48:17
*/
var React = require('react');
var Masonry = require('react-masonry-component');
 
var masonryOptions = {
    transitionDuration: 0
};
 
export default class WaterFall extends React.Component{
    render() {
        var childElements = this.props.elements.map(function(element){
           return (
                <li className="image-element-class">
                    <img src={element.src} />
                </li>
            );
        });
 
        return (
            <Masonry
                className={'my-gallery-class'} // default ''
                elementType={'ul'} // default 'div'
                options={masonryOptions} // default {}
                disableImagesLoaded={false} // default false
                updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
            >
                {childElements}
            </Masonry>
        );
    }
};
