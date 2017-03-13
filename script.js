class Chart {
  constructor(){
    this.firsts = []
  }
  addFirst(species){
    this.firsts.push(species)
  }
  printEach(species){
    let self = this
    console.log(species.name)
    species.children.forEach(child => {
      self.printEach(child)
    })
  }
  printAll(){
    let self = this
    this.firsts.forEach(species => self.printEach(species))
  }
}

class Species {
  constructor(name, parent, imageUrl=null){
    this.name = name
    this.parent = parent
    this.imageUrl = imageUrl
    this.children = []
  }
  evolve(name, imageUrl=null){
    this.children.push(new Species(name, this, imageUrl))
  }
}

const greyhound = new Species("Greyhound", null, "http://d21vu35cjx7sd4.cloudfront.net/dims3/MMAH/thumbnail/645x380/quality/90/?url=http%3A%2F%2Fs3.amazonaws.com%2Fassets.prod.vetstreet.com%2F40%2Fdd9410f1ea11e1ab7c005056ad4734%2Ffile%2FGreyhound-AP-645-lc082912.jpg")
greyhound.evolve("Irish Wolfhound", "http://netstorage.discovery.com/feeds/brightcove/asset-stills/apl/128268082393913144600101197_IRISH_WOLFHOUND.jpg")
greyhound.evolve("Great Dane", "http://s3.amazonaws.com/assets.prod.vetstreet.com/be/5f/5893e9c74668837998f9bfad01da/great-dane-AP-1MN8SV-645sm8513.jpg")
greyhound.evolve("Whippet", "http://www.dogbreedslist.info/uploads/allimg/dog-pictures/Whippet-1.jpg")

greyhound.children[0].evolve("Scottish Deerhound", "http://www.yourpurebredpuppy.com/dogbreeds/photos-RS/scottishdeerhoundsf1.jpg")
greyhound.children[0].evolve("Irish Terrier", "http://www.dogbreedinfo.com/images21/IrishTerrierQuigley3.jpg")

const chart = new Chart()
chart.addFirst(greyhound)
