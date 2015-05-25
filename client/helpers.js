UI.registerHelper("prettifyDate", function(timestamp) {
    return moment(timestamp).format('Do MMMM YYYY');
});

UI.registerHelper("prettifyType", function(type){
	var data = "Information Unavailable";
	if(type==1){
		data = "cat";
	}else if(type==2){
		data = "dog";
	}else if(type == -99){
		data = "Information Unavailable";
	}
	return data;
});

UI.registerHelper("prettifySex", function(sex){
	var data = "Information Unavailable";
	if(sex==1){
		data = "female";
	}else if(sex==2){
		data = "male";
	}else if(sex == -99){
		data = "Information Unavailable";
	}
	return data;
});

UI.registerHelper("prettifyAge", function(age){
	var data = "Information Unavailable";
	if(age==1){
		data = "<6 months";
	}else if(age==2){
		data = "6 months - 1 year";
	}else if(age==3){
		data = "1 - 3 years";
	}else if(age==4){
		data = "3 - 5 years";
	}else if(age==5){
		data = "5 - 10 years";
	}else if(age==6){
		data = ">10 years";
	}else if(age == -99){
		data = "Information Unavailable";
	}
	return data;
});

UI.registerHelper("prettifySize", function(size){
	var data = "Information Unavailable";
	if(size==1){
		data = "<10 lbs.";
	}else if(size==2){
		data = "10-25 lbs.";
	}else if(size==3){
		data = "25-40 lbs.";
	}else if(size==4){
		data = "40-70 lbs.";
	}else if(size==5){
		data = ">70lbs.";
	}else if(size==-99){
		data = "Information Unavailable";
	}
	return data;
});

UI.registerHelper("prettifyPersonality", function(personality){
	var data = "Information Unavailable";
	if(personality==1){
		data = "shy/reserved";
	}else if(personality==2){
		data = "sometimes shy/sometimes friendly";
	}else if(personality==3){
		data = "Outgoing/Friendly";
	}else if(personality==-99){
		data = "Don't Know";
	}
	return data;
});

UI.registerHelper("prettifyYesNo", function(input){
	var data="Information Unavailable";
	if(input==1){
		data = "Yes";
	}else if(input==0){
		data = "No";
	}else if(input == -99){
		data = "Don't Know"
	}
	return data;
});

UI.registerHelper("currentUserOffered", function(offererId){
	if(Meteor.user()){	
		if(Meteor.user()._id==offererId){
			return true;
		}
	}
});

UI.registerHelper("userAddress", function(){
	if(Meteor.user()){
		if(Meteor.user().profile.address){
			return true;
		}
	}
});

UI.registerHelper("countries", function(){
	return [
		{ "countryName": "Afghanistan", "abbreviation": "AFG"},
		{ "countryName": "Åland", "abbreviation": "ALA"},
		{ "countryName": "Albania", "abbreviation": "ALB"},
		{ "countryName": "Algeria", "abbreviation": "DZA"},
		{ "countryName": "American Samoa", "abbreviation": "ASM"},
		{ "countryName": "Andorra", "abbreviation": "AND"},
		{ "countryName": "Angola", "abbreviation": "AGO"},
		{ "countryName": "Anguilla", "abbreviation": "AIA"},
		{ "countryName": "Antarctica", "abbreviation": "ATA"},
		{ "countryName": "Antigua and Barbuda", "abbreviation": "ATG"},
		{ "countryName": "Argentina", "abbreviation": "ARG"},
		{ "countryName": "Armenia", "abbreviation": "ARM"},
		{ "countryName": "Aruba", "abbreviation": "ABW"},
		{ "countryName": "Austria", "abbreviation": "AUT"},
		{ "countryName": "Australia", "abbreviation": "AUS"},
		{ "countryName": "Azerbaijan", "abbreviation": "AZE"},
		{ "countryName": "Bahamas", "abbreviation": "BHS"},
		{ "countryName": "Bahrain", "abbreviation": "BHR"},
		{ "countryName": "Bangladesh", "abbreviation": "BGD"},
		{ "countryName": "Barbados", "abbreviation": "BRB"},
		{ "countryName": "Belarus", "abbreviation": "BLR"},
		{ "countryName": "Belgium", "abbreviation": "BEL"},
		{ "countryName": "Belize", "abbreviation": "BLZ"},
		{ "countryName": "Benin", "abbreviation": "BEN"},
		{ "countryName": "Bermuda", "abbreviation": "BMU"},
		{ "countryName": "Bhutan", "abbreviation": "BTN"},
		{ "countryName": "Bolivia", "abbreviation": "BOL"},
		{ "countryName": "Bonaire", "abbreviation": "BES"},
		{ "countryName": "Bosnia and Herzegovina", "abbreviation": "BIH"},
		{ "countryName": "Brazil", "abbreviation": "BRA"},
		{ "countryName": "British Virgin Islands", "abbreviation": "VGB"},
		{ "countryName": "Brunei", "abbreviation": "BRN"},
		{ "countryName": "Bulgaria", "abbreviation": "BGR"},
		{ "countryName": "Burkina Faso", "abbreviation": "BFA"},
		{ "countryName": "Burundi", "abbreviation": "BDI"},
		{ "countryName": "Botswana", "abbreviation": "BWA"},
		{ "countryName": "Bouvet Island", "abbreviation": "BVT"},
		{ "countryName": "Cambodia", "abbreviation": "KHM"},
		{ "countryName": "Cameroon", "abbreviation": "CMR"},
		{ "countryName": "Canada", "abbreviation": "CAN"},
		{ "countryName": "Cape Verde", "abbreviation": "CPV"},
		{ "countryName": "Cayman Islands", "abbreviation": "CYM"},
		{ "countryName": "Central African Republic", "abbreviation": "CAF"},
		{ "countryName": "Chad", "abbreviation": "TCD"},
		{ "countryName": "Chile", "abbreviation": "CHL"},
		{ "countryName": "China", "abbreviation": "CHN"},
		{ "countryName": "Christmas Island", "abbreviation": "CXR"},
		{ "countryName": "Colombia", "abbreviation": "COL"},
		{ "countryName": "Comoros", "abbreviation": "COM"},
		{ "countryName": "Republic of the Congo", "abbreviation": "COG"},
		{ "countryName": "Democratic Republic of the Congo", "abbreviation": "COD"},
		{ "countryName": "Cook Islands", "abbreviation": "COK"},
		{ "countryName": "Costa Rica", "abbreviation": "CRI"},
		{ "countryName": "Cote d'Ivoire", "abbreviation": "CIV"},
		{ "countryName": "Croatia", "abbreviation": "HRV"},
		{ "countryName": "Cuba", "abbreviation": "CUB"},
		{ "countryName": "Curacao", "abbreviation": "CUW"},
		{ "countryName": "Cyprus", "abbreviation": "CYP"},
		{ "countryName": "Czech Republic", "abbreviation": "CZE"},
		{ "countryName": "Democratic People's Republic of Korea", "abbreviation": "PRK"},
		{ "countryName": "Djibouti", "abbreviation": "DJI"},
		{ "countryName": "Denmark", "abbreviation": "DNK"},
		{ "countryName": "Dominica", "abbreviation": "DMA"},
		{ "countryName": "Dominican Republic", "abbreviation": "DOM"},
		{ "countryName": "Ecuador", "abbreviation": "ECU"},
		{ "countryName": "Egypt", "abbreviation": "EGY"},
		{ "countryName": "El Salvador", "abbreviation": "SLV"},
		{ "countryName": "Equatorial Guinea", "abbreviation": "GNQ"},
		{ "countryName": "Eritrea", "abbreviation": "ERI"},
		{ "countryName": "Estonia", "abbreviation": "EST"},
		{ "countryName": "Ethiopia", "abbreviation": "ETH"},
		{ "countryName": "Falkland Islands", "abbreviation": "FLK"},
		{ "countryName": "Faroe Islands", "abbreviation": "FRO"},
		{ "countryName": "Fiji", "abbreviation": "FJI"},
		{ "countryName": "Finland", "abbreviation": "FIN"},
		{ "countryName": "France", "abbreviation": "FRA"},
		{ "countryName": "French Guiana", "abbreviation": "GUF"},
		{ "countryName": "French Polynesia", "abbreviation": "PYF"},
		{ "countryName": "French Southern Territories", "abbreviation": "ATF"},
		{ "countryName": "Gabon", "abbreviation": "GAB"},
		{ "countryName": "Gambia", "abbreviation": "GMB"},
		{ "countryName": "Georgia", "abbreviation": "GEO"},
		{ "countryName": "Germany", "abbreviation": "DEU"},
		{ "countryName": "Grenada", "abbreviation": "GRD"},
		{ "countryName": "Guernsey", "abbreviation": "GGY"},
		{ "countryName": "Ghana", "abbreviation": "GHA"},
		{ "countryName": "Gibraltar", "abbreviation": "GIB"},
		{ "countryName": "Greece", "abbreviation": "GRC"},
		{ "countryName": "Greenland", "abbreviation": "GRL"},
		{ "countryName": "Guadeloupe", "abbreviation": "GLP"},
		{ "countryName": "Guinea", "abbreviation": "GIN"},
		{ "countryName": "Guam", "abbreviation": "GUM"},
		{ "countryName": "Guatemala", "abbreviation": "GTM"},
		{ "countryName": "Guinea-Bissau", "abbreviation": "GNB"},
		{ "countryName": "Guyana", "abbreviation": "GUY"},
		{ "countryName": "Hong Kong", "abbreviation": "HKG"},
		{ "countryName": "Heard Island and McDonald Islands", "abbreviation": "HMD"},
		{ "countryName": "Honduras", "abbreviation": "HND"},
		{ "countryName": "Haiti", "abbreviation": "HTI"},
		{ "countryName": "Hungary", "abbreviation": "HUN"},
		{ "countryName": "Iceland", "abbreviation": "ISL"},
		{ "countryName": "India", "abbreviation": "IND"},
		{ "countryName": "Indonesia", "abbreviation": "IDN"},
		{ "countryName": "Iraq", "abbreviation": "IRQ"},
		{ "countryName": "Iran", "abbreviation": "IRN"},
		{ "countryName": "Ireland", "abbreviation": "IRL"},
		{ "countryName": "Isle of Man", "abbreviation": "IMN"},
		{ "countryName": "Israel", "abbreviation": "ISR"},
		{ "countryName": "Italy", "abbreviation": "ITA"},
		{ "countryName": "Jamaica", "abbreviation": "JAM"},
		{ "countryName": "Japan", "abbreviation": "JPN"},
		{ "countryName": "Jersey", "abbreviation": "JEY"},
		{ "countryName": "Jordan", "abbreviation": "JOR"},
		{ "countryName": "Kazakhstan", "abbreviation": "KAZ"},
		{ "countryName": "Kenya", "abbreviation": "KEN"},
		{ "countryName": "Kiribati", "abbreviation": "KIR"},
		{ "countryName": "Kosovo", "abbreviation": "XKX"},
		{ "countryName": "Kuwait", "abbreviation": "KWT"},
		{ "countryName": "Kyrgyzstan", "abbreviation": "KGZ"},
		{ "countryName": "Laos", "abbreviation": "LAO"},
		{ "countryName": "Lebanon", "abbreviation": "LBN"},
		{ "countryName": "Liechtenstein", "abbreviation": "LIE"},
		{ "countryName": "Liberia", "abbreviation": "LBR"},
		{ "countryName": "Lesotho", "abbreviation": "LSO"},
		{ "countryName": "Lithuania", "abbreviation": "LTU"},
		{ "countryName": "Luxembourg", "abbreviation": "LUX"},
		{ "countryName": "Latvia", "abbreviation": "LVA"},
		{ "countryName": "Libya", "abbreviation": "LBY"},
		{ "countryName": "Micronesia", "abbreviation": "FSM"},
		{ "countryName": "Morocco", "abbreviation": "MAR"},
		{ "countryName": "Monaco", "abbreviation": "MCO"},
		{ "countryName": "Moldova", "abbreviation": "MDA"},
		{ "countryName": "Montenegro", "abbreviation": "MNE"},
		{ "countryName": "Macedonia", "abbreviation": "MKD"},
		{ "countryName": "Madagascar", "abbreviation": "MDG"},
		{ "countryName": "Marshall Islands", "abbreviation": "MHL"},
		{ "countryName": "Mali", "abbreviation": "MLI"},
		{ "countryName": "Myanmar [Burma]", "abbreviation": "MMR"},
		{ "countryName": "Mongolia", "abbreviation": "MNG"},
		{ "countryName": "Macao", "abbreviation": "MAC"},
		{ "countryName": "Northern Mariana Islands", "abbreviation": "MNP"},
		{ "countryName": "Martinique", "abbreviation": "MTQ"},
		{ "countryName": "Mauritania", "abbreviation": "MRT"},
		{ "countryName": "Malawi", "abbreviation": "MWI"},
		{ "countryName": "Malaysia", "abbreviation": "MYS"},
		{ "countryName": "Maldives", "abbreviation": "MDV"},
		{ "countryName": "Malta", "abbreviation": "MLT"},
		{ "countryName": "Mauritius", "abbreviation": "MUS"},
		{ "countryName": "Mayotte", "abbreviation": "MYT"},
		{ "countryName": "Mexico", "abbreviation": "MEX"},
		{ "countryName": "Montserrat", "abbreviation": "MSR"},
		{ "countryName": "Mozambique", "abbreviation": "MOZ"},
		{ "countryName": "Namibia", "abbreviation": "NAM"},
		{ "countryName": "New Caledonia", "abbreviation": "NCL"},
		{ "countryName": "Niger", "abbreviation": "NER"},
		{ "countryName": "Norfolk Island", "abbreviation": "NFK"},
		{ "countryName": "Nigeria", "abbreviation": "NGA"},
		{ "countryName": "Nicaragua", "abbreviation": "NIC"},
		{ "countryName": "Netherlands", "abbreviation": "NLD"},
		{ "countryName": "Norway", "abbreviation": "NOR"},
		{ "countryName": "Nepal", "abbreviation": "NPL"},
		{ "countryName": "Nauru", "abbreviation": "NRU"},
		{ "countryName": "Niue", "abbreviation": "NIU"},
		{ "countryName": "New Zealand", "abbreviation": "NZL"},
		{ "countryName": "Oman", "abbreviation": "OMN"},
		{ "countryName": "Pakistan", "abbreviation": "PAK"},
		{ "countryName": "Palestine", "abbreviation": "PSE"},
		{ "countryName": "Panama", "abbreviation": "PAN"},
		{ "countryName": "Papua New Guinea", "abbreviation": "PNG"},
		{ "countryName": "Palau", "abbreviation": "PLW"},
		{ "countryName": "Paraguay", "abbreviation": "PRY"},
		{ "countryName": "Peru", "abbreviation": "PER"},
		{ "countryName": "Philippines", "abbreviation": "PHL"},
		{ "countryName": "Pitcairn Islands", "abbreviation": "PCN"},
		{ "countryName": "Poland", "abbreviation": "POL"},
		{ "countryName": "Portugal", "abbreviation": "PRT"},
		{ "countryName": "Puerto Rico", "abbreviation": "PRI"},
		{ "countryName": "Qatar", "abbreviation": "QAT"},
		{ "countryName": "Réunion", "abbreviation": "REU"},
		{ "countryName": "Republic of Korea", "abbreviation": "KOR"},
		{ "countryName": "Romania", "abbreviation": "ROU"},
		{ "countryName": "Russia", "abbreviation": "RUS"},
		{ "countryName": "Rwanda", "abbreviation": "RWA"},
		{ "countryName": "Saint Barthélemy", "abbreviation": "BLM"},
		{ "countryName": "Saint Helena", "abbreviation": "SHN"},
		{ "countryName": "Saint Kitts and Nevis", "abbreviation": "KNA"},
		{ "countryName": "Saint Lucia", "abbreviation": "LCA"},
		{ "countryName": "Saint Martin", "abbreviation": "MAF"},
		{ "countryName": "Saint Pierre and Miquelon", "abbreviation": "SPM"},
		{ "countryName": "Saint Vincent and the Grenadines", "abbreviation": "VCT"},
		{ "countryName": "Samoa", "abbreviation": "WSM"},
		{ "countryName": "San Marino", "abbreviation": "SMR"},
		{ "countryName": "São Tomé and Príncipe", "abbreviation": "STP"},
		{ "countryName": "Saudi Arabia", "abbreviation": "SAU"},
		{ "countryName": "Senegal", "abbreviation": "SEN"},
		{ "countryName": "Serbia", "abbreviation": "SRB"},
		{ "countryName": "Seychelles", "abbreviation": "SYC"},
		{ "countryName": "Sierra Leone", "abbreviation": "SLE"},
		{ "countryName": "Singapore", "abbreviation": "SGP"},
		{ "countryName": "Sint Maarten", "abbreviation": "SXM"},
		{ "countryName": "Slovakia", "abbreviation": "SVK"},
		{ "countryName": "Slovenia", "abbreviation": "SVN"},
		{ "countryName": "Solomon Islands", "abbreviation": "SLB"},
		{ "countryName": "Somalia", "abbreviation": "SOM"},
		{ "countryName": "South Africa", "abbreviation": "ZAF"},
		{ "countryName": "South Georgia and the South Sandwich Islands", "abbreviation": "SGS"},
		{ "countryName": "South Sudan", "abbreviation": "SSD"},
		{ "countryName": "Spain", "abbreviation": "ESP"},
		{ "countryName": "Sri Lanka", "abbreviation": "LKA"},
		{ "countryName": "Sudan", "abbreviation": "SDN"},
		{ "countryName": "Suriname", "abbreviation": "SUR"},
		{ "countryName": "Svalbard and Jan Mayen", "abbreviation": "SJM"},
		{ "countryName": "Swaziland", "abbreviation": "SWZ"},
		{ "countryName": "Sweden", "abbreviation": "SWE"},
		{ "countryName": "Switzerland", "abbreviation": "CHE"},
		{ "countryName": "Syria", "abbreviation": "SYR"},
		{ "countryName": "Western Sahara", "abbreviation": "ESH"},
		{ "countryName": "Turks and Caicos Islands", "abbreviation": "TCA"},
		{ "countryName": "Togo", "abbreviation": "TGO"},
		{ "countryName": "Thailand", "abbreviation": "THA"},
		{ "countryName": "Tajikistan", "abbreviation": "TJK"},
		{ "countryName": "Tokelau", "abbreviation": "TKL"},
		{ "countryName": "East Timor", "abbreviation": "TLS"},
		{ "countryName": "Turkmenistan", "abbreviation": "TKM"},
		{ "countryName": "Tunisia", "abbreviation": "TUN"},
		{ "countryName": "Tonga", "abbreviation": "TON"},
		{ "countryName": "Turkey", "abbreviation": "TUR"},
		{ "countryName": "Trinidad and Tobago", "abbreviation": "TTO"},
		{ "countryName": "Tuvalu", "abbreviation": "TUV"},
		{ "countryName": "Taiwan", "abbreviation": "TWN"},
		{ "countryName": "Tanzania", "abbreviation": "TZA"},
		{ "countryName": "Ukraine", "abbreviation": "UKR"},
		{ "countryName": "Uganda", "abbreviation": "UGA"},
		{ "countryName": "United Arab Emirates", "abbreviation": "ARE"},
		{ "countryName": "United Kingdom", "abbreviation": "GBR"},
		{ "countryName": "United States of America", "abbreviation": "USA"},
		{ "countryName": "U.S. Minor Outlying Islands", "abbreviation": "UMI"},
		{ "countryName": "U.S. Virgin Islands", "abbreviation": "VIR"},
		{ "countryName": "Uruguay", "abbreviation": "URY"},
		{ "countryName": "Uzbekistan", "abbreviation": "UZB"},
		{ "countryName": "Vatican City", "abbreviation": "VAT"},
		{ "countryName": "Vanuatu", "abbreviation": "VUT"},
		{ "countryName": "Venezuela", "abbreviation": "VEN"},
		{ "countryName": "Vietnam", "abbreviation": "VNM"},
		{ "countryName": "Wallis and Futuna", "abbreviation": "WLF"},
		{ "countryName": "Yemen", "abbreviation": "YEM"},
		{ "countryName": "Zambia", "abbreviation": "ZMB"},
		{ "countryName": "Zimbabwe", "abbreviation": "ZWE"}
	];
});