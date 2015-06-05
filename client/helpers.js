UI.registerHelper('selectedShow', function(prop, value){
	var data = "selected";
	if(prop == value){
		return data;
	}	
});

UI.registerHelper('checkedShow', function(prop, value){
	var data = "checked";
	if(prop == value){
		return data;
	}	
});

UI.registerHelper("prettifyDate", function(timestamp) {
    return moment(timestamp).format('Do MMMM YYYY');
});

UI.registerHelper("prettifyRange", function(range){
	var data;
	if(range==1){ data=5; }
	else if(range==2){ data=10; }
	else if(range==3){ data=15; }
	else if(range==4){ data=25; }
	else if(range==5){ data=50; }
	else if(range==6){ data=100; }
	return data;		
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
		{code: 'AF', name: 'Afghanistan'},
		{code: 'AX', name: 'Aland Islands'},
		{code: 'AL', name: 'Albania'},
		{code: 'DZ', name: 'Algeria'},
		{code: 'AD', name: 'Andorra'},
		{code: 'AO', name: 'Angola'},
		{code: 'AS', name: 'American Samoa'},
		{code: 'AI', name: 'Anguilla'},
		{code: 'AQ', name: 'Antarctica'},
		{code: 'AG', name: 'Antigua and Barbuda'},
		{code: 'AR', name: 'Argentina'},
		{code: 'AM', name: 'Armenia'},
		{code: 'AW', name: 'Aruba'},
		{code: 'AT', name: 'Austria'},
		{code: 'AU', name: 'Australia'},
		{code: 'AZ', name: 'Azerbaijan'},
		{code: 'BS', name: 'Bahamas'},
		{code: 'BH', name: 'Bahrain'},
		{code: 'BD', name: 'Bangladesh'},
		{code: 'BB', name: 'Barbados'},
		{code: 'BY', name: 'Belarus'},
		{code: 'BE', name: 'Belgium'},
		{code: 'BZ', name: 'Belize'},
		{code: 'BJ', name: 'Benin'},
		{code: 'BM', name: 'Bermuda'},
		{code: 'BT', name: 'Bhutan'},
		{code: 'BO', name: 'Bolivia'},
		{code: 'BQ', name: 'Bonaire, Saint Eustatius and Saba '},
		{code: 'BA', name: 'Bosnia and Herzegovina'},
		{code: 'BW', name: 'Botswana'},
		{code: 'BV', name: 'Bouvet Island'},
		{code: 'BR', name: 'Brazil'},
		{code: 'IO', name: 'British Indian Ocean Territory'},
		{code: 'VG', name: 'British Virgin Islands'},
		{code: 'BN', name: 'Brunei'},
		{code: 'BG', name: 'Bulgaria'},
		{code: 'BF', name: 'Burkina Faso'},
		{code: 'BI', name: 'Burundi'},
		{code: 'KH', name: 'Cambodia'},
		{code: 'CM', name: 'Cameroon'},
		{code: 'CA', name: 'Canada'},
		{code: 'CV', name: 'Cape Verde'},
		{code: 'KY', name: 'Cayman Islands'},
		{code: 'CF', name: 'Central African Republic'},
		{code: 'TD', name: 'Chad'},
		{code: 'CL', name: 'Chile'},
		{code: 'CN', name: 'China'},
		{code: 'CX', name: 'Christmas Island'},
		{code: 'CC', name: 'Cocos Islands'},
		{code: 'CO', name: 'Colombia'},
		{code: 'KM', name: 'Comoros'},
		{code: 'CK', name: 'Cook Islands'},
		{code: 'CR', name: 'Costa Rica'},
		{code: 'HR', name: 'Croatia'},
		{code: 'CU', name: 'Cuba'},
		{code: 'CW', name: 'Curacao'},
		{code: 'CY', name: 'Cyprus'},
		{code: 'CZ', name: 'Czech Republic'},
		{code: 'CD', name: 'Democratic Republic of the Congo'},
		{code: 'DK', name: 'Denmark'},
		{code: 'DJ', name: 'Djibouti'},
		{code: 'DM', name: 'Dominica'},
		{code: 'DO', name: 'Dominican Republic'},
		{code: 'TL', name: 'East Timor'},
		{code: 'EC', name: 'Ecuador'},
		{code: 'EG', name: 'Egypt'},
		{code: 'SV', name: 'El Salvador'},
		{code: 'GQ', name: 'Equatorial Guinea'},
		{code: 'ER', name: 'Eritrea'},
		{code: 'EE', name: 'Estonia'},
		{code: 'ET', name: 'Ethiopia'},
		{code: 'FK', name: 'Falkland Islands'},
		{code: 'FO', name: 'Faroe Islands'},
		{code: 'FJ', name: 'Fiji'},
		{code: 'FI', name: 'Finland'},
		{code: 'FR', name: 'France'},
		{code: 'GF', name: 'French Guiana'},
		{code: 'PF', name: 'French Polynesia'},
		{code: 'TF', name: 'French Southern Territories'},
		{code: 'GA', name: 'Gabon'},
		{code: 'GM', name: 'Gambia'},
		{code: 'GE', name: 'Georgia'},
		{code: 'DE', name: 'Germany'},
		{code: 'GH', name: 'Ghana'},
		{code: 'GI', name: 'Gibraltar'},
		{code: 'GR', name: 'Greece'},
		{code: 'GL', name: 'Greenland'},
		{code: 'GD', name: 'Grenada'},
		{code: 'GP', name: 'Guadeloupe'},
		{code: 'GU', name: 'Guam'},
		{code: 'GT', name: 'Guatemala'},
		{code: 'GG', name: 'Guernsey'},
		{code: 'GN', name: 'Guinea'},
		{code: 'GW', name: 'Guinea-Bissau'},
		{code: 'GY', name: 'Guyana'},
		{code: 'HT', name: 'Haiti'},
		{code: 'HM', name: 'Heard Island and McDonald Islands'},
		{code: 'HN', name: 'Honduras'},
		{code: 'HK', name: 'Hong Kong'},
		{code: 'HU', name: 'Hungary'},
		{code: 'IS', name: 'Iceland'},
		{code: 'IN', name: 'India'},
		{code: 'ID', name: 'Indonesia'},
		{code: 'IR', name: 'Iran'},
		{code: 'IQ', name: 'Iraq'},
		{code: 'IE', name: 'Ireland'},
		{code: 'IM', name: 'Isle of Man'},
		{code: 'IL', name: 'Israel'},
		{code: 'IT', name: 'Italy'},
		{code: 'CI', name: 'Ivory Coast'},
		{code: 'JM', name: 'Jamaica'},
		{code: 'JP', name: 'Japan'},
		{code: 'JE', name: 'Jersey'},
		{code: 'JO', name: 'Jordan'},
		{code: 'KZ', name: 'Kazakhstan'},
		{code: 'KE', name: 'Kenya'},
		{code: 'KI', name: 'Kiribati'},
		{code: 'XK', name: 'Kosovo'},
		{code: 'KW', name: 'Kuwait'},
		{code: 'KG', name: 'Kyrgyzstan'},
		{code: 'LA', name: 'Laos'},
		{code: 'LV', name: 'Latvia'},
		{code: 'LB', name: 'Lebanon'},
		{code: 'LS', name: 'Lesotho'},
		{code: 'LR', name: 'Liberia'},
		{code: 'LY', name: 'Libya'},
		{code: 'LI', name: 'Liechtenstein'},
		{code: 'LT', name: 'Lithuania'},
		{code: 'LU', name: 'Luxembourg'},
		{code: 'MO', name: 'Macao'},
		{code: 'MK', name: 'Macedonia'},
		{code: 'MG', name: 'Madagascar'},
		{code: 'MW', name: 'Malawi'},
		{code: 'MY', name: 'Malaysia'},
		{code: 'MV', name: 'Maldives'},
		{code: 'ML', name: 'Mali'},
		{code: 'MT', name: 'Malta'},
		{code: 'MH', name: 'Marshall Islands'},
		{code: 'MQ', name: 'Martinique'},
		{code: 'MR', name: 'Mauritania'},
		{code: 'MU', name: 'Mauritius'},
		{code: 'YT', name: 'Mayotte'},
		{code: 'MX', name: 'Mexico'},
		{code: 'FM', name: 'Micronesia'},
		{code: 'MD', name: 'Moldova'},
		{code: 'MC', name: 'Monaco'},
		{code: 'MN', name: 'Mongolia'},
		{code: 'ME', name: 'Montenegro'},
		{code: 'MS', name: 'Montserrat'},
		{code: 'MA', name: 'Morocco'},
		{code: 'MZ', name: 'Mozambique'},
		{code: 'MM', name: 'Myanmar'},
		{code: 'NA', name: 'Namibia'},
		{code: 'NR', name: 'Nauru'},
		{code: 'NP', name: 'Nepal'},
		{code: 'NL', name: 'Netherlands'},
		{code: 'AN', name: 'Netherlands Antilles'},
		{code: 'NC', name: 'New Caledonia'},
		{code: 'NZ', name: 'New Zealand'},
		{code: 'NI', name: 'Nicaragua'},
		{code: 'NE', name: 'Niger'},
		{code: 'NG', name: 'Nigeria'},
		{code: 'NU', name: 'Niue'},
		{code: 'NF', name: 'Norfolk Island'},
		{code: 'KP', name: 'North Korea'},
		{code: 'MP', name: 'Northern Mariana Islands'},
		{code: 'NO', name: 'Norway'},
		{code: 'OM', name: 'Oman'},
		{code: 'PK', name: 'Pakistan'},
		{code: 'PW', name: 'Palau'},
		{code: 'PS', name: 'Palestinian Territory'},
		{code: 'PA', name: 'Panama'},
		{code: 'PG', name: 'Papua New Guinea'},
		{code: 'PY', name: 'Paraguay'},
		{code: 'PE', name: 'Peru'},
		{code: 'PH', name: 'Philippines'},
		{code: 'PN', name: 'Pitcairn'},
		{code: 'PL', name: 'Poland'},
		{code: 'PT', name: 'Portugal'},
		{code: 'PR', name: 'Puerto Rico'},
		{code: 'QA', name: 'Qatar'},
		{code: 'CG', name: 'Republic of the Congo'},
		{code: 'RE', name: 'Reunion'},
		{code: 'RO', name: 'Romania'},
		{code: 'RU', name: 'Russia'},
		{code: 'RW', name: 'Rwanda'},
		{code: 'BL', name: 'Saint Barthelemy'},
		{code: 'SH', name: 'Saint Helena'},
		{code: 'KN', name: 'Saint Kitts and Nevis'},
		{code: 'LC', name: 'Saint Lucia'},
		{code: 'MF', name: 'Saint Martin'},
		{code: 'PM', name: 'Saint Pierre and Miquelon'},
		{code: 'VC', name: 'Saint Vincent and the Grenadines'},
		{code: 'WS', name: 'Samoa'},
		{code: 'SM', name: 'San Marino'},
		{code: 'ST', name: 'Sao Tome and Principe'},
		{code: 'SA', name: 'Saudi Arabia'},
		{code: 'SN', name: 'Senegal'},
		{code: 'RS', name: 'Serbia'},
		{code: 'SC', name: 'Seychelles'},
		{code: 'SL', name: 'Sierra Leone'},
		{code: 'SG', name: 'Singapore'},
		{code: 'SX', name: 'Sint Maarten'},
		{code: 'SK', name: 'Slovakia'},
		{code: 'SI', name: 'Slovenia'},
		{code: 'SB', name: 'Solomon Islands'},
		{code: 'SO', name: 'Somalia'},
		{code: 'ZA', name: 'South Africa'},
		{code: 'GS', name: 'South Georgia and the South Sandwich Islands'},
		{code: 'KR', name: 'South Korea'},
		{code: 'SS', name: 'South Sudan'},
		{code: 'ES', name: 'Spain'},
		{code: 'LK', name: 'Sri Lanka'},
		{code: 'SD', name: 'Sudan'},
		{code: 'SR', name: 'Suriname'},
		{code: 'SJ', name: 'Svalbard and Jan Mayen'},
		{code: 'SZ', name: 'Swaziland'},
		{code: 'SE', name: 'Sweden'},
		{code: 'CH', name: 'Switzerland'},
		{code: 'SY', name: 'Syria'},
		{code: 'TW', name: 'Taiwan'},
		{code: 'TJ', name: 'Tajikistan'},
		{code: 'TZ', name: 'Tanzania'},
		{code: 'TH', name: 'Thailand'},
		{code: 'TG', name: 'Togo'},
		{code: 'TK', name: 'Tokelau'},
		{code: 'TO', name: 'Tonga'},
		{code: 'TT', name: 'Trinidad and Tobago'},
		{code: 'TN', name: 'Tunisia'},
		{code: 'TR', name: 'Turkey'},
		{code: 'TM', name: 'Turkmenistan'},
		{code: 'TC', name: 'Turks and Caicos Islands'},
		{code: 'TV', name: 'Tuvalu'},
		{code: 'UG', name: 'Uganda'},
		{code: 'UA', name: 'Ukraine'},
		{code: 'AE', name: 'United Arab Emirates'},
		{code: 'GB', name: 'United Kingdom'},
		{code: 'US', name: 'United States'},
		{code: 'UM', name: 'United States Minor Outlying Islands'},
		{code: 'VI', name: 'U.S. Virgin Islands'},
		{code: 'UY', name: 'Uruguay'},
		{code: 'UZ', name: 'Uzbekistan'},
		{code: 'VU', name: 'Vanuatu'},
		{code: 'VA', name: 'Vatican'},
		{code: 'VE', name: 'Venezuela'},
		{code: 'VN', name: 'Vietnam'},
		{code: 'WF', name: 'Wallis and Futuna'},
		{code: 'EH', name: 'Western Sahara'},
		{code: 'YE', name: 'Yemen'},
		{code: 'ZM', name: 'Zambia'},
		{code: 'ZW', name: 'Zimbabwe'}
	]
});