import Component from '@ember/component';
import {
  action,
  computed,
} from '@ember-decorators/object';
import {
  alias,
} from '@ember-decorators/object/computed';
import {
  classNames,
  className,
} from '@ember-decorators/component';

@classNames('class-one', 'class-two')
class CFoobar extends Component {

  @className type;

  showRaw = true;

  @alias('transaction') t;

  @computed('transaction.type')
  get type() {
    return this.transaction.type;
  }

  @computed('transaction.raw')
  get json() {
    const json = JSON.stringify(this.transaction.raw).replace(/,/g, ', ');
    return json;
  }

  @action
  highlight() {
    this.toggleProperty('showRaw');
  }

}

CFoobar.reopenClass({

  positionalParams: ['transaction'],

});

export default CFoobar;
