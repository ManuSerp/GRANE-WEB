




export default function handler(req, res) {

const test = {"rep":[{"_id":"62dfa8ae9a4c986924804c1a","name":"test_item","desc":"item de test de la bdd","tag":["test","testing","debug"],"im_link":"/img/sermatek.png"},{"_id":"62e39b0f667b0d23c73df946","name":"test2","desc":"item test 2","tag":["test","testting","debug"],"im_link":"/img/sermatek.png"},{"_id":"62e3b164f0a77d3db41006c7","name":"test2","desc":"item test 2","tag":["test","testting","debug"],"im_link":"/img/sermatek.png"},{"_id":"62e3b16ff0a77d3db41006c9","name":"test2","desc":"item test 2","tag":["test","testting","debug"],"im_link":"/img/sermatek.png"},{"_id":"62e3b179f0a77d3db41006cb","name":"test2","desc":"item test 2","tag":["test","testting","debug"],"im_link":"/img/sermatek.png"},{"_id":"62e3b184f0a77d3db41006cd","name":"test2","desc":"item test 2","tag":["test","testting","debug"],"im_link":"/img/sermatek.png"}]}
let arr=test.rep
let score=arr.map(obj => {
    obj.test="phi"
    return obj
})    

console.log(score)



res.status(200).json(test)
  }
  