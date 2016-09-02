var React = require('react');

var InfoBoxLargeInfo = React.createClass({
    render: function() {

        var divStyle = {
            color: "white",
            background: "grey",
            textAlign: "center",
            height: 100
        }

        return (
            <div style={divStyle} className="col-sm-12">
                <div style={divStyle} className="panel">
                    <h2>{this.props.content}</h2>
                    <h5>{this.props.description}</h5>
                </div>
            </div>
        );
    }
});

module.exports = InfoBoxLargeInfo;
