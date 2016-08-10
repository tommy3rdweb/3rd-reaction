import React from 'react';

var ThirdReactionPost = React.createClass({
    rawMarkup: function () {
        return { __html: this.props.data.excerpt.rendered };
    },
    render: function () {
        return (
            <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="card ThirdReactionPost">
                    <img className="card-img-top" src={this.props.data.fi_180x180} style={{width: 100 + '%'}} />
                    <div className="card-block">
                        <h3 className="card-title">{this.props.data.title.rendered}</h3>
                        <div className="card-text" dangerouslySetInnerHTML={ this.rawMarkup() } />
                    </div>
                </div>
            </div>
        );
    }
});
export default ThirdReactionPost;