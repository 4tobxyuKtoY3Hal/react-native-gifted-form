var React = require('react');
var {
  View
} = require('react-native')

var WidgetMixin = require('../mixins/WidgetMixin.js');
var createReactClass = require('create-react-class');

module.exports = createReactClass({
  mixins: [WidgetMixin],

  componentDidMount() {
    this._onChange(this.props.value);
  },

  getDefaultProps() {
    return {
      type: 'HiddenWidget',
    };
  },

  render() {
    return null;
  },

});
