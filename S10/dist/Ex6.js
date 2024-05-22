"use strict";
class Song {
    constructor(id, name, length) {
        this.id = id;
        this._name = name;
        this._length = length;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get length() {
        return this._length;
    }
    set length(value) {
        this._length = value;
    }
}
const song = new Song(1, "Baby Shark", 1000);
console.log(`Tên bài hát: ${song.name}, Độ dài: ${song.length}`);
song.name = "Like That";
song.length = 200;
console.log(`Tên bài hát sau khi cập nhật: ${song.name}, Độ dài: ${song.length}`);
