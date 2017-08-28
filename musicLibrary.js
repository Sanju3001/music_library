
var library = function (name, creator) {
  this.name = name;
  this.creator = creator;
  this.playlists = [];
}

var playlist = function (playListName) {
  this.playListName = playListName;
  this.tracks = [];
  this.trackCount = 0;
}

var track = function (title, rating, length) {
  this.title = title;
  this.rating = rating;
  this.length = length;
}

library.prototype.addPlaylist = function(playlist) {
  this.playlists.push(playlist);
}

playlist.prototype.addTrack = function(track) {
  this.tracks.push(track);
  ++this.trackCount;
}

// playlist.prototype.overallRating = function(tracks) {
//   var totalRating = 0;
//   tracks.forEach(function(track)){
//     totalRating += this.track.rating
//   }
  //console.log(totalRating);
// }

var test = new playlist("testList");

test.addTrack("Saj");

test.addTrack("Anita");

console.log(test);