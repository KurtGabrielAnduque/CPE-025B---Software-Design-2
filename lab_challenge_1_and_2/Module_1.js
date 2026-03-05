 let Painters = [
    {
        title: 'Mona Lisa',
        artist: 'Leonardo da Vinci',
        date: 1503
    },
    {
        title: 'The Last Supper',
        artist: 'Leonardo da Vinci',
        date: 1495
    },
    {
        title: 'The Starry Night',
        artist: 'Vincent van Gogh',
        date: 1889
    },
    {
        title: 'The Scream',
        artist: 'Edvard Munch',
        date: 1893
    },
    {
        title: 'Guernica',
        artist: 'Pablo Picasso',
        date: 1937
    },
    {
        title: 'The Kiss',
        artist: 'Gustav Klimt',
        date: 1907
    },
    {
        title: 'Girl With a Pearl Earring',
        artist: 'Johannes Vermeer',
        date: 1665
    },
    {
        title: 'The Birth of Venus',
        artist: 'Sandro Botticelli',
        date: 1485
    },
    {
        title: 'Las Meninas',
        artist: 'Diego Velázquez',
        date: 1656
    },
    {
        title: 'Creation of Adam',
        artist: 'Michelangelo',
        date: 1512
    }
];

/**
images.forEach(image => {console.log(`${image.title}
(${image.artist}, ${image.date})`)});

*/

/** 
let Image = function(title, artist, date) {
    this.title = title;
    this.artist = artist;
    this.date = date;
}

let getImage = function(title, artist, date) {
    return {
        title,
        artist,
        date
    }
}


let images = [
    {
        title: 'Mona Lisa',
        artist: 'Leonardo da Vinci',
        date: 1503
    },
    {
        title: 'The Last Supper',
        artist: 'Leonardo da Vinci',
        date: 1495
    },
    {
        title: 'The Starry Night',
        artist: 'Vincent van Gogh',
        date: 1889
    },
    {
        title: 'The Scream',
        artist: 'Edvard Munch',
        date: 1893
    },
    {
        title: 'Guernica',
        artist: 'Pablo Picasso',
        date: 1937
    },
    {
        title: 'The Kiss',
        artist: 'Gustav Klimt',
        date: 1907
    },
    {
        title: 'Girl With a Pearl Earring',
        artist: 'Johannes Vermeer',
        date: 1665
    },
    {
        title: 'The Birth of Venus',
        artist: 'Sandro Botticelli',
        date: 1485
    },
    {
        title: 'Las Meninas',
        artist: 'Diego Velázquez',
        date: 1656
    },
    {
        title: 'Creation of Adam',
        artist: 'Michelangelo',
        date: 1512
    }
]

let images1 = [];

let images2 = [];

images.forEach(image => images1.push(new Image(image.title, image.artist, image.date)));
images1.forEach(image => images2.push(getImage(image.title, image.artist, image.date)));
images2.forEach(image => {console.log(`${image.title} (${image.artist}, ${image.date})`)});
*/


// Create the class
let images = {
    list: [],
    contains: function(title) {
        let retVal = false;
        for(image of this.list) {
            if(image.title === title) {
                retVal = true;
                break;
            }
        }
        return retVal;
    },
    add: function(title, artist, date) {
        if(!this.contains(title)) {
            this.list.push(new Image(title, artist, date));
        }
    },

    show: function(image){
        image.forEach(image => {console.log(`${image.title} (${image.artist}, ${image.date})`)})
    },
    
    clear: function(image){
        for (const key in image) {
            if (Object.prototype.hasOwnProperty.call(image, key)) {
                delete image[key];
            }
        }
    },
    //  which takes three arguments (title, artist, and date) and if it finds an image with the given title in the list, it changes its artist and date properties;
    edit: function(title, artist, date) {
        for(image of this.list) {
            if(image.title === title) {
                image.artist = artist;
                image.date = date;
                break;
            }
        }
    },
    // which takes the title argument and if it finds a picture with this title in the list, it deletes it (to delete a list element, use the splice method)
    delete: function(title) {
        for(let i=0; i < this.list.length; i++) {
            if(this.list[i].title === title) {
                this.list.splice(i,1);
                break;
            }
        }
    }

}
/**
console.log('After adding')
images.add('Mona Lisa', 'Leonardo da Vinci', 1503);
images.add('The Last Supper', 'Leonardo da Vinci', 1495);
images.add('The Starry Night', 'Vincent van Gogh', 1889);
images.add('Mona Lisa', 'Leonardo da Vinci', 1503);
images.show(Painters);

// -> Mona Lisa (Leonardo da Vinci, 1503)
// -> Last Supper (Leonardo da Vinci, 1495)
// -> The Starry Night (Vincent van Gogh, 1889)
console.log('After deleting')
images.clear(Painters);
images.show(Painters); */


let Image = function(title, artist, date) {
    this.title = title;
    this.artist = artist;
    this.date = date;
}

Image.prototype.show = function() {
    console.log(`${this.title} (${this.artist}, ${this.date})`);
}

images.show = function(title) {
    for(image of this.list) {
        image.show();
    }
}

images.edit = function(title, artist, date) {
    for(image of this.list) {
        if(image.title === title) {
            image.artist = artist;
            image.date = date;
            break;
        }
    }
}

images.delete = function(title) {
    for(let i=0; i < this.list.length; i++) {
        if(this.list[i].title === title) {
            this.list.splice(i,1);
            break;
        }
    }
}

images.add('Mona Lisa', 'Leonardo da Vinci', 1503);
images.add('The Last Supper', 'Leonardo da Vinci', 1495);
images.add('The Starry Night', 'Vincent van Gogh', 1889);
images.edit('Mona Lisa', 'Leonardo da Vinci', 1504);
images.delete('The Last Supper');
images.show();
// -> Mona Lisa (Leonardo da Vinci, 1504)
// -> The Starry Night (Vincent van Gogh, 1889)
