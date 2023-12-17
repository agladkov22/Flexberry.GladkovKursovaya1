import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  заявки: DS.belongsTo('i-i-s-gladkov-kursovaya-заявки', { inverse: null, async: false }),
  оборудование: DS.belongsTo('i-i-s-gladkov-kursovaya-оборудование', { inverse: null, async: false }),
  чертежи: DS.belongsTo('i-i-s-gladkov-kursovaya-чертежи', { inverse: null, async: false }),
  техКарты: DS.belongsTo('i-i-s-gladkov-kursovaya-тех-карты', { inverse: 'тчТехКарты', async: false })
});

export let ValidationRules = {
  заявки: {
    descriptionKey: 'models.i-i-s-gladkov-kursovaya-тч-тех-карты.validations.заявки.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  оборудование: {
    descriptionKey: 'models.i-i-s-gladkov-kursovaya-тч-тех-карты.validations.оборудование.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  чертежи: {
    descriptionKey: 'models.i-i-s-gladkov-kursovaya-тч-тех-карты.validations.чертежи.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  техКарты: {
    descriptionKey: 'models.i-i-s-gladkov-kursovaya-тч-тех-карты.validations.техКарты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТчТехКартыE', 'i-i-s-gladkov-kursovaya-тч-тех-карты', {
    
  });
};
