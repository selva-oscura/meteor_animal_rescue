# Animal Rescue

Animal Rescue is a Meteor.js app for uploading and finding animals that are available for adoption. This project was developed, using Meteor, MongoDB, and Bootstrap, and won 2nd place at the Women Who Code Silicon Valley hackathon at Paypal in April 2015. 

See it online! http://animal_rescue.meteor.com/

![Animal Rescue home screen](http://i132.photobucket.com/albums/q17/dierat/software%20dev%20portfolio%20images/Screen%20Shot%202015-09-18%20at%206.08.01%20PM.png)


# The Team

![the team discussing planning and development](http://i132.photobucket.com/albums/q17/dierat/software%20dev%20portfolio%20images/CC6TCVrUsAAO3Mq.jpg)
*the team discussing planning and development at Women Who Code Silicon Valley hackathon*

- [Abhilasha Bhatia](https://github.com/abhilashabhatia)
- [Diedra Rater](https://github.com/dierat)
- [Carol St. Louis](https://github.com/selva-oscura)
- [Kerry D. Rosado](https://github.com/kdrosado)

![the team after winning 2nd place](http://i132.photobucket.com/albums/q17/dierat/software%20dev%20portfolio%20images/11169530_10203834632097658_2170770506262371486_o.jpg)
*the team after winning 2nd place, with mentor [Rahul Choudhury](https://github.com/Primigenus)*


#Roadmap

Please add your name to the end of a task if you choose to work on it. If you finish a task, please wrap the task in &lt;del&gt;&lt;&frasl;del&gt; tags and move it to the top of the list so we can see it has been completed.
<ul>
	<li><del>make whole animal result row a link to that animal's profile - Diedra</del></li>
	<li><del>constrain comments width on animal profile and make the category names bold - Diedra</del></li>
	<li><del>hide contact e-mail if the user is logged out - Diedra</del></li>
	<li><del>shorten size names by removing small/medium/large text and leave lbs - Diedra</del></li>
	<li><del>require login before accessing the animal submission form - Carol</del><br /><i>If anyone has a preferred wording, feel free to update the text in the template at client/access_denied.html</i></li>
	<li><del>allow users that have submitted animals for adoption to easily find them - Carol<del></li>
	<li><del>allow deleting of animal profiles by animal's offerer- Carol</del></li>	
	<li><del>allow editing of animal profiles by animal's offerer  - can access this option from My Listings and from the profile page of any animal that the user had offered - Carol<del></li>
	<li><del>add waitOn to router.config to stop screen flash of paw then actual picture, caused by latency -- Carol</del></li>
	<li><del>change the way age data is stored in the collection to have simple integers where each integer represents an age range (ie 1 = 0 - 6 months, 2 = 6 months to 1 year, 3 = 1 - 5 years.. something like that) to reduce typos in the strings - Carol</del></li>
	<li><del>add "kid-friendly" and "personality" categories to animal submission form, animal data collection, and filter template - Carol<del></li>
	<li><del>add "don't care" option for filter questions - especially for radio buttons (right now they're all radio buttons, but age and size should really be checkboxes)</del></li>
	<li><del>improve the filtering system to allow for choices in multiple categories - Carol</del></li>
	<li><del>more responsive design/better fit on mobile screens (specifically referring to the interface for the filter). try reformatting the filter options into a tight grid with very little extra space and see how that looks. also try dropping the bolding of the text of the options (but not the category titles - for example, "Type" would be bolded but not "Cat" or "Dog")</del><br /> 
		<i>I tried to align the different labels and reduce excess space using bootstrap columns and cound they actually ended up taking up more space than they are now. Might be easier to do with straight CSS because we would have more control. /Diedra</i><br />
		<i>I rearranged the animalFilter and animalCreate forms - added/changed application of bootstrap to the html and a few css modifications - Carol</i><br />
		<i>We may need to start being more specific re: further suggestions for responsive design and prettier layout, so we are all on the same page re: what direction we want to go with some of these specifics.</i></li>
	<li>security
		<ul>
			<li><del>remove autopublish package and use publish subscribe - Carol</del></li>
			<li><del>remove insecure package and replace with client-side calling of server-side methods with validation - Carol</del></li>
			<li>research &amp; implement options for addressing XSS and other malicious attacks - - browser policy (looks like there's a package for that - https://atmospherejs.com/meteor/browser-policy )</li>
		</ul>
	</li>
	<li><del>error/reminder when fields are left blank in the animal submission form - Error reporting in general started. - Carol</del></li>
	<li>location info for animals and for humans seeking animals
		<ul>
			<li><del>allow editing of postal code and country for user profiles - Carol </del></li>
			<li><del>for animal seeking human form, add address and also have info by pulling address information from user profile, allowing override of human profile address - Carol</del></li>
			<li><del>take postal code (or address) information and convert it to longitude and latitude <br /><i><del>(we could use Google's Maps API <strong>if</strong> we then also use the Google Map API's functionality to display the map- possibly using it to show rough geographic distribution of results? that is part of the requirements for using the API.  There are alternatives to using Google's APIs, but those companies seem to be more ephemeral or more flaky.)</del></i> - - using meteor-geocoder (aldeed:geocoder) package to pull latitude and longitude information - In Progress (user's address animal address done - Carol</del></li>
			<li><del>for human seeking animal, we'll ask for their postal code and country information when visiting the search results as well as the distance that they're willing to travel (5, 10, 25, 50, 100 miles) - Carol </del></li>
			<li><del> Use human seeking animal form's location info and use it to pull the closest animals - Carol</del></li>
			<li><del>sync filter and location inputs/checkboxes/radiobuttons with filter saved to Session, so state of form is remembered on return to landing page from other pages (within same session) - Carol</del></li>
			<li><del>restrict list of available animals to those within the specified range of the user - Carol</del></li>
			<li><del>display distance between user and available user when the user has specified his/her location - Carol</del></li>
			<li> order by distance when restricting list of animals to those geographically near the user</li>
		</ul>
	</li>
	<li>splash page explaining that the app is a prototype and the animals on it are not actually up for adoption. also acts as a documentation of sorts, explaining the intentions of the app and the technologies used to make it - Abhilasha</li>
	<li>image uploading (rather than using URL inputs and hotlinking from its current location online)</li>
		<ul>
			<li> Check out packages on atmosphere -- cfs:autoform? naxio:autoform-file? tomi:upload-server?  <b>Note:</b> Watch out for dependencies for these files (e.g. cfs:autoform states "Add aldeed:collection2, aldeed:autoform, and cfs:standard-packages packages to your app. Also add any other CFS packages you need, particularly a storage adapter package such as cfs:gridfs." Also states elsewhere that the dependencies are aldeed:autoform, underscore, cfs:standard-packages, meteor, templating, raix:ui-dropped-event)<br />See http://victorleungtw.com/meteor-upload-file/ for an explanation of how to address Meteor-hosted builds not being able to use Meteor-CollectionFS and a potential fix for this.  (Also, Meteor-CollectionFS (https://github.com/CollectionFS/Meteor-CollectionFS) is currently a failing build, but uncertain if the 'fail' is due to the Meteor-hosting issue discussed in the above blog entry.  Also it may be good to go by the time by we get to this.) </li>
			<li>Ensure that only png, jpg, gif (in other words web-ready image formats) are uploaded - Check that file type (and not just file extension) are right type? Scan for viruses?</li>
		</ul>
	<li>allow for multiple images to be uploaded for an individual animal, which would be shown as a gallery on the animal's profile (possibly beneath the animal's details)</li>
	<li>pagination (via publication and subscription?)- Abhilasha (I will research on this)</li>
	<li>change name of app to "Human Seeking Animal" or "Animal Seeking Human"? (this is more of a discussion point than a task)</li>
	<li>colorful redesign that matches the light-hearted subject of the app better</li>
	<li>internal messaging system to protect e-mail information of people giving away animals</li>
	<li>resizing/cropping of profile image (probably too time-consuming for us)</li>
</ul>
