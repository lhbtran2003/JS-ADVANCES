class Song {
    public readonly id: number;
    private _name: string;
    private _length: number;

    constructor(id: number, name: string, length: number) {
        this.id = id;
        this._name = name;
        this._length = length;
    }

    public get name(): string {
        return this._name;
    }

    public set name(value: string) {
        this._name = value;
    }

    public get length(): number {
        return this._length;
    }

    public set length(value: number) {
        this._length = value;
    }
}

const song = new Song(1, "Baby Shark", 1000);

console.log(`Tên bài hát: ${song.name}, Độ dài: ${song.length}`);

song.name = "Like That";
song.length = 200;

console.log(`Tên bài hát sau khi cập nhật: ${song.name}, Độ dài: ${song.length}`);
