import * as hbs from 'hbs';

hbs.registerHelper('isSelected', function (isSelected) {
  return isSelected ? 'selected' : '';
});
