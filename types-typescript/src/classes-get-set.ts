export {}

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panomara,
}

// get and set

class Picture {
    // Properties
    private _id: number
    private _title: string
    private _orientation: PhotoOrientation

    public constructor(
        id: number,
        title: string,
        orientation: PhotoOrientation,
    ) {
        this._id = id
        this._title = title
        this._orientation = orientation
    }

    get id() {
        return this._id
    }

    set id(id: number) {
        this._id = id
    }
    get title() {
        return this._title
    }

    set title(title: string) {
        this._title = title
    }
    get orientation() {
        return this._orientation
    }

    set orientation(o: number) {
        this._orientation = o
    }

    // Behaviour
    public toString() {
        return `[id: ${this._id}, title: ${this._title}, orientation: ${this._orientation}]`
    }
}

class Album {
    private _id: number
    private _title: string
    private _pictures: Picture[]

    public constructor(id: number, title: string) {
        this._id = id
        this._title = title
        this._pictures = []
    }

    get id() {
        return this._id
    }

    set id(id: number) {
        this._id = id
    }

    get title() {
        return this._title
    }

    set title(t: string) {
        this._title = t
    }

    public addPicture(picture: Picture) {
        this._pictures.push(picture)
    }
}

const album: Album = new Album(1, 'Personal Picture')

const picture: Picture = new Picture(
    1,
    'Platzi session',
    PhotoOrientation.Square,
)

album.addPicture(picture)

console.log(album)

// Acceding to the member public

console.log(picture.id) // get id()

picture.id = 100 // private, set id(100)
picture.title = 'Another title' // private
album.title = 'Personal Activities' // private
console.log(album)
