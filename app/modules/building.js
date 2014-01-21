var Model = require('fishbone'),

  Building = new Model({
    init: function(data) {
      try {
        this.name = data.name ? data.name : 'default';
        this.points = data.points ? data.points : 0;
        this.level = data.level ? data.level : 0;
        this.time = data.time ? data.time : 1;
        this.building = false;
      } catch (e) {
        throw e;
      }
    },
    build: function(tick) {
      if (
        this.building === false ||
        tick >= this.building + (this.time * this.level)
        ) {
        this.building = tick;
        this.level++;
      }
    }

  });
module.exports = Building;
