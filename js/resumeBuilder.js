var bio = {
  "name": "Shawn Moran",
  "role": "Web Developer",
  "contact": ["shawn.r.d.moran@gmail.com","720-936-3223"],
  "picture": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAVfAAAAJGM4ZmI4ZWExLWI3NmEtNGFkMy05OGFjLWZmMmU1NmQ2NmJjMw.jpg",
  "welcome": "This is my resume.",
  "skills": ["HTML","CSS","JavaScript", "jQuery", "Git & GitHub"]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMobile = HTMLmobile.replace("%data%", bio.contact[1]);
var formattedEmail = HTMLemail.replace("%data%", bio.contact[0]);
var formattedPicture = HTMLbioPic.replace("%data%", bio.picture);
var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcome);


var work = {
  "employers": [
    {
      "employer": "DIRECTV/AT&T",
      "title": "Senior Specialist, Technical Process/Quality",
      "years": "2014 - Present",
      "city": "Englewood, CO",
      "description": "Job description here."
    },
    {
      "employer": "Lunch Wired",
      "title": "Delivery Driver",
      "years": "2013 - 2014",
      "city": "Centennial, CO",
      "description": "Job description here."
    },
    {
      "employer": "LSG SkyChefs",
      "title": "Controller/Dispatcher",
      "years": "2012 - 2013",
      "city": "Denver, CO, US",
      "description": "Job description here."
    }
  ]
};

var education = {
  "schools": [
    {
      "name": "Metropolitan State University of Denver",
      "gradYear": "2014",
      "city": "Denver, CO",
      "major": "Computer Information Systems",
      "degree": "Bachelor of Science"
    },
    {
      "name": "Community College of Aurora",
      "gradYear": "2009",
      "city": "Aurora, CO, US",
      "major": "Computer Information Systems",
      "degree": "Associate of Applied Science"
    },
    {
      "name": "Udacity",
      "gradYear": "N/A",
      "city": "Online",
      "major": "Front End Web Developer",
      "degree": "Nanodegree"
    }
  ]
};

var projects = {
  "project": [
    {
      "title": "Mockup to Article",
      "date": "2017",
      "description": "Created web page article based on mockup.",
      "image": "http://i2.wp.com/blog.udacity.com/wp-content/uploads/2016/03/56df2490a351d802222160.gif"
    },
    {
      "title": "Animal Trading Cards",
      "date": "2017",
      "description": "Created an animal trading card using HTML and CSS.",
      "image": "http://www.bioexpedition.com/wp-content/uploads/2013/06/cheetah_facts.jpg"
    },
    {
      "title": "Portfolio",
      "date": "2017",
      "description": "Created the main page for my portfolio.",
      "image": "http://kaisz.com/wp-content/uploads/2016/01/Learn-HTML-5-and-CSS-3-With-In-5-hours.jpg"
    }
  ]
};


//var formattedSchool = HTMLschoolName.replace("%data%", education["school"]);
//var formattedEdYears = HTMLschoolDates.replace("%data%", education["years"]);
//var formattedEdCity = HTMLschoolLocation.replace("%data%", education["city"]);

$("#header").append([formattedName,formattedRole]);
$("#header").append([formattedMobile,formattedEmail,formattedPicture,formattedWelcome]);
//$("#main").append([formattedSchool,formattedEdYears,formattedEdCity]);


if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);

  var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
  $("#skills").append(formattedSkills);
  var formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
  $("#skills").append(formattedSkills);
  var formattedSkills = HTMLskills.replace("%data%", bio.skills[2]);
  $("#skills").append(formattedSkills);
  var formattedSkills = HTMLskills.replace("%data%", bio.skills[3]);
  $("#skills").append(formattedSkills);
  var formattedSkills = HTMLskills.replace("%data%", bio.skills[4]);
  $("#skills").append(formattedSkills);
}

function displayWork() {
  for (employer in work.employers) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.employers[employer].employer);
    var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.employers[employer].title);
    var formattedEmployerTitle = formattedEmployer + formattedWorkTitle;
    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedWorkCity = HTMLworkLocation.replace("%data%", work.employers[employer].city);
    $(".work-entry:last").append(formattedWorkCity);

    var formattedWorkYrs = HTMLworkDates.replace("%data%", work.employers[employer].years);
    $(".work-entry:last").append(formattedWorkYrs);

    var formattedDescription = HTMLworkDescription.replace("%data%", work.employers[employer].description);
    $(".work-entry:last").append(formattedDescription);
  }
}

displayWork();

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x,y);
});

function inName(name) {
  name = name.trim().split(" ");
  console.log(name)
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

  return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);

projects.display = function() {
  for (project in projects.project) {
    $("#projects").append(HTMLprojectStart);

    var formattedProjTitle = HTMLprojectTitle.replace("%data%", projects.project[project].title);
    $(".project-entry:last").append(formattedProjTitle);

    var formattedProjDate = HTMLprojectDates.replace("%data%", projects.project[project].date);
    $(".project-entry:last").append(formattedProjDate);

    var formattedProjDescription = HTMLprojectDescription.replace("%data%", projects.project[project].description);
    $(".project-entry:last").append(formattedProjDescription);

    if (projects.project[project].image.length > 0) {
      for (image in projects.project[project].image) {
        var formattedImage = HTMLprojectImage.relace("%data%", projects.project[project].image[image]);
        $(".project-entry:last").append(formattedImage);
      }
    }
  }
}

$("#mapDiv").append(googleMap);
