const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000
const lore = {
    "alik'r desert lore": {
        "motalion necropolis report": {
            author: 'Maffud',
            location: ['Motalion Necropolis']
        },
        "redguards, history and heroes, v. 1": {
            author: '',
            location: ['Northwest of Sentinel Wayshrine']
        },
        "redguards, history and heroes, v. 2": {
            author: '',
            location: ["In a tent on the west side of Leki's Blade"]
        },
        "redguards, history and heroes, v. 3": {
            author: 'Destri Melarg',
            location: ['Satakalaam']
        },
        "sacrilege and mayhem in the alik'r": {
            author: 'Doctor Tazhim of the Bureau of Outlander Affairs',
            location: ["Morwha's Bounty"]
        },
        "sentinel, the jewel of alik'r": {
            author: 'The Unveiled Azadiyeh, Songbird of Satakalaam',
            location: ['Sentinel']
        },
        "the salas en expedition": {
            author: 'Lady Clarisse Laurent',
            location: ['Salas En']
        },
        "tu'whacca's prayer": {
            author: '',
            location: ["Tu'whacca's Throne"]
        },
        "varieties of faith, crown redguards": {
            author: 'Brother Mikhael Karkuxor of the Imperial College',
            location: ['Bergama']
        },
        "varieties of faith, the forebears": {
            author: 'Brother Mikhael Karkuxor of the Imperial College',
            location: ['Sentinel Docks']
        }
    },
    'auridon lore': {
        "crimes of the daggerfall covenant": {
            author: "Aicantar of Shimmerene, Sapiarch of Indoctrination",
            location: ['Castle Rilis', 'The Banished Cells']
        },
        "fang of the sea vipers": {
            author: "Telenger the Artificer",
            location: ['One the shore to the west of Greenwater Wayshrine']
        },
        "kinlord rilis and the mages guild": {
            author: "High Incunabulist Valaste of the Mages Guild",
            location: ['Firsthold Castle in Firsthold']
        },
        "life in the eagle's shadow": {
            author: '',
            location: ['Between North Beacon and Torinaan']
        },
        "regarding the ebonheart pact": {
            author: 'Aicantar of Shimmerene, Sapiarch of Indoctrination',
            location: ['Between Firsthold, Torinaan and Vafe Dolmen']
        },
        "thalmor handbill": {
            author: 'Aicantar of Shimmerene, Sapiarch of Indoctrination',
            location: ['Greenwater Cove', 'Summerset, Under a tree south of  Shimmerene where the path turns East']
        },
        "the lay of firsthold": {
            author: '',
            location: ['Surrounding the Isle of Contemplation']
        },
        "the rise of queen ayrenn": {
            author: 'Nuulehtel of Skywatch',
            location: ['College of Aldmeri Propriety and parts north.']
        },
        "varieties of faith: the high elves": {
            author: 'Brother Mikhael Karkuxor of the Imperial College',
            location: ['College Wayshrine', 'Summerset, South of Rellenthil on the ledge of a small shrine in the hills']
        },
        "why don the veil?": {
            author: '',
            location: ['Ezduiin']
        },
    },
    'bangkorai lore': {
        'a life barbaric and brutal': {
            author: 'Arthenice Belloq',
            location: ['Jackdaw Cove']
        }, 'aspects of lord hircine': {
            author: 'Juno Procillus, Academy of Chorrol',
            location: ['Northglen']
        }, 'bangkorai, shield of high rock': {
            author: 'King Eamond',
            location: ['Viridian Woods']
        }, 'living with lycanthropy': {
            author: '',
            location: ['East of Evermore']
        }, 'the glenmoril wyrd': {
            author: 'Lady Cinnabar of Taneth',
            location: []
        }, 'the legend of fallen grotto': {
            author: '',
            location: []
        }, 'the posting of the hunt': {
            author: '',
            location: ['Surrounding Silaseli Ruins']
        }, 'the true-told tale of hallin, pt. 1': {
            author: "Prince Fahara'jad",
            location: ['Halcyon Lake']
        }, 'the true-told tale of hallin, pt. 2': {
            author: '',
            location: ['Jackdaw Cove']
        }, 'the viridian sentinel': {
            author: '',
            location: ['Northwest of Evermore']
        }
    },
    'biographies': {
        'ayrenn: the unforeseen queen': {
            author: 'Headmaster Tanion of the College of Aldmeri Propriety',
            location: ["Red Ruby Cave, south of Endare"]
        }, 'galerion the mystic': {
            author: '',
            location: ['Quendeluun', 'Farwatch Tower', "Armature's Upheaval"]
        }, 'great harbingers of the companions': {
            author: 'Swyk the Long-Sighted',
            location: ['Ezduiin', 'Aldcroft']
        }, 'jorunn the skald-king': {
            author: 'Helgreir Lute-Voice, Bard of Windhelm',
            location: ['Dwynnarth Ruins', "Stonefalls (south of Davon's Watch)", "Davon's Watch", 'Skywatch']
        }, "the all-beneficent king fahara'jad": {
            author: '',
            location: ["East of Fort Warden Lumbermill, on a wooden platform built into a cliff face"]
        }, 'the illusion of death': {
            author: '',
            location: ['Errinorne Isle', "Tangle Rock, on a crate in the middle of the camp"]
        }, 'trials of saint alessia': {
            author: '',
            location: ["Auridon: West of Mathiisen South of Mathiisen bridge, on the road leading to the town. South of Calambar Dolmen North of Calambar Dolmen Glenumbra: South of Eagle's Brook (nearby Guard Luc) Bloodthorn-Occupied House, Eagle's Brook Northern end of Westtry Stonefalls: Left hand side of tower, Heimlyn Keep. Inside the Reliquary, Heimlyn Keep Along the outer wall of Ramalii Malena's House, Heimlyn Keep"]
        }, 'triumphs of a monarch, ch. 10': {
            author: 'His Majesty King Emeric',
            location: ["Smuggler's Cove"]
        }, 'triumphs of a monarch, ch. 3': {
            author: 'His Majesty King Emeric',
            location: ['West of Skywatch', "Vivec's Antlers"]
        }, 'triumphs of a monarch, ch. 6': {
            author: 'His Majesty King Emeric',
            location: ["Glenumbra (fortress outskirts south of Camlorn)", "North of Steamfont Cavern", "Outside Entila's Folly"]
        }
    },
    'coldharbour lore': {
        'a life of strife and struggle': {
            author: 'King Laloriaran Dynar',
            location: ["North of Zemarek's Hollow"]
        }, 'chaotic creatia: the azure plasm': {
            author: 'Doctor Rhythandius',
            location: ["East of Library of Dusk Wayshrine"]
        }, 'exegesis of merid-nunda': {
            author: 'Phrastus of Elinhir',
            location: ["Abagarlas"]
        }, 'i was summoned by a mortal': {
            author: 'Kynval Zzedenkathik of Clan Deathbringer',
            location: ['The Hollow City']
        }, 'oath of a dishonored clan': {
            author: 'Lyranth',
            location: ["Bha's Bargains, Reaver Citadel"]
        }, 'protocols of the court of contempt': {
            author: 'Judge Xiven',
            location: []
        }, 'the black forge': {
            author: 'Kyngald Nazkrixor',
            location: ['North of Shrine Of Kyne']
        }, 'the library of dusk: rare books': {
            author: '',
            location: []
        }, 'the lightless oubliette': {
            author: '',
            location: []
        }, 'the whithering of delodiil': {
            author: 'Unkown',
            location: ['The Moonless Walk', 'Mzeneldt']
        }
    }
}

app.use(cors())
app.use(express.static('public'))


app.listen(process.env.PORT || PORT, () => {
    console.log('Listening on Port ' + PORT)
})
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})
app.get('/lorebook', (req, res) => {
    res.json(lore)
})
app.get('/lorebook/:category', (req, res) => {
    const category = req.params.category
    res.json(lore[category])
})
app.get('/lorebook/:category/:bookName', (req, res) => {
    const category = req.params.category
    const bookName = req.params.bookName
    res.json(lore[category][bookName])
})
// ,
// 'daedric princes': [

// ],
// 'deshaan lore': [

// ],
// 'divines and deities': [

// ],
// 'dungeon lore': [

// ],
// 'dwemer': [

// ],
// 'eastmarch lore': [

// ],
// 'glenumbra lore': [

// ],
// 'grahtwood lore': [

// ],
// 'greenshade lore': [

// ],
// 'legends of nirn': [

// ],
// 'literature': [

// ],
// 'magic and magicka': [

// ],
// 'malabal tor lore': [

// ],
// 'myths of the mundus': [

// ],
// 'oblivion lore': [

// ],
// 'poetry and song': [

// ],
// "reaper's march lore": [

// ],
// 'rivenspire lore': [

// ],
// 'shadowfen lore': [

// ],
// 'stonefalls lore': [

// ],
// 'stormhaven lore': [

// ],
// 'tamriel history': [

// ],
// 'the rift lore': [

// ],
// 'the trial of eyevea': [

// ]
// }