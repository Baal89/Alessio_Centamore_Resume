# Alessio Centamore Resume
 
Has been a really a long journey at CodeInstitute and finally, after a year and a half, I am proudly submitting my last project. 
What is best than a resume to showcase what I have learnt and what I am capable of so far.
with this resume, I want to tell everybody and potentially to new employers, about me and my brand new skills.
 
## UX
 
This website is made especially for recruiter and employer who are looking to hire a guy who is incredibly eager to grow in this sector.
 
I made extensive research on the internet to find the best UX possible,
I found, due to my lack of experience, that is worth for me take inspiration in the already built site and personalize the contents for my scope.
 
The following user stories help me to achieve the main scope of this project(find my dream job):
 
- as a recruiter, I want to know a little about the job applicant, so I can make a decision
- as a recruiter, I want to see the technical level of the job applicant, so I can evaluate the level of preparation
- as a recruiter, I want to know some info of the applicant, to check if the person is suitable for the job
- as a recruiter, I want to get in touch with the applicant, so we can start a collaboration
- as a recruiter, I want to download the full Resume of the applicant, so I can get more information
 
The Site keeps a minimalistic approach, regarding the content, leaving that for the full resume.
The main object of the site is to showcase the skill I gain so far in order to impress a potential employer.
 
I found myself in the position to write some custom Javascript even if that is out of the scope for this project and I know I won’t be considered to the final vote, but I decided to implement it for the following reason:
 
1. The more I use Bootstrap the more I feel constrain as the framework is very powerful but it does not give me the freedom I need(maybe it’s just my lack of experience)
2. During the course, I was so focused on learning new things that I neglected the language shamefully, so I use this occasion to start using it.
3. I guess a resume, in order to impress somebody, should adequately use it.
 
The more site a make the more experience I gain, I found particularly hard in this case make the site responsive
and for the future, I am planning to try the approach from desktop-first to mobile-first.
 
[here](static/mockups/resume_mockup) there is a mockup, made using Balsamiq, for the site. 
 
## Features
 
- `navbar` - allows the user (in desktop resolution) to scroll back to the top of the site, and download the full resume
- `slider` - allows the user to go through the different parts of the information sections(I found it more elegant than create four sections one beneath another)
- `skills` - allows the user to see the actual level of knowledge for the different matter studied during the course(definitely generous with the score)
- `info` - allows the user to see my personal information like address, telephone, GitHub account.
- `contact form` - allows the user to contact me having the form filled
- `modal` - allows the user to know if the email has been sent correctly to me.
 
for the latter, I had to use jQuery in order to prevent the modal to appear in case of submission of an empty form.
 
### Features Left to Implement
 
I do not think there are many features to implement, the only thing I will improve is the UI
as I realize I really need to build up some experience.
 
## Technologies Used
 
In order to create this site I used:
 
- HTML5
    - For the main sturcture of the site
- CSS3
    - For adding the main style at the site
- [Bootstrap4](https://getbootstrap.com/)
    - For the responsiveness of the site and some minor style
- [Javascript](https://www.javascript.com/)/[jQuery](https://jquery.com/)
    - For the manipulation of the DOM 
- [Font Awesome](https://fontawesome.com/)
    - For the icons
- [EmailJs](https://www.emailjs.com/)
    - to let the contact form send email to me
 
## Testing
 
The site is responsive thank to the implementation of Bootstrap.
HTML code validator and CSS code validator confirm that there are no errors in the code and generally talking the site
behave as expected.
 
Shamefully I did not realize a very important thing, I create my own slider as a Bootstrap carousel I was not suitable for me,  
in this case, so I implemented some Javascript. I did not realize that in order to let the touch screen works on mobile, I have to add extra code.
I found myself at the very end of the course and I could not go any further than this with the time, so I left it as it is 
and on mobile, the only way to go through the slides is to click the dots beneath the slider.
This is something that I definitely look forward to my studies in order to improve myself.
 
the google inspector is always incredibly useful to determine any errors in the code and also the console does not return any errors.
 
### Testing user stories
 
- as a recruiter, I want to know a little about the job applicant, so I can make a decision
    - the slider works normally, except that in mobile version, and it is possible to see all the information regarding about me, education, previous jobs and interests
    1. social media:
    2. click on the social media correctly to the corresponding pages.
 
- as a recruiter, I want to see the technical level of the job applicant, so I can evaluate the level of preparation
    - the progress bars display the actual level of knowledge reached on each sector.
 
- as a recruiter, I want to know some info of the applicant, to check if the person is suitable for the job
    - The info section correctly displays information regarding address, tel, email and GitHub
    1. click on the GitHub name correctly return to mine repository page on Github.
 
- as a recruiter, I want to get in touch with the applicant, so we can start a collaboration
    1. Contact form:
    2. Try to submit the empty form and verify that an error message about the required fields appears
    3. Try to submit the form with all inputs valid and verify that a success message appears.
 
- as a recruiter, I want to download the full Resume of the applicant, so I can get more information
    - The download button works as intended both in the nav and in the footer:
    1. click the download the full resume
    2. redirect to the PDF version of the Resume
 
## Deployment
 
The Deployment process consists of the following steps:
 
1. create a new repository on GitHub
2. with the use of the command `git .` and `git commit -m` submit a new version of the code to the repository every time 
a new piece of functionality is completed.
3. open the repository on GitHub and go in settings
4. In the GitHub Pages section select `Master branch`
5. you will see a link for the repository to the deployed version has been generated
 
 Click here for the [deployed version](https://baal89.github.io/Alessio_Centamore_Resume/)
 
 To run your code locally simply copy and download this repository and then open it with your favourite
 IDE. 
 Then depending on your IDE simply preview the code, is a static site no virtual environment are needed.
 
 ## Credits
 
 ### media
 
 - the background image has been taken from google
 
### Acknowledgements
 
- I received inspiration for this project from CodeInstitute
 
 

