/* global describe, it, expect */
var Building = require('../app/modules/building');
describe('Buildings', function() {

  it('should return a basic building', function() {
    var building = new Building({
    });
    expect(building).not.toBeUndefined();
    expect(building.name).not.toBeUndefined();
    expect(building.points).not.toBeUndefined();
    expect(building.level).not.toBeUndefined();
    expect(building.time).not.toBeUndefined();
  });
  it('should return a custom building', function() {
    var building = new Building({
      name: 'custom'
    });
    expect(building).not.toBeUndefined();
    expect(building.name).toBe('custom');
  });
  it('should increase the level', function() {
    var building = new Building({
      name: 'custom',
    });
    expect(building).not.toBeUndefined();
    expect(building.level).toBe(0);
    expect(building.building).toBe(false);
    building.build(42);
    expect(building.level).toBe(1);
    expect(building.building).toBe(42);
  });
  it('should increase the level twice', function() {
    var building = new Building({
      name: 'custom',
    });
    expect(building).not.toBeUndefined();
    expect(building.level).toBe(0);
    expect(building.building).toBe(false);
    building.build(42);
    building.build(43);
    expect(building.level).toBe(2);
    expect(building.building).toBe(43);
  });
  it('should increase the level only once', function() {
    var building = new Building({
      name: 'custom',
    });
    expect(building).not.toBeUndefined();
    expect(building.level).toBe(0);
    expect(building.building).toBe(false);
    building.build(42);
    building.build(42);
    expect(building.level).toBe(1);
    expect(building.building).toBe(42);
  });
  it('should increase the build time', function() {
    var building = new Building({
      name: 'custom',
    });
    expect(building).not.toBeUndefined();
    expect(building.level).toBe(0);
    expect(building.building).toBe(false);
    building.build(42);
    expect(building.level).toBe(1);
    building.build(43);
    expect(building.level).toBe(2);
    building.build(44);
    expect(building.level).toBe(2);
    building.build(45);
    expect(building.level).toBe(3);
    building.build(46);
    expect(building.level).toBe(3);
    building.build(47);
    expect(building.level).toBe(3);
    building.build(48);
    expect(building.level).toBe(4);
    expect(building.building).toBe(48);
  });


});
