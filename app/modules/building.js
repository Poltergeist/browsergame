var Model = require('fishbone'),

  Building = new Model({
    init: function(data) {
      this.name = data.name;
      this.points = data.points;
      this.level = data.level;
    }

  });
module.exports = Building;
