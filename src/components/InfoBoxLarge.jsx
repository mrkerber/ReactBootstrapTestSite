var React = require('react');
var InfoBoxLargeInfo = require('./InfoBoxLargeInfo.jsx');

var InfoBoxLarge = React.createClass({
    render: function() {

        var divStyle = {
            marginTop: 20
        }

        var footerStyle = {
            height: 100,
            background: "grey"
        }

        var bodyStyle = {
            height: 350,
        }
        bodyStyle.background = this.props.color;

        return (
            <div className="container col-sm-12">
                <div className="row">
                    <div style={divStyle} className="col-sm-12">
                        <div style={bodyStyle}></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <div style={footerStyle}>
                            <div className="row">
                                <div className="col-xs-4">
                                    <InfoBoxLargeInfo content={this.props.values[0].content} description={this.props.values[0].description} />
                                </div>
                                <div className="col-xs-4">
                                    <InfoBoxLargeInfo content={this.props.values[1].content} description={this.props.values[1].description} />
                                </div>
                                <div className="col-xs-4">
                                    <InfoBoxLargeInfo content={this.props.values[2].content} description={this.props.values[2].description} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*This is how you comment*/}
            </div>
        );
    }
})

module.exports = InfoBoxLarge;
