export class Poster{
  constructor(){
    // this.image = image;
    // this.quote = quote;
  }
  static getData(query, hi, error){
    $.get(`https://bikeindex.org:443/api/v3/search?page=${1}&per_page=40&location=${query}&distance=10&stolenness=proximity`)
      .then(function(response){
          console.log(response);
        hi(response);
      }).fail(function(){
        error();
      });
    };
}
