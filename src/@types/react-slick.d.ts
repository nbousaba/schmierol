declare module 'react-slick' {
    import * as React from 'react';

    interface Settings {
        dots?: boolean;
        infinite?: boolean;
        speed?: number;
        slidesToShow?: number;
        slidesToScroll?: number;
        autoplay?: boolean;
        autoplaySpeed?: number;
        arrows?: boolean;
        // Add any other settings you use from react-slick
    }

    export default class Slider extends React.Component<Settings> {}
}
