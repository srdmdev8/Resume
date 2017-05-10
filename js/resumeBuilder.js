//This is my bio info object
var bio = {
  "name": "Shawn Moran",
  "role": "Web Developer",
  "contacts": ["shawn.r.d.moran@gmail.com","720-936-3223","srdmdev8","Denver, CO"],
  "picture": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAVfAAAAJGM4ZmI4ZWExLWI3NmEtNGFkMy05OGFjLWZmMmU1NmQ2NmJjMw.jpg",
  "welcome": "IT professional with 3 years’ experience managing multiple projects, providing application support, and executing software testing. I possess strong analytical skills and a broad range of computer expertise.",
  "skills": ["HTML","CSS","JavaScript", "jQuery", "Git & GitHub","Visual Basic .NET","SQL Queries","MS WebMatrix, MS Visual Studio, & Atom","HP Application Lifecycle Management (ALM)","Salesforce.com"]
};

//This is my work info object
var work = {
  "jobs": [
    {
      "employer": "DIRECTV/AT&T",
      "title": "Senior Specialist, Technical Process/Quality",
      "years": "2014 - Present",
      "location": "Englewood, CO",
      "description": "UAT (User Acceptance Testing) on DIRECTV developed application – FSTP. This involves verifying user requirements, verifying/writing test cases, executing test cases, reporting defects and re-testing when resolved, and launching new build of application on release date. Provide 3rd tier support for all FSTP related issues as well as some user provisioning efforts. Support email/AD related issues for Technicians. This involves correlating and provisioning AD accounts as well as utilizing our MDM application for email setup. Build new flows and update existing flows in Motive for AT&Ts web-based application. This frequently requires use of HTML, CSS, JavaScript, and jQuery."
    },
    {
      "employer": "Lunch Wired",
      "title": "Delivery Driver",
      "years": "2013 - 2014",
      "location": "Centennial, CO",
      "description": "Take orders over the phone and deliver orders while providing excellent customer service. Assisted with the routing of orders as needed."
    },
    {
      "employer": "LSG SkyChefs",
      "title": "Controller/Dispatcher",
      "years": "2012 - 2013",
      "location": "Denver, CO",
      "description": "Monitored drivers catering flights and recorded their time on and off the aircrafts. Organized daily flights in order by departure and/or arrival time as well as coordinate with drivers to determine aircraft catering assignments."
    }
  ]
};

//This is my education info object
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
      "city": "Aurora, CO",
      "major": "Computer Information Systems",
      "degree": "Associate of Applied Science"
    }
  ]
};

//This is my project info object
var projects = {
  "project": [
    {
      "title": "Mockup to Article",
      "date": "2017",
      "description": "Created a web page article based on a mockup.",
      "image": "http://i2.wp.com/blog.udacity.com/wp-content/uploads/2016/03/56df2490a351d802222160.gif",
      "titleLink": "https://github.com/srdmdev8/UdacityProjects/blob/master/Project%20Submissions/Mockup%20To%20Article%20Project.zip"
    },
    {
      "title": "Animal Trading Cards",
      "date": "2017",
      "description": "Created an animal trading card using HTML and CSS.",
      "image": "http://www.bioexpedition.com/wp-content/uploads/2013/06/cheetah_facts.jpg",
      "titleLink": "https://github.com/srdmdev8/UdacityProjects/blob/master/Project%20Submissions/Animal%20Trading%20Cards.zip"
    },
    {
      "title": "Portfolio",
      "date": "2017",
      "description": "Created the main page of my portfolio.",
      "image": "http://kaisz.com/wp-content/uploads/2016/01/Learn-HTML-5-and-CSS-3-With-In-5-hours.jpg",
      "titleLink": "https://github.com/srdmdev8"
    }
  ]
};

//This is my online courses info object
var onlineCourses = {
  course: [
    {
      "school": "Udacity",
      "title": "Front End Web Developer",
      "date": "2017 -- Nanodegree",
      "url": "www.udacity.com"
    }
  ]
};

//This function displays my formatted bio info to the page
function displayBio() {
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts[1]);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts[0]);
  var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts[2]);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts[3]);
  var formattedPicture = HTMLbioPic.replace("%data%", bio.picture);
  var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcome);


  $("#header").prepend([formattedName,formattedRole]);
  $("#topContacts").append([formattedMobile,formattedEmail,formattedGitHub,formattedLocation]);
  $("#header").append([formattedPicture,formattedWelcome]);
}
//This calls the above function to display my bio info
displayBio();

//This displays the skills title to the page
$("#header").append(HTMLskillsStart);

//This forEach loop displays my formatted skills to the page
bio.skills.forEach(function displaySkills(skill) {
  if (skill.length > 0) {
    var formattedSkills = HTMLskills.replace("%data%", skill);
    $("#skills").append(formattedSkills);
  }
});

//This forEach loop displays my formatted work info to the page
work.jobs.forEach(function displayWork(job) {
  $("#workExperience").append(HTMLworkStart);

  var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
  var formattedWorkTitle = HTMLworkTitle.replace("%data%", job.title);
  var formattedEmployerTitle = formattedEmployer + formattedWorkTitle;
  $(".work-entry:last").append(formattedEmployerTitle);

  var formattedWorkCity = HTMLworkLocation.replace("%data%", job.location);
  $(".work-entry:last").append(formattedWorkCity);

  var formattedWorkYrs = HTMLworkDates.replace("%data%", job.years);
  $(".work-entry:last").append(formattedWorkYrs);

  var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
  $(".work-entry:last").append(formattedDescription);
});

//This function tracks and logs user clicks to the console
$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x,y);
});

//This function changes my name to international format when the internationalizeButton is clicked
function inName(name) {
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

  return name[0] + " " + name[1];
}

//This displays the internationalizeButton to the page
$("#main").append(internationalizeButton);

//This forEach loop displays my formatted project info to the page and hyperlinks the titles of each project to my projects on GitHub
projects.project.forEach(function displayProjects(project) {
  $("#projects").append(HTMLprojectStart);

  var formattedProjTitle = HTMLprojectTitle.replace("%data%", project.title);

    if (project.title[2]) {
      $("#project-links:last").attr("href","https://github.com/srdmdev8");
    }
    else if (project.title[1]) {
      $("#project-links:last").attr("href","https://github.com/srdmdev8/UdacityProjects/blob/master/Project%20Submissions/Animal%20Trading%20Cards.zip");
    }
    else {
      $("#project-links:last").attr("href", "https://github.com/srdmdev8/UdacityProjects/blob/master/Project%20Submissions/Mockup%20To%20Article%20Project.zip");
    }
  $(".project-entry:last").append(formattedProjTitle);

  var formattedProjDate = HTMLprojectDates.replace("%data%", project.date);
  $(".project-entry:last").append(formattedProjDate);

  var formattedProjDescription = HTMLprojectDescription.replace("%data%", project.description);
  $(".project-entry:last").append(formattedProjDescription);

  if (project.image.length > 0) {
    var formattedImage = HTMLprojectImage.replace("%data%", project.image);
    $(".project-entry:last").append(formattedImage);
  }
});

//This forEach loop displays my formatted education info to the page
education.schools.forEach(function displayEducation(school){
  $("#education").append(HTMLschoolStart);

  var formattedEdName = HTMLschoolName.replace("%data%", school.name);
  $(".education-entry:last").append(formattedEdName);

  var formattedGradYear = HTMLschoolDates.replace("%data%", school.gradYear);
  $(".education-entry:last").append(formattedGradYear);

  var formattedEdCity = HTMLschoolLocation.replace("%data%", school.city);
  $(".education-entry:last").append(formattedEdCity);

  var formattedMajor = HTMLschoolMajor.replace("%data%", school.major);
  $(".education-entry:last").append(formattedMajor);

  var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
  $(".education-entry:last").append(formattedDegree);
});

//This forEach loop displays my formatted online courses info to the page
onlineCourses.course.forEach(function displayCourses(course) {
  $("#education").append(HTMLonlineClasses);

  var formattedOnlineTitle = HTMLonlineTitle.replace("%data%",course.title);
  var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",course.school);
  var formattedTitleSchool = formattedOnlineTitle + formattedOnlineSchool;
  $("#education").append(formattedTitleSchool);

  var formattedOnlineDate = HTMLonlineDates.replace("%data%",course.date);
  $("#education").append(formattedOnlineDate);

  var formattedOnlineURL = HTMLonlineURL.replace("%data%",course.url);
  $("#education").append(formattedOnlineURL);

  $("#online-url").attr("href", "https://www.udacity.com/");
});

//This displays Google Map on the page
$("#mapDiv").append(googleMap);

//This function displays my bio contacts to the footer
function displayFooter() {
  var formattedFootMobile = HTMLmobile.replace("%data%", bio.contacts[1]);
  var formattedFootEmail = HTMLemail.replace("%data%", bio.contacts[0]);
  var formattedFootGitHub = HTMLgithub.replace("%data%", bio.contacts[2]);
  var formattedFootLocation = HTMLlocation.replace("%data%", bio.contacts[3]);

  $("#footerContacts").append([formattedFootMobile,formattedFootEmail,formattedFootGitHub,formattedFootLocation]);
}
//This calls the displayFooter function to display my contacts to the footer
displayFooter();
