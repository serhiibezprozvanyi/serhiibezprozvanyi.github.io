<script type="text/template" id="template-Slider-L">
	<% for (var i = 0;i < myDataL.length ; i++){ %>
        <li class="slide">
        <img src="<%= myDataL[i].src[0] %>" alt="js and jquery"> 
        
        <article class="article">
					  <span>  <button class="btnStep"> step1 </button></span>
					  <h3><%= myDataL[i].title  %></h3>
					  <p><%= myDataL[i].text  %></p>
		</article>
   
        </li>  
        <%};%>
</script>
	
<script type="text/template" id="template-Slider-C">
	<% for (var i = 0;i < myDataC.length ; i++){ %>
        <li class="slide">
        <img src="<%= myDataC[i].src[0] %>" alt="js and jquery"> 
        
        <article class="article">
					  <span>  <button class="btnStep"> step1 </button></span>
					  <h3><%= myDataC[i].title  %></h3>
					  <p><%= myDataC[i].text  %></p>
		</article>
   
        </li>  
        <%};%>
</script>
<script type="text/template" id="template-Slider-R">
	<% for (var i = 0;i < myDataR.length ; i++){ %>
        <li class="slide">
        <img src="<%= myDataR[i].src[0] %>" alt="js and jquery"> 
        
        <article class="article">
					  <span>  <button class="btnStep"> step1 </button></span>
					  <h3><%= myDataR[i].title  %></h3>
					  <p><%= myDataR[i].text  %></p>
		</article>
   
        </li>  
        <%};%>
</script>