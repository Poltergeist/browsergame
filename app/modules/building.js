var Model = require('fishbone'),

  Building = new Model({
    init: function(data) {
      this.name = data.name;
      this.points = data.points;
      this.level = data.level;
      this.time = data.time;
      this.building = false;
    },
    build: function(tick) {
      if (this.building === false || tick >= this.building + (this.time * this.level)) {
        this.building = tick;
        this.level++;
      }
    }

  });
module.exports = Building;
