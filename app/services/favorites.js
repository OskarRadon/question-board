import Ember from 'ember';

export default Ember.Service.extend({
  favorites: [],
  add(question) {
    this.get('favorites').pushObject(question);
    console.log(favorites); // returns undefined WHYYYYY???
  }
});
