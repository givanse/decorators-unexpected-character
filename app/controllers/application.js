import Controller from '@ember/controller';

export default Controller.extend({

  transaction: null,

  init() {
    this._super(...arguments);
    this.transaction = {
      one: '111',
      type: 'fizzbuzz',
      raw: {
        a: 'aaa',
        b: 'bbb'
      }
    };
  }

});
