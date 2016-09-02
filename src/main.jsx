//main entry point for application
//from here calls other components to build application
var React = require('react');
var ReactDOM = require('react-dom');
var InfoBoxPlain = require('./components/InfoBoxPlain.jsx');
var InfoBoxCorner = require('./components/InfoBoxCorner.jsx');
var InfoBoxColor = require('./components/InfoBoxColor.jsx');
var InfoBoxLarge = require('./components/InfoBoxLarge.jsx');

//Top
ReactDOM.render(<InfoBoxPlain
    description="New followers added this month"
    content="20"/>, document.getElementById('monthlyFollowers'));
ReactDOM.render(<InfoBoxPlain
    description="Average monthly income"
    content="$ 1250"/>, document.getElementById('monthlyIncome'));
ReactDOM.render(<InfoBoxPlain
    description="Yearly income goal"
    content="$ 13685"/>, document.getElementById('yearlyIncome'));

//Corner
ReactDOM.render(<InfoBoxCorner
    description="Paris"
    content="18*"/>, document.getElementById('weather'));

//Body
var bodyPanelVals = [
    {
        description: "Shot Views",
        content: 15080
    },
    {
        description: "Likes",
        content: 12000
    },
    {
        description: "Comments",
        content: 5100
    }
];

ReactDOM.render(<InfoBoxLarge
    values={bodyPanelVals}
    color="blue"/>, document.getElementById('bodyBlue'));

ReactDOM.render(<InfoBoxLarge
    values={bodyPanelVals}
    color="purple"/>, document.getElementById('bodyPurple'));

//Sidebar
ReactDOM.render(<InfoBoxColor
    description="New visitors"
    content="1.5k"
    color="blue"/>, document.getElementById('visitors'));

ReactDOM.render(<InfoBoxColor
    description="Bounce rate"
    content="50%"
    color="purple"/>, document.getElementById('bounce'));

ReactDOM.render(<InfoBoxColor
    description="Searches"
    content="28%"
    color="red"/>, document.getElementById('searches'));

ReactDOM.render(<InfoBoxColor
    description="Traffic"
    content="140.5 kb"
    color="green"/>, document.getElementById('traffic'));
