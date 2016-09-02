var React = require('react');

var InfoBoxPlain = React.createClass({
    render: function() {

        var divStyle = {
            marginTop: 10
        }

        var panelHeadStyle = {
            height: 75
        }

        var panelBodyStyle = {
            marginTop: -25,
            height: 100
        }

        return (
            <div style={divStyle} className="col-sm-4">
                <div className="panel">
                    <div style={panelHeadStyle} className="panel panel-heading">
                        <h2>{this.props.content}</h2>
                    </div>
                    <div style={panelBodyStyle} className="panel panel-body">
                        <h5>{this.props.description}</h5>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = InfoBoxPlain;
