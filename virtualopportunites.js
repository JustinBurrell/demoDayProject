//get references 
let state = 1;
let mainState = 1;
let gridBox = document.getElementsByClassName("row");
let gridBoxText = document.getElementsByClassName("rowText");
let gridInfo = document.getElementById("gridInfo")
let gridContainer = document.getElementById("grid-container");
let gridDes = document.getElementById("gridDes");
let experienceForm = document.getElementById("experienceform");
let gridHead = document.getElementById("gridHead");
let filterContents = document.getElementById("filtercontents");
let mainText = document.getElementById("maintext");
let gridInfoButton = document.getElementById("gridInfoButton");
let gridInfoButtons = document.getElementsByClassName("gridInfoButtons");
let backBtn = document.getElementById("backBtn");
let communityserviceBtn = document.getElementById("communityserviceBtn");

let buttonOne = document.getElementById("button1");
let buttonTwo = document.getElementById("button2");
let buttonThree = document.getElementById("button3");
let buttonFour = document.getElementById("button4");
let buttonFive = document.getElementById("button1");

let gridBoxDescriptions = ["You can sign up with any of the sites below to help raise money for the American Red Cross while...", "Operated by Amnesty International, this network of digital volunteers helps conduct research into global human rights violations...", "This volunteer search tool is exclusively for online volunteer projects. Each one has a timeline that can range anywhere from an hour to a few weeks...","Adopt a grandparent at one of our CHD Living homes or home care services and bring joy to...","Children of Promise supports and embraces children of incarcerated parents...","When at least 18 become a volunteer to help the Crisis Text Line continue to offer free, 24/7 support for those in crisis.","DoSomething empowers young people to enact social change both online or off.","Volunteer Program that pairs young kids and teens with seniors over phone call or video call...","Thousands of LGTBQ+ youth and young adults are homeless in New York City. Whether they have been kicked out by homophobic families, forced to flee conservative communities, aged out of foster care, or come from...", "New York City Relief is a nonprofit organization that serves the homeless community in NYC. Volunteers around...", "Founded in 1971, this may just be the virtual volunteering effort that started it all. The goal is to create the largest digital library, and so far they’ve amassed 59,000 free eBooks...", "An organization that is helping seniors get groceries delivered to their house all over the country...", "The Smithsonian Institution is the world’s largest museum, education, and research complex, but even they could use a little help sometimes...", "For those fluent in more than one language, check out this nonprofit that combines language skills with humanitarian aid...", "If you’re looking to take your online volunteering worldwide, this is the place to start...", "Zooniverse is a platform for people-powered research that literally wouldn’t be possible (or practical) without the help of online volunteers..."];

let gridBoxNames = ["American Red Cross", "Amnesty Decoders", "Catchafire", "CHD Living", "Childern of Promise", "Crisis Text Line", "DoSomething.org", "GensConnect", "New Alternatives NYC", "NYC Relief", "Project Gutenberg", "Shopping Angels", "Smithsonian Digital Volunteers", "Translators Without Borders", "United Nations Volunteers", "Zooniverse"];

let gridBoxDescriptionsFull = ["The Red Cross, born of a desire to bring assistance without discrimination to the wounded on the battlefield, endeavors—in its international and national capacity—to prevent and alleviate human suffering wherever it may be found. Its purpose is to protect life and health and to ensure respect for the human being. It promotes mutual understanding, friendship, cooperation and lasting peace amongst all peoples. It makes no discrimination as to nationality, race, religious beliefs, class or political opinions. It endeavors to relieve the suffering of individuals, being guided solely by their needs, and to give priority to the most urgent cases of distress.", "Operated by Amnesty International, this network of digital volunteers helps conduct research into global human rights violations. Volunteers have used their phones and computers to verify the location of oil spills, find evidence of drone strikes, and flag abusive tweets to women politicians in India.", "This volunteer search tool is exclusively for online volunteer projects. Each one has a timeline that can range anywhere from an hour to a few weeks. So whether you have an afternoon or several, you can help not-for-profit with tasks like writing thank-you letters or editing photos.", "CPNYC is the first and only after-school program and summer day camp specifically designed to meet the needs, interests and concerns of children left behind by a parent serving time in prison. Since its inception, we have provided services to over 1,500 children and their families. The agency has developed broad collaborative relationships and community partnerships, raised over $5M dollars in government and philanthropic funding and established it's own innovative and holistic model to support children of incarcerated parents in leading healthy and productive lives.", "Children of Promise supports and embraces children of incarcerated parents. The organization is headquartered in Bedford–Stuyvesant, Brooklyn, one of the highest concentrated areas of children with incarcerated parents in NYC. The organization’s foundation consists of one-on-one mentoring, after school mentoring, summer camps, family engagement, and mental health services. Starting March 23, Children of Promise is offering virtual services, scheduling calls with all after school counselors and their mentees for tele-therapy sessions. They are also preparing hot meals, distributing art supplies, and sending relevant academic packets to those in need. Children of Promise is accepting new volunteer applications and are supporting and training new volunteers virtually, matching new volunteers with children on the waiting list. Go here to apply to volunteer, or here to donate to their COVID-19 emergency relief fund.", "Here’s a perfect example of technology being used for good. Become a volunteer to help the Crisis Text Line continue to offer free, 24/7 support for those in crisis. If you’re at least 18 and can commit to volunteering four hours each week, you can apply to be trained for free.", "DoSomething empowers young people to enact social change both online or off. Volunteer online through one of our campaigns to help solve real-world problems. DoSomething members have used the internet to successfully urge Apple to diversify their emojis, change the dictionary definition of “Black/black”, and create the largest crowdsourced anti-bullying guide.", "Volunteer Program that pairs young kids and teens with seniors over phone call or video call. Can help seniors with anything and talk about experience (technology help or online grocery shopping) for about 10 or 20 minutes a day.", "Thousands of lesbian, gay, bisexual, and transgender youth and young adults are homeless in New York City. Whether they have been kicked out by homophobic families, forced to flee conservative communities, aged out of foster care, or come from families torn apart by poverty, AIDS, drug abuse or eviction, these sleep in the city’s parks, on the subway, and in public facilities. New Alternatives is an organization that helps LGBTQ+ homeless youth transition out of the shelter system to stable adult lives. They provide basic needs like home made meals, hygiene supplies, Metrocards, and referrals for primary care and psychiatric support. They also offer weekly case management, education services, life skills training, recreational activities, and programs for HIV+ youth. During this pandemic, they are still preparing dinners to go and gathering hygiene supplies. You can support them by making a donation here or registering as a volunteer here.", "New York City Relief is a nonprofit organization that serves the homeless community in NYC. Volunteers around the city come together to support and guide people to resources such as food, hygiene kits, housing, clothing, and employment. The homeless community is one of the most vulnerable ones during this outbreak of COVID-19. Please help New York City Relief help the community by donating here. If you have resources to share, you can donate hygiene kits here.", "Founded in 1971, this may just be the virtual volunteering effort that started it all. The goal is to create the largest digital library, and so far they’ve amassed 59,000 free eBooks. Volunteer by donating eligible materials, transcribing books into a digital form, or proofreading others’ work.", "An organization that is helping seniors get groceries delivered to their house all over the country.", "The Smithsonian Institution is the world’s largest museum, education, and research complex, but even they could use a little help sometimes. Help make their collections more accessible by volunteering online to transcribe historical documents or edit Wikipedia articles related to their artifacts and research.", "For those fluent in more than one language, check out this nonprofit that combines language skills with humanitarian aid. Volunteers provide translations (10 million words a year!) to international organizations that focus on crisis relief, health and education.", "If you’re looking to take your online volunteering worldwide, this is the place to start. UNV connects you with organizations working for peace and development in need of skills like research, writing, art, and design. There are already over 12,000 volunteers from 187 countries lending their talents to organizations around the globe.", "Zooniverse is a platform for people-powered research that literally wouldn’t be possible (or practical) without the help of online volunteers. Spend as much or as little time as you’d like identifying endangered animals, classifying galaxy systems, or transcribing Shakespearean manuscripts."];

//hover function for gridBox
for(let i=0; i<gridBox.length; i++){
    gridBox[i].onmouseover = function(){
        gridBox[i].style.opacity = "0.5";
        gridBoxText[i].innerHTML = gridBoxDescriptions[i];
        
    }
        
    gridBox[i].onmouseout = function(){
        gridBox[i].style.opacity = "1";
        gridBoxText[i].innerHTML = "";
    }

    gridBox[i].onclick = function(){
        gridContainer.style.display = "none";
        filterContents.style.display = "none";
        mainText.style.display = "none";
        gridInfo.style.display = "block";
        communityserviceBtn.style.display = "none"
        gridHead.innerHTML = gridBoxNames[i];
        gridDes.innerHTML = gridBoxDescriptionsFull[i];
    }
}

//back button onclick

//mouse functions for go back button
gridInfoButtons[0].onclick = function(){
    gridContainer.style.display = "flex";
    filterContents.style.display = "block";
    mainText.style.display = "block";
    gridInfo.style.display = "none";
    communityserviceBtn.style.display = "block";
}

backBtn.onclick = function(){
    gridContainer.style.display = "none";
    filterContents.style.display = "none";
    mainText.style.display = "none";
    gridInfo.style.display = "block";
    experienceForm.style.display = "none";

}

//mouse functions for plan your experience button
gridInfoButtons[1].onclick = function(){
    gridContainer.style.display = "none";
    experienceForm.style.display = "block"
    filterContents.style.display = "none";
    mainText.style.display = "none";
    gridInfo.style.display = "none";
}

//filter
//iterate through JSON and find type
    //onclick for health button
    button1.onclick = function(){
        if(state == 1){
            for(let j=0; j<gridBox.length; j++){
                if (myJson[j].type.includes('health')){
                    gridBox[j].style.display = "block";
                } else {
                    gridBox[j].style.display = "none"
                }
            }
            state = 2;
        }
        else if (state == 2) {
            for(let i=0; i<gridBox.length; i++) {
                if(myJson[i].type.includes('health') == false){
                    gridBox[i].style.display = "block";
                }
            }
            state = 1;
        }
    }

    //onclick for injustice button
    button2.onclick = function(){
        if(state == 1){
            for(let j=0; j<gridBox.length; j++){
                if (myJson[j].type.includes('injustice')){
                    gridBox[j].style.display = "block";
                } else {
                    gridBox[j].style.display = "none"
                }
            }
            state = 2;
        }
        else if (state == 2) {
            for(let i=0; i<gridBox.length; i++) {
                if(myJson[i].type.includes('injustice') == false){
                    gridBox[i].style.display = "block";
                }
            }
            state = 1;
        }
    }

    //onclick for relief button
    button3.onclick = function(){
        if(state == 1){
             for(let j=0; j<gridBox.length; j++){
                if (myJson[j].type.includes('relief')){
                     gridBox[j].style.display = "block";
                } else {
                    gridBox[j].style.display = "none"
                 }
              }
            state = 2;
        }
        else if (state == 2) {
            for(let i=0; i<gridBox.length; i++) {
                if(myJson[i].type.includes('relief') == false){
                    gridBox[i].style.display = "block";
                }
            }
            state = 1;
        }
    }

    //onclick for education button
    button4.onclick = function(){
        if(state == 1){
            for(let j=0; j<gridBox.length; j++){
                if (myJson[j].type.includes('education')){
                    gridBox[j].style.display = "block";
                } else {
                    gridBox[j].style.display = "none"
                }
            }
            state = 2;
        }
        else if (state == 2) {
            for(let i=0; i<gridBox.length; i++) {
                if(myJson[i].type.includes('education') == false){
                    gridBox[i].style.display = "block";
                }
            }
            state = 1;
        }
    }

    //onclick for tool button
    button5.onclick = function(){
        if(state == 1){
            for(let j=0; j<gridBox.length; j++){
                if (myJson[j].type.includes('tool')){
                    gridBox[j].style.display = "block";
                } else {
                    gridBox[j].style.display = "none"
                }
            }
            state = 2;
        }
        else if (state == 2) {
            for(let i=0; i<gridBox.length; i++) {
                if(myJson[i].type.includes('tool') == false){
                    gridBox[i].style.display = "block";
                }
            }
            state = 1;
        }
    }








let statesArray = [2, 2, 2, 2, 2];
let selected = [0, 1, 2, 3, 4];
function filter(){
    for (let i=0; i<statesArray.length; i++) {
        console.log(i, selected.includes(i));
        if (selected.includes(i)) {
            if (statesArray[i] == 1) {
                selected.splice(i, 1, "");
            }
        } else {
            if (statesArray[i] == 2) {
                selected.push(i);
            }
        } 
    }
    console.log(selected);
}
