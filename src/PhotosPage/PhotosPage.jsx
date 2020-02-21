import React from 'react';

class PhotosPage extends React.Component {
    constructor(props) {
        super();
        this.state = {
            photos: []
        };

    }

    componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/photos`)
        .then(res => res.json())
        .then(json => this.setState({photos: json}));
    }

    render() {
        const tags = [];
        const { photos } = this.state;
        if (photos.length > 0) {
            for (let image of photos) {
                tags.push(<div className="mb-3 pics animation all 2">< img className= "img-fluid" src ={image.url} /></div>);
            }
        }
        return (
            <div className="content">
                <div className="gallery" id="gallery">
                    {tags}

                </div>
            </div>
        );
    }
}

export { PhotosPage };