import DS from 'ember-data';

export default DS.Model.extend({
  author: DS>attr(),
  text: DS.attr(),
  comments: DS.hasMany('comment', { async: true })
});
