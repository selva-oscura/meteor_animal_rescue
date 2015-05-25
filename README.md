# meteor_animal_rescue

Animal Rescue is an app for uploading and finding animals that are available for adoption.


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
	<li><del>add "kid-friendly" and "personality" categories to animal submission form, animal data collection, and filter template - Abhilasha - - sorry, but I jumped the queue on this because it really made sense to have it done before trying to finalise the filters - Carol<del></li>
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
	<li>error/reminder when fields are left blank in the animal submission form - Error reporting in general started. - Carol<br />
		we'll need further details of this one - how many fields would need to be left blank?</li>
	<li>location info for animals and for humans seeking animals
		<ul>
			<li>for animal seeking human form, need to add address information to user profile, allow override (just update of address? or allow addition of multiple addresses? and if update, should that be applied to other animals submitted by that person? address information should probably be saved to user record for future reference when they submit another animal, but be inserted into the animal record by the method) - In Progress - Carol</li>
			<li>for human seeking animal, we'll ask for their postal code and country information when visiting the search results as well as the distance that they're willing to travel (5, 10, 25, 50, 100 miles) <del>(where is this in the ui? at the top of the filter options?)</del> This will need to be added to the Human Seeking Animal form - - We could also allow users to log in, input that info, save it, and we'd pull that data for subsequent logged-in searches</li>
			<li>take postal code (or address) information and convert it to longitude and latitude <br /><i><del>(we could use Google's Maps API <strong>if</strong> we then also use the Google Map API's functionality to display the map- possibly using it to show rough geographic distribution of results? that is part of the requirements for using the API.  There are alternatives to using Google's APIs, but those companies seem to be more ephemeral or more flaky.)</del></i> - - using meteor-geocoder (aldeed:geocoder) package to pull latitude and longitude information - In Progress (user's address done, animal address not yet done - Carol</li>
			<li>implement haversine function for filter</li>
		</ul>
	</li>
	<li>splash page explaining that the app is a prototype and the animals on it are not actually up for adoption. also acts as a documentation of sorts, explaining the intentions of the app and the technologies used to make it - Abhilasha</li>
	<li>image uploading (rather than using URL inputs and hotlinking from its current location online)</li>
	<li>pagination (via publication and subscription?)- Abhilasha (I will research on this)</li>
	<li>allow editing of postal code and country for user profiles</li>
	<li>change name of app to "Human Seeking Animal" or "Animal Seeking Human"? (this is more of a discussion point than a task)</li>
	<li>allow for multiple images to be uploaded for an individual animal, which would be shown as a gallery on the animal's profile (possibly beneath the animal's details)</li>
	<li>colorful redesign that matches the light-hearted subject of the app better</li>
	<li>internal messaging system to protect e-mail information of people giving away animals</li>
	<li>resizing/cropping of profile image (probably too time-consuming for us)</li>
</ul>