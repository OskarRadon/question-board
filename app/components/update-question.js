import Ember from 'ember';

export default Ember.Component.extend({
  showQuestionUpdate: false,
  actions: {
    showQuestionUpdate() {
      this.set('showQuestionUpdate', true);
    },
    update(question) {
      var params = {
        text: this.get('text'),
        author: this.get('author')
      };
      this.set('showQuestionUpdate', false);
      this.sendAction('update', question, params);
    }
  }
});
