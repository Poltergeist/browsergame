var Model = require('fishbone'),
  Building = require('./building'),

  Player = new Model({
    name: 'Phil',
    init: function(data) {
      this.buildings = [];
      data.forEach(function(value) {
        if (value.type == 1) {
          this.buildings.push(new Building(value));
        }
      }, this);

    }

  });
module.exports = Player;
