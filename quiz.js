const mainContainer = document.querySelector("main");
const deniedContainer = document.getElementById("denied-container");
const welcomeContainer = document.getElementById("welcome-container");
const quizContainer = document.getElementById("quiz-container");
let welcomeHaderText = document.getElementById("welcome-header-text");
const viewPartcipantsBtn = document.getElementById("score-table-btn");
const tableContainer = document.getElementById("table-section");
let scoreOutPut = document.getElementById("score")
let quizData = JSON.parse(localStorage.getItem("quiz")) || [];
let finalScore = 0;
let score = 4;


//Get the login inputs
const logInContainer = document.getElementById("login-container");
const firstNameInput = document.getElementById("first-name");
const lastNameInput = document.getElementById("last-name");
const ageInput = document.getElementById("age");

function proceedToQuiz(){
  const firstName = firstNameInput.value.trim().toLowerCase();
  const lastName = lastNameInput.value.trim().toLowerCase();
  const age = ageInput.value;
  //check for inputs
  if(firstName && lastName && age){
    //Check if user is above the required age
      if(age > 18){
          logInContainer.classList.add("hidden");
          deniedContainer.classList.remove("hidden");
        return;
      }
    
    //Check if participant has already registered
    let participantExists = quizData.some(user => user.firstName === firstName && user.lastName === lastName && user.age === age);
    
    if(participantExists){
      alert("This participant has already registered!");
    }else{
      quizData.push({firstName, lastName, age});
      localStorage.setItem("quiz", JSON.stringify(quizData));
      welcomeHaderText.textContent = `Welcome ${firstName.toUpperCase()} ${lastName.toUpperCase()}`;
      logInContainer.classList.add("hidden");
      welcomeContainer.classList.remove("hidden");
      
      //Clearing the input fields
      firstNameInput.value = "";
     lastNameInput.value = "";
     ageInput.value = "";
      //console.log(quizData);
    }
    
  }else{
    alert("All input fields must be filled!")
  }
};

function closeAlertDialog(){
  logInContainer.classList.remove("hidden");
  deniedContainer.classList.add("hidden");
  firstNameInput.value = "";
  lastNameInput.value = "";
  ageInput.value = "";
}

function closeWelcomeDialog(){
  logInContainer.classList.remove("hidden");
  welcomeContainer.classList.add("hidden");
}

//Matching participant's answer
const q1Input = document.getElementById("answer1");
const answer1OutPut = document.getElementById("answer1-output");
const answer1Btn = document.getElementById("ansa1-btn");
function answer1(){
  const answer1 = Number(q1Input.value.trim());
  
   if(!answer1){
     alert("Please type in your answer!")
   }else if(answer1 === 1961){
    finalScore += score;
     quizData.score = finalScore;
     localStorage.setItem("quiz", JSON.stringify(quizData));
   answer1OutPut.textContent = "Correct! 1961 is the correct answer ✅";
    q1Input.disabled = true;
    answer1Btn.disabled = true;
     scoreOutPut.innerHTML = `${finalScore} points`;
  }else{
    answer1OutPut.textContent = "Wrong! 1961 is the correct answer ❌";
    q1Input.disabled = true;
    answer1Btn.disabled = true;
  }
}

const q2Input = document.getElementById("answer2");
const answer2OutPut = document.getElementById("answer2-output");
const answer2Btn = document.getElementById("ansa2-btn");
function answer2(){
  const answer2 = q2Input.value.trim().toLowerCase();
  if(!answer2){
     alert("Please type in your answer!")
  }else if(answer2 === "sir milton margai" || answer2 === "milton margai"){
    finalScore += score;
     quizData.score = finalScore;
     localStorage.setItem("quiz", JSON.stringify(quizData));
   answer2OutPut.textContent = "Correct! Sir Milton Margai is the correct answer ✅";
    q2Input.disabled = true;
    answer2Btn.disabled = true;
    scoreOutPut.innerHTML = `${finalScore} points`;
  }else{
    answer2OutPut.textContent = "Wrong! Sir Milton Margai is the correct answer ❌";
    q2Input.disabled = true;
    answer2Btn.disabled = true;
  }
}

const q3Input = document.getElementById("answer3");
const answer3OutPut = document.getElementById("answer3-output");
const answer3Btn = document.getElementById("ansa3-btn");
function answer3(){
  const answer3 = q3Input.value.trim().toLowerCase();
  if(!answer3){
     alert("Please type in your answer!");
  }else if(answer3 === "freetown"){
    finalScore += score;
     quizData.score = finalScore;
     localStorage.setItem("quiz", JSON.stringify(quizData));
   answer3OutPut.textContent = "Correct! Freetown is the correct answer ✅";
    q3Input.disabled = true;
    answer3Btn.disabled = true;
    scoreOutPut.innerHTML = `${finalScore} points`;
  }else{
    answer3OutPut.textContent = "Wrong! Freetown is the correct answer ❌";
    q3Input.disabled = true;
    answer3Btn.disabled = true;
  }
}

const q4Input = document.getElementById("answer4");
const answer4OutPut = document.getElementById("answer4-output");
const answer4Btn = document.getElementById("ansa4-btn");
function answer4(){
  const answer4 = q4Input.value.trim().toLowerCase();
  if(!answer4){
     alert("Please type in your answer!");
  }else if(answer4 === "britain"){
    finalScore += score;
     quizData.score = finalScore;
     localStorage.setItem("quiz", JSON.stringify(quizData));
   answer4OutPut.textContent = "Correct! Britain is the correct answer ✅";
    q4Input.disabled = true;
    answer4Btn.disabled = true;
   scoreOutPut.innerHTML = `${finalScore} points`;
  }else{
    answer4OutPut.textContent = "Wrong! Britain is the correct answer ❌";
    q4Input.disabled = true;
    answer4Btn.disabled = true;
  }
}

const q5Input = document.getElementById("answer5");
const answer5OutPut = document.getElementById("answer5-output");
const answer5Btn = document.getElementById("ansa5-btn");
function answer5(){
  const answer5 = q5Input.value.trim().toLowerCase();
  if(!answer5){
     alert("Please type in your answer!");
  }else if(answer5 === "civil war" || answer5 === "the civil war" || answer5 === " The Sierra Leone Civil War"){
    finalScore += score;
     quizData.score = finalScore;
     localStorage.setItem("quiz", JSON.stringify(quizData));
   answer5OutPut.textContent = "Correct!  The Sierra Leone Civil War is the correct answer ✅";
    q5Input.disabled = true;
    answer5Btn.disabled = true;
    scoreOutPut.innerHTML = `${finalScore} points`;
  }else{
    answer5OutPut.textContent = "Wrong!  The Sierra Leone Civil War is the correct answer ❌";
    q5Input.disabled = true;
    answer5Btn.disabled = true;
  }
}

const q6Input = document.getElementById("answer6");
const answer6OutPut = document.getElementById("answer6-output");
const answer6Btn = document.getElementById("ansa6-btn");
function answer6(){
  const answer6 = q6Input.value.trim().toLowerCase();
  if(!answer6){
     alert("Please type in your answer!");
  }else if(answer6 === "siaka stevens"){
    finalScore += score;
      quizData.score = finalScore;
     localStorage.setItem("quiz", JSON.stringify(quizData));
   answer6OutPut.textContent = "Correct! Siaka Stevens is the correct answer ✅";
    q6Input.disabled = true;
    answer6Btn.disabled = true;
    scoreOutPut.innerHTML = `${finalScore} points`;
  }else{
    answer6OutPut.textContent = "Wrong! Siaka Stevens is the correct answer ❌";
    q6Input.disabled = true;
    answer6Btn.disabled = true;
  }
}

const q7Input = document.getElementById("answer7");
const answer7OutPut = document.getElementById("answer7-output");
const answer7Btn = document.getElementById("ansa7-btn");
function answer7(){
  const answer7 = q7Input.value.trim().toLowerCase();
  if(!answer7){
     alert("Please type in your answer!");
  }else if(answer7 === "state house"){
    finalScore += score;
     quizData.score = finalScore;
     localStorage.setItem("quiz", JSON.stringify(quizData));
   answer7OutPut.textContent = "Correct! State House is the correct answer ✅";
    q7Input.disabled = true;
    answer7Btn.disabled = true;
    scoreOutPut.innerHTML = `${finalScore} points`;
  }else{
    answer7OutPut.textContent = "Wrong! State House is the correct answer ❌";
    q7Input.disabled = true;
    answer7Btn.disabled = true;
  }
}

const q8Input = document.getElementById("answer8");
const answer8OutPut = document.getElementById("answer8-output");
const answer8Btn = document.getElementById("ansa8-btn");
function answer8(){
  const answer8 = q8Input.value.trim().toLowerCase();
  if(!answer8){
     alert("Please type in your answer!");
  }else if(answer8 === "parliament" || answer8 === "House of parliament"){
    finalScore += score;
     quizData.score = finalScore;
     localStorage.setItem("quiz", JSON.stringify(quizData));
   answer8OutPut.textContent = "Correct! House of Parliamanet is the correct answer ✅";
    q8Input.disabled = true;
    answer8Btn.disabled = true;
    scoreOutPut.innerHTML = `${finalScore} points`;
  }else{
    answer8OutPut.textContent = "Wrong! House of Parliament is the correct answer ❌";
    q8Input.disabled = true;
    answer8Btn.disabled = true;
  }
}

const q9Input = document.getElementById("answer9");
const answer9OutPut = document.getElementById("answer9-output");
const answer9Btn = document.getElementById("ansa9-btn");
function answer9(){
  const answer9 = q9Input.value.trim().toLowerCase();
  if(!answer9){
     alert("Please type in your answer!");
  }else if(answer9 === "special court" || answer9 === "the special court"){
    finalScore += score;
     quizData.score = finalScore;
     localStorage.setItem("quiz", JSON.stringify(quizData));
   answer9OutPut.textContent = "Correct! Special Court is the correct answer ✅";
    q9Input.disabled = true;
    answer9Btn.disabled = true;
    scoreOutPut.innerHTML = `${finalScore} points`;
  }else{
    answer9OutPut.textContent = "Wrong! Special Court is the correct answer ❌";
    q9Input.disabled = true;
    answer9Btn.disabled = true;
  }
}

const q10Input = document.getElementById("answer10");
const answer10OutPut = document.getElementById("answer10-output");
const answer10Btn = document.getElementById("ansa10-btn");
function answer10(){
  const answer10 = Number(q10Input.value.trim())
  if(!answer10){
     alert("Please type in your answer!");
  }else if(answer10 === 1971 ){
    finalScore += score;
     quizData.score = finalScore;
     localStorage.setItem("quiz", JSON.stringify(quizData));
   answer10OutPut.textContent = "Correct! 1971 is the correct answer ✅";
    q10Input.disabled = true;
    answer10Btn.disabled = true;
    scoreOutPut.innerHTML = `${finalScore} points`;
  }else{
    answer10OutPut.textContent = "Wrong! 1971 is the correct answer ❌";
    q10Input.disabled = true;
    answer10Btn.disabled = true;
  }
}

const q11Input = document.getElementById("answer11");
const answer11OutPut = document.getElementById("answer11-output");
const answer11Btn = document.getElementById("ansa11-btn");
function answer11(){
  const answer11 = q11Input.value.trim().toLowerCase();
  if(!answer11){
     alert("Please type in your answer!");
  }else if(answer11 === "bintumani" || answer11 === "bintumani mountain"){
    finalScore += score;
     quizData.score = finalScore;
     localStorage.setItem("quiz", JSON.stringify(quizData));
   answer11OutPut.textContent = "Correct! Bintumani Mountain is the correct answer ✅";
    q11Input.disabled = true;
    answer11Btn.disabled = true;
    scoreOutPut.innerHTML = `${finalScore} points`;
  }else{
    answer11OutPut.textContent = "Wrong! Bintumani Mountain is the correct answer ❌";
    q11Input.disabled = true;
    answer11Btn.disabled = true;
  }
}

const q12Input = document.getElementById("answer12");
const answer12OutPut = document.getElementById("answer12-output");
const answer12Btn = document.getElementById("ansa12-btn");
function answer12(){
  const answer12 = q12Input.value.trim().toLowerCase();
  if(!answer12){
     alert("Please type in your answer!");
  }else if(answer12 === "water quay" || answer12 === "queen elizabeth quay"){
    finalScore += score;
     quizData.score = finalScore;
     localStorage.setItem("quiz", JSON.stringify(quizData));
   answer12OutPut.textContent = "Correct! Queen Elizabeth Quay is the correct answer ✅";
    q12Input.disabled = true;
    answer12Btn.disabled = true;
    scoreOutPut.innerHTML = `${finalScore} points`;
  }else{
    answer12OutPut.textContent = "Wrong! Queen Elizabeth Quay is the correct answer ❌";
    q12Input.disabled = true;
    answer12Btn.disabled = true;
  }
}

const q13Input = document.getElementById("answer13");
const answer13OutPut = document.getElementById("answer13-output");
const answer13Btn = document.getElementById("ansa13-btn");
function answer13(){
  const answer13 = q13Input.value.trim().toLowerCase();
  if(!answer13){
     alert("Please type in your answer!");
  }else if(answer13 === "guinea and liberia" || answer13 === "liberia and guinea"){
    finalScore += score;
     quizData.score = finalScore;
     localStorage.setItem("quiz", JSON.stringify(quizData));
   answer13OutPut.textContent = "Correct! Guinea and Liberia is the correct answer ✅";
    q13Input.disabled = true;
    answer13Btn.disabled = true;
    scoreOutPut.innerHTML = `${finalScore} points`;
  }else{
    answer13OutPut.textContent = "Wrong! Guinea and Liberia is the correct answer ❌";
    q13Input.disabled = true;
    answer13Btn.disabled = true;
  }
}

const q14Input = document.getElementById("answer14");
const answer14OutPut = document.getElementById("answer14-output");
const answer14Btn = document.getElementById("ansa14-btn");
function answer14(){
  const answer14 = q14Input.value.trim().toLowerCase();
  if(!answer14){
     alert("Please type in your answer!");
  }else if(answer14 === "rokel" || answer14 === "river rokel" || answer14 === "rokel river"){
    finalScore += score;
     quizData.score = finalScore;
     localStorage.setItem("quiz", JSON.stringify(quizData));
   answer14OutPut.textContent = "Correct! River Rokel is the correct answer ✅";
    q14Input.disabled = true;
    answer14Btn.disabled = true;
    scoreOutPut.innerHTML = `${finalScore} points`;
  }else{
    answer14OutPut.textContent = "Wrong! River Rokel is the correct answer ❌";
    q14Input.disabled = true;
    answer14Btn.disabled = true;
  }
}

const q15Input = document.getElementById("answer15");
const answer15OutPut = document.getElementById("answer15-output");
const answer15Btn = document.getElementById("ansa15-btn");
function answer15(){
  const answer15 = q15Input.value.trim().toLowerCase();
  if(!answer15){
     alert("Please type in your answer!");
  }else if(answer15 === "atlantic ocean" || answer15 === "atlantic"){
    finalScore += score;
     quizData.score = finalScore;
     localStorage.setItem("quiz", JSON.stringify(quizData));
   answer15OutPut.textContent = "Correct! Atlantic Ocean is the correct answer ✅";
    q15Input.disabled = true;
    answer15Btn.disabled = true;
   scoreOutPut.innerHTML = `${finalScore} points`;
  }else{
    answer15OutPut.textContent = "Wrong! Atlantic Ocean is the correct answer ❌";
    q15Input.disabled = true;
    answer15Btn.disabled = true;
  }
}

const q16Input = document.getElementById("answer16");
const answer16OutPut = document.getElementById("answer16-output");
const answer16Btn = document.getElementById("ansa16-btn");
function answer16(){
  const answer16 = q16Input.value.trim().toLowerCase();
  if(!answer16){
     alert("Please type in your answer!");
  }else if(answer16 === "sherbro island"){
    finalScore += score;
     quizData.score = finalScore;
     localStorage.setItem("quiz", JSON.stringify(quizData));
   answer16OutPut.textContent = "Correct! Sherbro Island is the correct answer ✅";
    q16Input.disabled = true;
    answer16Btn.disabled = true;
    scoreOutPut.innerHTML = `${finalScore} points`;
  }else{
    answer16OutPut.textContent = "Wrong! Sherbro Island is the correct answer ❌";
    q16Input.disabled = true;
    answer16Btn.disabled = true;
  }
}

const q17Input = document.getElementById("answer17");
const answer17OutPut = document.getElementById("answer17-output");
const answer17Btn = document.getElementById("ansa17-btn");
function answer17(){
  const answer17 = q17Input.value.trim().toLowerCase();
  if(!answer17){
     alert("Please type in your answer!");
  }else if(answer17 === "kilimi"){
    finalScore += score;
     quizData.score = finalScore;
     localStorage.setItem("quiz", JSON.stringify(quizData));
   answer17OutPut.textContent = "Correct! Outamba-Kilimi National park is the correct answer ✅";
    q17Input.disabled = true;
    answer17Btn.disabled = true;
    scoreOutPut.innerHTML = `${finalScore} points`;
  }else{
    answer17OutPut.textContent = "Wrong! Outamba-Kilimi National park is the correct answer ❌";
    q17Input.disabled = true;
    answer17Btn.disabled = true;
  }
}

const q18Input = document.getElementById("answer18");
const answer18OutPut = document.getElementById("answer18-output");
const answer18Btn = document.getElementById("ansa18-btn");
function answer18(){
  const answer18 = q18Input.value.trim().toLowerCase();
  if(!answer18){
     alert("Please type in your answer!");
  }else if(answer18 === "diamond"){
    finalScore += score;
     quizData.score = finalScore;
     localStorage.setItem("quiz", JSON.stringify(quizData));
   answer18OutPut.textContent = "Correct! Diamond is the correct answer ✅";
    q18Input.disabled = true;
    answer18Btn.disabled = true;
    scoreOutPut.innerHTML = `${finalScore} points`;
  }else{
    answer18OutPut.textContent = "Wrong! Diamond is the correct answer ❌";
    q18Input.disabled = true;
    answer18Btn.disabled = true;
  }
}

const q19Input = document.getElementById("answer19");
const answer19OutPut = document.getElementById("answer19-output");
const answer19Btn = document.getElementById("ansa19-btn");
function answer19(){
  const answer19 = q19Input.value.trim().toLowerCase();
  if(!answer19){
     alert("Please type in your answer!");
  }else if(answer19 === "lumley beach"){
    finalScore += score;
     quizData.score = finalScore;
     localStorage.setItem("quiz", JSON.stringify(quizData));
   answer19OutPut.textContent = "Correct! Lumley Beach is the correct answer ✅";
    q19Input.disabled = true;
    answer19Btn.disabled = true;
    scoreOutPut.innerHTML = `${finalScore} points`;
  }else{
    answer19OutPut.textContent = "Wrong! Lumley Beach is the correct answer ❌";
    q19Input.disabled = true;
    answer19Btn.disabled = true;
  }
}

const q20Input = document.getElementById("answer20");
const answer20OutPut = document.getElementById("answer20-output");
const answer20Btn = document.getElementById("ansa20-btn");
function answer20(){
  const answer20 = q20Input.value.trim().toLowerCase();
  if(!answer20){
     alert("Please type in your answer!");
  }else if(answer20 === "tropical climate"){
    finalScore += score;
     quizData.score = finalScore;
     localStorage.setItem("quiz", JSON.stringify(quizData));
   answer20OutPut.textContent = "Correct! Tropical Climate is the correct answer ✅";
    q20Input.disabled = true;
    answer20Btn.disabled = true;
    scoreOutPut.innerHTML = `${finalScore} points`;
  }else{
    answer20OutPut.textContent = "Wrong! Tropical Climate is the correct answer ❌";
    q20Input.disabled = true;
    answer20Btn.disabled = true;
  }
}

const q21Input = document.getElementById("answer21");
const answer21OutPut = document.getElementById("answer21-output");
const answer21Btn = document.getElementById("ansa21-btn");
function answer21(){
  const answer21 = q21Input.value.trim().toLowerCase();
  if(!answer21){
     alert("Please type in your answer!");
  }else if(answer21 === "krio"){
    finalScore += score;
     quizData.score = finalScore;
     localStorage.setItem("quiz", JSON.stringify(quizData));
   answer21OutPut.textContent = "Correct! Krio is the correct answer ✅";
    q21Input.disabled = true;
    answer21Btn.disabled = true;
    scoreOutPut.innerHTML = `${finalScore} points`;
  }else{
    answer21OutPut.textContent = "Wrong! Krio is the correct answer ❌";
    q21Input.disabled = true;
    answer21Btn.disabled = true;
  }
}

const q22Input = document.getElementById("answer22");
const answer22OutPut = document.getElementById("answer22-output");
const answer22Btn = document.getElementById("ansa22-btn");
function answer22(){
  const answer22 = q22Input.value.trim().toLowerCase();
  if(!answer22){
     alert("Please type in your answer!");
  }else if(answer22 === "leone"){
    finalScore += score;
     quizData.score = finalScore;
     localStorage.setItem("quiz", JSON.stringify(quizData));
   answer22OutPut.textContent = "Correct! Leone is the correct answer ✅";
    q22Input.disabled = true;
    answer22Btn.disabled = true;
    scoreOutPut.innerHTML = `${finalScore} points`;
  }else{
    answer22OutPut.textContent = "Wrong! Leone is the correct answer ❌";
    q22Input.disabled = true;
    answer22Btn.disabled = true;
  }
}

const q23Input = document.getElementById("answer23");
const answer23OutPut = document.getElementById("answer23-output");
const answer23Btn = document.getElementById("ansa23-btn");
function answer23(){
  const answer23 = q23Input.value.trim().toLowerCase();
  if(!answer23){
     alert("Please type in your answer!");
  }else if(answer23 === "cassava leaf stew"){
    finalScore += score;
     quizData.score = finalScore;
     localStorage.setItem("quiz", JSON.stringify(quizData));
   answer23OutPut.textContent = "Correct! Cassava Leaf Stew is the correct answer ✅";
    q23Input.disabled = true;
    answer23Btn.disabled = true;
    scoreOutPut.innerHTML = `${finalScore} points`;
  }else{
    answer23OutPut.textContent = "Wrong! Cassava Leaf Stew is the correct answer ❌";
    q23Input.disabled = true;
    answer23Btn.disabled = true;
  }
}

const q24Input = document.getElementById("answer24");
const answer24OutPut = document.getElementById("answer24-output");
const answer24Btn = document.getElementById("ansa24-btn");
function answer24(){
  const answer24 = q24Input.value.trim().toLowerCase();
  if(!answer24){
     alert("Please type in your answer!");
  }else if(answer24 === "bondo and poro" || answer24 === "poro and bondo"){
    finalScore += score;
    quizData.score = finalScore;
     localStorage.setItem("quiz", JSON.stringify(quizData));
   answer24OutPut.textContent = "Correct! Poro and Bondo is the correct answer ✅";
    q24Input.disabled = true;
    answer24Btn.disabled = true;
    scoreOutPut.innerHTML = `${finalScore} points`;
  }else{
    answer24OutPut.textContent = "Wrong! Poro and Bondo is the correct answer ❌";
    q24Input.disabled = true;
    answer24Btn.disabled = true;
  }
}

const q25Input = document.getElementById("answer25");
const answer25OutPut = document.getElementById("answer25-output");
const answer25Btn = document.getElementById("ansa25-btn");
function answer25(){
  const answer25 = q25Input.value.trim().toLowerCase();
  if(!answer25){
     alert("Please type in your answer!");
  }else if(answer25 === "football" || answer25 === "foot ball"){
    finalScore += score;
     quizData.score = finalScore;
     localStorage.setItem("quiz", JSON.stringify(quizData));
   answer25OutPut.textContent = "Correct! Football is the correct answer ✅";
    q25Input.disabled = true;
    answer25Btn.disabled = true;
    scoreOutPut.innerHTML = `${finalScore} points`;
  }else{
    answer25OutPut.textContent = "Wrong! Football is the correct answer ❌";
    q25Input.disabled = true;
    answer25Btn.disabled = true;
  }
}

const q26Input = document.getElementById("answer26");
const answer26OutPut = document.getElementById("answer26-output");
const answer26Btn = document.getElementById("ansa26-btn");
function answer26(){
  const answer26 = q26Input.value.trim().toLowerCase();
  if(!answer26){
     alert("Please type in your answer!");
  }else if(answer26 === "ishmael bah" || answer26 === "ishmail bah"){
    finalScore += score;
     quizData.score = finalScore;
     localStorage.setItem("quiz", JSON.stringify(quizData));
   answer26OutPut.textContent = "Correct! Ishmael Bah is the correct answer ✅";
    q26Input.disabled = true;
    answer26Btn.disabled = true;
    scoreOutPut.innerHTML = `${finalScore} points`;
  }else{
    answer26OutPut.textContent = "Wrong! Ishmael Bah is the correct answer ❌";
    q26Input.disabled = true;
    answer26Btn.disabled = true;
  }
}

const q27Input = document.getElementById("answer27");
const answer27OutPut = document.getElementById("answer27-output");
const answer27Btn = document.getElementById("ansa27-btn");
function answer27(){
  const answer27 = q27Input.value.trim().toLowerCase();
  if(!answer27){
     alert("Please type in your answer!");
  }else if(answer27 === "leone star" || answer27 === "leone stars"){
    finalScore += score;
     quizData.score = finalScore;
     localStorage.setItem("quiz", JSON.stringify(quizData));
   answer27OutPut.textContent = "Correct! Leone stars is the correct answer ✅";
    q27Input.disabled = true;
    answer27Btn.disabled = true;
    scoreOutPut.innerHTML = `${finalScore} points`;
  }else{
    answer27OutPut.textContent = "Wrong! Leone stars is the correct answer ❌";
    q27Input.disabled = true;
    answer27Btn.disabled = true;
  }
}

const q28Input = document.getElementById("answer28");
const answer28OutPut = document.getElementById("answer28-output");
const answer28Btn = document.getElementById("ansa28-btn");
function answer28(){
  const answer28 = q28Input.value.trim().toLowerCase();
  if(!answer28){
     alert("Please type in your answer!");
  }else if(answer28 === "how de bodi" || answer28 === "how di body"){
    finalScore += score;
     quizData.score = finalScore;
     localStorage.setItem("quiz", JSON.stringify(quizData));
   answer28OutPut.textContent = "Correct! How Di Bodi is the correct answer ✅";
    q28Input.disabled = true;
    answer28Btn.disabled = true;
    scoreOutPut.innerHTML = `${finalScore} points`;
  }else{
    answer28OutPut.textContent = "Wrong! How Di Bodi is the correct answer ❌";
    q28Input.disabled = true;
    answer28Btn.disabled = true;
  }
}

const q29Input = document.getElementById("answer29");
const answer29OutPut = document.getElementById("answer29-output");
const answer29Btn = document.getElementById("ansa29-btn");
function answer29(){
  const answer29 = q29Input.value.trim().toLowerCase();
  if(!answer29){
     alert("Please type in your answer!");
  }else if(answer29 === "country cloth" || answer29 === "kontri cloth"){
    finalScore += score;
     quizData.score = finalScore;
     localStorage.setItem("quiz", JSON.stringify(quizData));
   answer29OutPut.textContent = "Correct! Country Cloth is the correct answer ✅";
    q29Input.disabled = true;
    answer29Btn.disabled = true;
    scoreOutPut.innerHTML = `${finalScore} points`;
  }else{
    answer29OutPut.textContent = "Wrong! Country Cloth is the correct answer ❌";
    q29Input.disabled = true;
    answer29Btn.disabled = true;
  }
}

const q30Input = document.getElementById("answer30");
const answer30OutPut = document.getElementById("answer30-output");
const answer30Btn = document.getElementById("ansa30-btn");
function answer30(){
  const answer30 = q30Input.value.trim().toLowerCase();
  if(!answer30){
     alert("Please type in your answer!");
  }else if(answer30 === "mende"){
    finalScore += score;
     quizData.score = finalScore;
     localStorage.setItem("quiz", JSON.stringify(quizData));
   answer30OutPut.textContent = "Correct! Mende is the correct answer ✅";
    q30Input.disabled = true;
    answer30Btn.disabled = true;
    scoreOutPut.innerHTML = `${finalScore} points`;
  }else{
    answer30OutPut.textContent = "Wrong! Mende is the correct answer ❌";
    q30Input.disabled = true;
    answer30Btn.disabled = true;
  }
}

function startQuiz(){
 welcomeContainer.classList.add("hidden"); 
 quizContainer.classList.remove("hidden");
}

const dialogBox = document.getElementById("dialog-box");

function closeQuizContainer(){
  dialogBox.showModal();
}

let quizBtn = document.getElementById("quiz-btn");
function yesDialog(){
  quizContainer.classList.add("hidden");
  welcomeContainer.classList.remove("hidden");
  dialogBox.close();
  quizBtn.textContent = "Back to quiz";
}

function noDialog(){
  dialogBox.close();
}

//Check if the all input fields has been filled
const inputs = document.querySelectorAll(".inputs");

function checkInputs() {
    // Check if every input field has a value
    const allFilled = Array.from(inputs).every(input => input.value.trim() !== "" && input.value.length >= 4);

    if (allFilled) {
        viewPartcipantsBtn.classList.remove("hidden");
        alert("Congrats for participating in this quiz. Scroll to the top to see your points!");
      viewPartcipantsBtn.classList.remove("hidden");
    } else {
        viewPartcipantsBtn.classList.add("hidden"); 
    }
}
inputs.forEach(input => input.addEventListener("input", checkInputs));

const tableBody = document.getElementById("table-body");
function viewScore(){
  localStorage.setItem("quiz", JSON.stringify(quizData));
  tableBody.innerHTML = "";
  quizData.forEach((person, index)=>{
    const row = document.createElement("tr");
    row.innerHTML = `
    <td>${person.firstName.toUpperCase()}</td>
    <td>${person.lastName.toUpperCase()}</td>
    <td><div id="delete-div">${person.age} <button onclick="deletePat(${index})" id="delete-btn">Delete</button></div></td>
    `
    tableBody.appendChild(row);
  })
  quizContainer.classList.remove("hidde");
}

function registered1(){
  viewScore();
  logInContainer.classList.add("hidden");
  tableContainer.classList.remove("hidden");
}

function registered2(){
  viewScore();
  quizContainer.classList.add("hidden");
  tableContainer.classList.remove("hidden");
}

function closeTable(){
  tableContainer.classList.add("hidden");
  logInContainer.classList.remove("hidden");
}

function deletePat(index){
  quizData.splice(index, 1);
  localStorage.setItem("quiz", JSON.stringify(quizData));
  viewScore();
}
