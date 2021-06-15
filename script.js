let androidtitle = "Android Creations"
let androidjourney = "Starting with the Grasshopper app(link to this on the play store), he eventually found Android Studio and started making apps showcasing new concepts that interested him."
let appletitle = "Apple Creations"
let applejourney = ""
let webtitle = "Web Creations"
let webjourney = ""
let androidtext = document.getElementById("androidbox")
let appletext = document.getElementById("applebox")
let webtext = document.getElementById("webbox")

function android() {
  if (androidtext === androidtitle) {
    androidtext = androidjourney
  } else if (androidtext === androidjourney) {
    androidtext = androidtitle
  } else if (androidtext === null) {
    androidtext = androidtitle
  }
  return androidtext
}

//project lists alphabetical//

let andriodlist = [
  {
    title: "default",
    description: "default",
    link: "default"
  },
  {
    title: "aple",
    description: "trythis",
    link: "nou"
  }
]

function alphabetandroid(androidlist) {
  let neworder = {}
  let alphabet = { a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z }
  for (let i = 0; i < andriodlist.length; i++) {
    let compare = androidlist[i].title.toLowerCase
    for (let a = 0; a < alphabet.length; a++)
      if (compare.charAt(0) === alphabet[a]) {
        neworder.push(andriodlist[i])
      }
  }
  andriodlist = neworder
}