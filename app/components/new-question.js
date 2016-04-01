import Ember from 'ember';

export default Ember.Component.extend({
  showQuestionForm: false,
  actions: {
    showQuestionForm() {
      this.set('showQuestionForm', true);
    },
    saveQuestion() {
      var params = {
        text: this.get('text'),
        author: this.get('author')
      };
      this.set('showQuestionForm', false);
      this.sendAction('saveQuestion', params);
    }
  }
});
