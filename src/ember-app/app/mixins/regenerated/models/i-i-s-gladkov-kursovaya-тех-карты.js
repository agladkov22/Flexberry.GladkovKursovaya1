import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  номерКарты: DS.attr('number'),
  тчТехКарты: DS.hasMany('i-i-s-gladkov-kursovaya-тч-тех-карты', { inverse: 'техКарты', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-gladkov-kursovaya-тех-карты.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номерКарты: {
    descriptionKey: 'models.i-i-s-gladkov-kursovaya-тех-карты.validations.номерКарты.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  тчТехКарты: {
    descriptionKey: 'models.i-i-s-gladkov-kursovaya-тех-карты.validations.тчТехКарты.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТехКартыE', 'i-i-s-gladkov-kursovaya-тех-карты', {
    номерКарты: attr('Номер карты', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    тчТехКарты: hasMany('i-i-s-gladkov-kursovaya-тч-тех-карты', 'Тч тех карты', {
      
    })
  });

  modelClass.defineProjection('ТехКартыL', 'i-i-s-gladkov-kursovaya-тех-карты', {
    номерКарты: attr('Номер карты', { index: 0 }),
    дата: attr('Дата', { index: 1 })
  });
};
