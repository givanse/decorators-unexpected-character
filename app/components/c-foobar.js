import Component from '@ember/component';
import {
  action,
  computed,
  alias,
} from '@ember-decorators/object';

@classNames('class-one', 'class-two')
class CFoobar extends Component {

  @className 'type';

  constructor() {
    this.showRaw = false;
  }

  @alias('transaction') t;

  @computed('transaction.raw')
  json(raw) {
    const json = JSON.stringify(raw).replace(/,/g, ', ');
    return json;
  }

  @action
  highlight() {
    this.toggleProperty('showRaw');
  }

};

OrderSummary.reopenClass({

  positionalParams: ['transaction'],

});

export default OrderSummary;
