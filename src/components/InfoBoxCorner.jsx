var React = require('react');

var InfoBoxCorner = React.createClass({
    render: function() {

        var divStyle = {
            marginTop: 10,
            textAlign: "center",
            color: "white"
        }

        var panelHeadStyle = {
            height: 75,
            background: "orange"
        }
        var panelBodyStyle = {
            height: 95,
            background: "orange"
        }
        var panelStyle = {
            background: "orange"
        }

        return (
            <div style={divStyle} className="col-sm-12">
                <div style={panelStyle} className="panel">
                    <div style={panelHeadStyle} className="panel panel-heading">
                        <h2>{this.props.content}</h2>
                    </div>
                    <div style={panelBodyStyle} className="">
                        <h5>{this.props.description}</h5>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = InfoBoxCorner;
