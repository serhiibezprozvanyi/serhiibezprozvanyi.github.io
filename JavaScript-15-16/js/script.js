
var api = '5896825-63aa5e03e35eb7233a97a316f'
var parent = document.getElementById('container');
var htmlTemplate = document.getElementById('templateFoto').textContent;



function fetchImages() {
var searchValue = document.getElementById('searchKeywords').value;
var keywords = searchValue;
var URL = "https://pixabay.com/api/?key="+api+"&q="+encodeURIComponent(keywords)+"&image_type=photo"; 
    
fetch(URL).then(function(response) {  
      if (response.ok) {    
        return response.json(); 
      }
  }).then(function(data) {  
        console.log(data); 
		  var templateAPI = _.template(htmlTemplate);
    		parent.innerHTML = templateAPI(data);
      }).catch(function(err) {  
    console.log('Fetch Error :', err);  
  });
	
	
	

}
 
document.getElementById('searhImages').addEventListener('click', fetchImages);


