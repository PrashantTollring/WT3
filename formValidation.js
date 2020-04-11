
function submitForm() {
	// Name
	var name  =  document.getElementById("FullName");
	var returnValue = true;
	if(name.value == null || name.value  == "" || name.value.length == 0){
		     document.getElementById("NameMessage").style.display ="block";
		returnValue = false;
	}
	else{
		document.getElementById("NameMessage").style.display = "none";
		}
		
	// Address
	var Address  =  document.getElementById("Address");
	if(Address.value == null || Address.value  == "" || Address.value.length == 0){
		     document.getElementById("AddressMessage").style.display ="block";
		returnValue = false;
		}
	else{
		document.getElementById("AddressMessage").style.display = "none";
		}
		
	// ZipCode
	var ZipCode  =  document.getElementById("ZipCode");
	if(ZipCode.value == null || ZipCode.value  == "" || ZipCode.value.length == 0){
		     document.getElementById("ZipCodeMessage").style.display ="block";
		returnValue = false;
		}
	else{
		document.getElementById("ZipCodeMessage").style.display = "none";
		}
		
	// Country
	var Country  =  document.getElementById("Country");
	if(Country.value == null || Country.value  == "" || Country.value.length == 0){
		     document.getElementById("CountryMessage").style.display ="block";
		returnValue = false;
		}
	else{
		document.getElementById("CountryMessage").style.display = "none";
		}	
	
	// Gender
	if ( ( document.contact_form.Gender[0].checked == false )
    && ( document.contact_form.Gender[1].checked == false ) )
    {
        document.getElementById("GenderMessage").style.display ="block";
		returnValue = false;
    }	
	else{
		document.getElementById("GenderMessage").style.display = "none";
		}	
	
	
		// Birtdate
		var dob1 = document.forms["contact_form"]["dob"].value;
    var pattern1 = /^([0-9]{2})-([0-9]{2})-([0-9]{4})$/;
    if (dob1 == null || dob1 == "" || !pattern1.test(dob1) || dob1 > new Date() ) {
        document.getElementById("dobMessage").style.display ="block";
        returnValue = false;
    }
    else {
        document.getElementById("dobMessage").style.display = "none";
    }
		
		// Preference
	if((document.getElementById("PreferenceA").checked == false) && (document.getElementById("PreferenceB").checked == false)
		&& (document.getElementById("PreferenceC").checked == false) )
		{
		     document.getElementById("PrefMessage").style.display ="block";
		returnValue = false;
		}
	else{
		document.getElementById("PrefMessage").style.display = "none";
		}	
		
		// Phone
	var Phone1 = document.forms["contact_form"]["Phone"].value;
    var pattern2 = /^([7-9]{1})([0-9]{9})$/;
    if (Phone1 == null || Phone1 == "" || !pattern2.test(Phone1)) {
		     document.getElementById("PhoneMessage").style.display ="block";
		returnValue = false;
		}
	else{
		document.getElementById("PhoneMessage").style.display = "none";
		}
		
		// Email
	var Email1 = document.forms["contact_form"]["Email"].value;	
	var pattern3 =  /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	if(Email1 == null || Email1  == "" || !pattern3.test(Email1)){
		     document.getElementById("EmailMessage").style.display ="block";
		returnValue = false;
		}
	else{
		document.getElementById("EmailMessage").style.display = "none";
		}
	
	// Password A Check
	var pwd = document.getElementById("passwordA");
	if(pwd.value == null || pwd.value  == "" || pwd.value.length < 8){
		document.getElementById("PasswordAMessage").style.display ="block";
		returnValue = false;
	    } 
	else{
		document.getElementById("PasswordAMessage").style.display = "none";
		}
		
	// Password B Check
	var p1 = document.getElementById("passwordA");
	var p2 = document.getElementById("passwordB");
	if (p1.value !== p2.value) {
		document.getElementById("PasswordBMessage").style.display ="block";
		returnValue = false;
	    } 
	else{
		document.getElementById("PasswordBMessage").style.display = "none";
		}
	
	
return returnValue;
}





/* function checkpasswords() {
	var p1 = document.getElementById("passwordA");
	var p2 = document.getElementById("passwordB");
	if (p1.value !== p2.value) {
		p2.setCustomValidity("Passwords do not match");
	} else {
		p2.setCustomValidity("");
	}
	var strength = document.getElementById("passwordStrength");
	var multiplier = 0;
	if ( /[a-z]/.test(p1.value) ) { multiplier++; }
	if ( /[A-Z]/.test(p1.value) ) { multiplier++; }
	if ( /[0-9]/.test(p1.value) ) { multiplier++; }
	strength.value = p1.value.length * multiplier;
}
function validateCallingOptions() {
	var input = document.getElementById("call");
	var validity = input.validity;
	if (validity.patternMismatch) {
		input.setCustomValidity("Not a phone number");
	} else {
		input.setCustomValidity("");
	}
} 
*/