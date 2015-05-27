if(Animals.find().count()===0){
	var now = new Date().getTime();
	var day = 24*60*60;
	var animal1 = Animals.insert({
		name:"Fluffy",
		type:"1",
		sex:"2",
		age:"3",
		size:"2",
		breed:"Maine Coon",
		color:"wood tabby",
		personality:"3",
		kid_friendly: "1",
		health_issues:"0",
		comments:"Really friendly.  I mean REALLY friendly.  You will never be able to have a cat-free lap again.",
		img_path:"http://www.maine-coon-cat-nation.com/image-files/maine-coon-brown-mackerel.jpg",
		offererEmail: "adoptions@city.aspca.org",
		offererId: "12345",
		created_at: now - 1*day
	});
	var animal2 = Animals.insert({
		name:"Pounce",
		type:"1",
		sex:"1",
		age:"4",
		size:"1",
		breed:"American Short Hair",
		color:"brown tabby",
		personality:"1",
		kid_friendly: "0",
		health_issues:"1",
		comments:"FIV positive",
		img_path:"http://i.ebayimg.com/00/s/MzM1WDUwMA==/z/xlAAAOSw7aBVCXaG/$_35.JPG",
		offererEmail: "had_to_move@nirgendwo.de",
		offererId: "123456789",
		created_at: now - 4*day
	});
	var animal3 = Animals.insert({
		name:"Scourge of Mice",
		type:"1",
		sex:"2",
		age:"2",
		size:"1",
		breed:"alley cat",
		color:"black",
		personality:"2",
		kid_friendly: "1",
		health_issues:"0",
		comments:"temporarily fostered feral cat.  becoming much more friendly as it gets to know people",
		img_path:"http://www.pets4homes.co.uk/images/classifieds/2013/07/31/377342/large/9-week-old-female-black-kitten-for-sale-in-wigan-51f910c6a18ff.jpeg",
		offererEmail: "adoptions@county.humanesociety.org",
		offererId: "54321",
		created_at: now - 3*day
	});
	var animal4 = Animals.insert({
		name:"Toonces",
		type:"1",
		sex:"1",
		age:"5",
		size:"2",
		breed:"who knows?",
		color:"gray tabby",
		personality:"3",
		kid_friendly: "1",
		health_issues:"0",
		comments:"A real lover.  Unfortunately, I have to move and the new apartment doesn't take cats",
		img_path:"http://media.windingroad.com/windingroad/versus/toonces_jpg_470x470_q100.jpg",
		offererEmail: "adoptions@city.aspca.org",
		offererId: "12345",
		created_at: now - 2.2*day
	});
	var animal5 = Animals.insert({
		name:"Her Highness",
		type:"1",
		sex:"1",
		age:"3",
		size:"2",
		breed:"Siamese",
		color:"gold and brown",
		personality:"1",
		kid_friendly: "0",
		health_issues:"0",
		comments:"Dogs have owners.  Cats have help.  Especially Her Highness",
		img_path:"https://knv09.files.wordpress.com/2011/11/dsc_0139.jpg",
		offererEmail: "adoptions@city.aspca.org",
		offererId: "12345",
		created_at: now - 2.5*day
	});	
	var animal6 = Animals.insert({
		name:"Rufus",
		type:"2",
		sex:"2",
		age:"5",
		size:"5",
		breed:"German Shepherd",
		color:"brown and black",
		personality:"1",
		kid_friendly: "0",
		health_issues:"0",
		comments:"",
		img_path:"https://www.petfinder.com/wp-content/uploads/2012/11/147083304-dogs-home-alone-all-day-632x475.jpg",
		offererEmail: "adoptions@city.aspca.org",
		offererId: "12345",
		created_at: now - 1*day
	});
	var animal7 = Animals.insert({
		name:"Bowser",
		type:"2",
		sex:"2",
		age:"6",
		size:"4",
		breed:"lab something or other",
		color:"cream",
		personality:"3",
		kid_friendly: "1",
		health_issues:"1",
		comments:"arthritis",
		img_path:"http://cdn-www.dailypuppy.com/media/dogs/anonymous/Orvis_Yellow_Labrador_Retriever_01.jpg_w450.jpg",
		offererEmail: "adoptions@city.aspca.org",
		offererId: "12345",
		created_at: now - 1.7*day
	});
	var animal8 = Animals.insert({
		name:"Medusa",
		type:"2",
		sex:"1",
		age:"4",
		size:"1",
		breed:"uncertain",
		color:"brown",
		personality:"2",
		kid_friendly: "Don't Know",
		health_issues:"0",
		comments:"",
		img_path:"http://media.masslive.com/talk_impact/photo/ugly-dogjpg-4a94782fd09dd3df.jpg",
		offererEmail: "adoptions@city.aspca.org",
		offererId: "12345",
		created_at: now - 3.2*day
	});
	var animal9 = Animals.insert({
		name:"Killer",
		type:"2",
		sex:"2",
		age:"5",
		size:"1",
		breed:"chihuahua",
		color:"cream",
		personality:"2",
		kid_friendly: "0",
		health_issues:"0",
		comments:"",
		img_path:"http://cdn26.us2.fansshare.com/photo/chihuahua/chihuahua-1389915891.jpg",
		offererEmail: "adoptions@county.humanesociety.org",
		offererId: "54321",
		created_at: now - 4*day
	});
}