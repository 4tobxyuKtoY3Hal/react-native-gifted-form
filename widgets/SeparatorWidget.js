var React = require('react');
var {
  View
} = require('react-native')

var WidgetMixin = require('../mixins/WidgetMixin.js');
var createReactClass = require('create-react-class');


module.exports = createReactClass({
  mixins: [WidgetMixin],

  getDefaultProps() {
    return {
      type: 'SeparatorWidget',
    };
  },

  render() {
    return (
      <View
        style={this.getStyle('separator')}
        {...this.props}
      />
    );
  },

  defaultStyles: {
    separator: {
      height: 10,
    },
  },

});
