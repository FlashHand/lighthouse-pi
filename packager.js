/**
 * Created by R4L on 2017/7/11.
 */
var platform = process.argv[2];
let options = {
  dir:__dirname,
  platform:"linux",
  arch:"armv7l",
  buildVersion:"1",
  prune:true,
  out:'../lighthouse-pi-apps'
}
switch (platform) {
  case 'pi': {

  }
    break;
  case 'mac': {

  }
    break;
  case 'windows': {

  }
  default:
    break;
}
var packager = require('electron-packager')
packager(options, function done_callback (err, appPaths) { /* … */ })