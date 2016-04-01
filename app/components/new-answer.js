import Ember from 'ember';

export default Ember.Component.extend({
  showAnswerForm: false,
  actions: {
    showAnswerForm() {
      this.set('showAnswerForm', true);
    },

    saveAnswer() {
      var params = {
        author: this.get('author'),
        text: this.get('text'),
        question: this.get('question')
      };
      this.set('showAnswerForm', false);
      this.sendAction('saveAnswer', params);
    }
  }
});
