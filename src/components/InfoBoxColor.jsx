var React = require('react');

var InfoBoxColor = React.createClass({
    render: function() {

        var divStyle = {
            marginTop: 20,
            color: "white"
        }

        var panelStyle = {
            height: 200
        }

        var headingColor = {}
        headingColor.background = this.props.color;

        return (
            <div style={divStyle} className="col-sm-12">
                <div style={panelStyle} className="panel">
                    <div style={headingColor} className="panel panel-heading">
                            <h5>{this.props.description}</h5>
                            <h2>{this.props.content}</h2>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = InfoBoxColor;
