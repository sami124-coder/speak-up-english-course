const lessons = [
  {day:1, unit:1, title:"Classroom English", goal:"Ask for help and speak from day one.", language:"Can you repeat that, please? · I don’t understand. · Can you help me?", listen:"Teacher: Open your book to page ten, please.\nMia: Sorry, can you repeat that, please?\nTeacher: Of course. Open your book to page ten.\nMia: Thank you. How do you say this word?\nTeacher: “Adventure.”\nMia: Adventure. I’m ready!", task:"Use problem cards to ask for help, then complete a classroom-English scavenger hunt.", worksheet:"Match problems to help phrases. Complete “Can you ___ that, please?” Write one phrase for tomorrow."},
  {day:2, unit:1, title:"Introductions", goal:"Introduce yourself and ask follow-up questions.", language:"My name is… · I’m ___ years old. · What about you?", listen:"Leo: Hi! I’m Leo. What’s your name?\nAisha: I’m Aisha. Nice to meet you.\nLeo: How old are you?\nAisha: I’m ten. I love drawing. What about you?\nLeo: I’m eleven, and I like basketball.", task:"Interview five classmates, then introduce one partner to the class.", worksheet:"Prepare a six-line About Me card and three questions."},
  {day:3, unit:1, title:"Family & Friends", goal:"Describe a person’s appearance and personality.", language:"He/She has… · He/She is kind/funny/creative. · We like to…", listen:"Ben: Who is in this photo?\nSofia: This is my cousin, Elena. She has curly brown hair and glasses.\nBen: What is she like?\nSofia: She is funny and very creative. We make comics together.", task:"Play describe-and-draw, then Guess Who with respectful clues.", worksheet:"Create a person profile with four sentence starters."},
  {day:4, unit:1, title:"Likes & Reasons", goal:"Share an opinion and explain it with “because.”", language:"I love/like/don’t like… · because… · Do you agree?", listen:"Noah: Do you like rainy days?\nEmi: Yes, because I can read and listen to the rain.\nNoah: I don’t. I like sunny days because I can ride my bike.\nEmi: We like different things!", task:"Choose a corner, explain your opinion, and find three things you share with a partner.", worksheet:"Complete four opinion-and-reason sentences."},
  {day:5, unit:1, title:"Daily Routines", goal:"Describe your day in order and tell the time.", language:"I usually… at… · First · Then · After that · Finally", listen:"Jay: I get up at seven. First, I wash my face. Then I eat breakfast at seven thirty. I go to school at eight. After school, I play football. Finally, I read before bed.", task:"Complete a partner timetable and compare routines using “We both…”", worksheet:"Draw a six-step routine timeline and label each time."},
  {day:6, unit:2, title:"Café Role-play", goal:"Order food and drink politely.", language:"I’d like… · Can I have…? · Anything else? · How much is it?", listen:"Server: Hello. What would you like?\nCustomer: I’d like a cheese sandwich and orange juice, please.\nServer: Anything else?\nCustomer: Can I have an apple?\nServer: Sure. That’s seven dollars.", task:"Run a mystery café. Each customer has a budget and a food preference.", worksheet:"Build a meal under $10 and prepare dialogue prompts."},
  {day:7, unit:2, title:"Hobbies & Abilities", goal:"Talk about skills and learning goals.", language:"I can… · I can’t… yet. · I’m good at… · I want to learn…", listen:"Hana: What do you do after school?\nOmar: I play guitar. I can play three songs, but I can’t read music yet.\nHana: I’m good at swimming. I want to learn to dive.", task:"Complete a talent survey and create a class skills club.", worksheet:"Make a can / can’t yet / want to learn chart."},
  {day:8, unit:2, title:"Places & Directions", goal:"Ask for and give simple directions.", language:"Go straight. · Turn left/right. · next to · opposite · between", listen:"Tourist: Excuse me, where is the library?\nChild: Go straight for one block. Turn right at the café. The library is next to the bank.\nTourist: Is it far?\nChild: No, it’s about five minutes.", task:"Use information-gap town maps and guide a partner to hidden destinations.", worksheet:"Draw the heard route and write four direction steps."},
  {day:9, unit:2, title:"Shopping", goal:"Ask about price, color, and size, then buy an item.", language:"How much is this? · Do you have it in blue? · I’ll take it.", listen:"Assistant: Can I help you?\nCustomer: How much is this cap?\nAssistant: It’s eight dollars.\nCustomer: Do you have it in blue?\nAssistant: Yes. Here you are.\nCustomer: Great. I’ll take it.", task:"Use play money to buy three useful items without exceeding your budget.", worksheet:"Complete a shopping list with cost, total, and change."},
  {day:10, unit:2, title:"Feelings & Health", goal:"Explain a problem and give simple advice.", language:"I feel… · I have a… · You should… · You shouldn’t…", listen:"Nurse: What’s wrong?\nSam: I have a headache, and I feel tired.\nNurse: You should drink water and rest. You shouldn’t look at a screen for a while.\nSam: Thank you.", task:"Take turns as patient and helper using safe everyday health cards.", worksheet:"Match six common problems with sensible advice."},
  {day:11, unit:3, title:"Storytelling", goal:"Tell a story with a beginning, middle, and ending.", language:"One day… · Suddenly… · Then… · In the end…", listen:"One day, Maya found a tiny key under a tree. Suddenly, she heard a bell inside an old garden wall. The key opened a little door. Inside was a box of seeds and a note: “Plant kindness.” In the end, Maya shared the seeds with everyone.", task:"Use picture prompts to tell a one-minute story with five linking phrases.", worksheet:"Plan your story on a five-box story mountain."},
  {day:12, unit:3, title:"Team Challenge", goal:"Suggest ideas and solve a problem in English.", language:"I have an idea. · What do you think? · Let’s try… · I agree.", listen:"Ava: We need to build a bridge with ten straws. Let’s make triangles.\nMax: Why triangles?\nAva: They are strong. What do you think?\nMax: I agree. I can hold the base.", task:"Build a paper tower or straw bridge while earning communication points.", worksheet:"Record the plan, jobs, materials, result, and one improvement."},
  {day:13, unit:3, title:"Mini Debates", goal:"Give an opinion and agree or disagree politely.", language:"I think… · I agree because… · I see your point, but… · For example…", listen:"Ruby: Homework should be short because children need time to play.\nKai: I agree free time is important, but a little homework helps us remember.\nRuby: Maybe fifteen minutes is enough.\nKai: That sounds fair.", task:"Complete a friendly mini debate: opinion, reason, example, response.", worksheet:"Plan a claim, reason, example, and polite response."},
  {day:14, unit:3, title:"Presentation Rehearsal", goal:"Prepare, rehearse, and improve a short presentation.", language:"Today I’m going to talk about… · First… · Thank you for listening.", listen:"Hello, everyone. Today I’m going to talk about photography. First, I’ll show my camera. Next, I’ll share two photos. My favorite part is finding interesting colors. Thank you for listening. Any questions?", task:"Rehearse twice with a partner using two stars and one wish.", worksheet:"Create a keyword-only cue card for opening, three points, and closing."},
  {day:15, unit:3, title:"Speaking Festival", goal:"Show your skills in an interview, role-play, and presentation.", language:"Review your strongest phrases from Days 1–14.", listen:"Listen carefully to each station prompt, ask for repetition when needed, and respond in complete sentences.", task:"Complete three stations: friendly interview, surprise role-play, and mini presentation.", worksheet:"Reflect: I’m proud that I can… My next speaking goal is…"}
];

const resources = {
  speaking: `<p class="dialog-kicker">Resource pack</p><h2>Speaking cards</h2><div class="dialog-section"><h3>Café</h3><p><strong>Server:</strong> Greet, take the order, ask “Anything else?”, give the total.<br><strong>Customer:</strong> You have $10. Order a meal and something healthy.</p></div><div class="dialog-section"><h3>Shopping</h3><p>Buy a blue cap with a $12 budget. Ask about price and color before deciding.</p></div><div class="dialog-section"><h3>Health</h3><p>Choose: headache, tired, stomachache, nervous, sore throat, or hot and thirsty. Explain the problem and give safe advice.</p></div><div class="dialog-section"><h3>Mini debates</h3><ul><li>School breaks should be longer.</li><li>Books are better than movies.</li><li>Homework should take no more than 15 minutes.</li></ul></div>`,
  listening: `<p class="dialog-kicker">Reusable worksheet</p><h2>Listening response sheet</h2><div class="dialog-section"><h3>First listen — big idea</h3><p>Who is speaking?<br>Where are they?<br>What are they talking about?</p></div><div class="dialog-section"><h3>Second listen — details</h3><p>Detail 1: __________<br>Detail 2: __________<br>Useful phrase: __________</p></div><div class="dialog-section"><h3>After listening</h3><p>Retell the message to a partner in two sentences.</p></div>`,
  story: `<p class="dialog-kicker">Planning tools</p><h2>Story & presentation</h2><div class="dialog-section"><h3>Story mountain</h3><ol><li>One day…</li><li>The character wanted…</li><li>Suddenly…</li><li>Then…</li><li>In the end…</li></ol></div><div class="dialog-section"><h3>Presentation cue card</h3><p>Opening: Today I’m going to talk about…<br>Point 1: ______<br>Point 2: ______<br>Point 3: ______<br>Closing: Thank you for listening. Any questions?</p></div>`,
  passport: `<p class="dialog-kicker">Student reflection</p><h2>Speaking passport</h2><table><thead><tr><th>Day</th><th>I can…</th><th>🙂 / 😐 / 🙁</th></tr></thead><tbody>${lessons.map(l => `<tr><td>${l.day}</td><td>${l.goal}</td><td>○</td></tr>`).join("")}</tbody></table>`
};

const dailyExtras = {
  1: {visual:"🏫", words:["repeat","understand","help","ready","question","please"], materials:["Classroom problem cards","Help-phrase mini poster","Teacher instruction bingo"], bonus:"Mime a classroom problem. Your partner chooses the best help phrase.", video:"classroom English for kids asking for help"},
  2: {visual:"👋", words:["name","age","live","favorite","hobby","meet"], materials:["About Me profile card","Classmate interview grid","Name-and-action game cards"], bonus:"Find three classmates who share one favorite thing with you.", video:"self introduction English conversation for kids"},
  3: {visual:"👨‍👩‍👧‍👦", words:["family","friend","curly","glasses","kind","creative"], materials:["Family picture cards","Appearance word bank","Guess Who character sheet"], bonus:"Draw a mystery person while your partner describes them.", video:"describing people appearance personality English kids"},
  4: {visual:"❤️", words:["love","like","dislike","favorite","because","agree"], materials:["Opinion corner signs","Food and hobby picture cards","Because sentence strips"], bonus:"Make a class bar chart of favorite activities and explain one result.", video:"likes and dislikes because English for kids"},
  5: {visual:"⏰", words:["wake up","breakfast","school","after","usually","finally"], materials:["Clock flashcards","Routine sequencing cards","My Day timeline"], bonus:"Put six routine cards in order against the clock.", video:"daily routines telling time English for kids"},
  6: {visual:"🥪", words:["menu","order","sandwich","juice","please","total"], materials:["Color café menu","Play-money sheet","Server and customer badges"], bonus:"Design a silly new café item and persuade a customer to try it.", video:"restaurant ordering food English conversation kids"},
  7: {visual:"🎸", words:["hobby","can","can't yet","practice","skill","learn"], materials:["Talent survey","Hobby picture cards","Skills-club planner"], bonus:"Teach your partner one tiny skill using three English instructions.", video:"hobbies and abilities can can't English kids"},
  8: {visual:"🗺️", words:["straight","left","right","next to","opposite","between"], materials:["Printable town map","Landmark cards","Direction arrow cutouts"], bonus:"Create a treasure route with four steps for another team.", video:"giving directions English for kids town map"},
  9: {visual:"🛍️", words:["price","color","size","cheap","change","take"], materials:["Classroom shop cards","Price labels","Shopping budget sheet"], bonus:"Buy three gifts for three different people without overspending.", video:"shopping conversation English for kids how much"},
  10: {visual:"🩺", words:["headache","tired","rest","water","should","better"], materials:["Health problem cards","Advice matching sheet","Feelings thermometer"], bonus:"Create a healthy-day poster with three should sentences.", video:"health problems should shouldn't English kids"},
  11: {visual:"🔑", words:["character","setting","suddenly","problem","then","ending"], materials:["Story dice","Five-picture sequences","Story mountain planner"], bonus:"Add one surprise object to your partner’s story.", video:"English storytelling for kids beginning middle end"},
  12: {visual:"🌉", words:["idea","agree","explain","build","strong","improve"], materials:["Team role badges","Bridge challenge brief","Communication points card"], bonus:"Build the tallest paper tower using only English teamwork phrases.", video:"teamwork problem solving activities English classroom kids"},
  13: {visual:"💬", words:["opinion","reason","example","agree","disagree","fair"], materials:["Mini-debate topic cards","Claim-reason-example planner","Polite response strips"], bonus:"Switch sides and defend the opposite opinion for thirty seconds.", video:"agree disagree opinions English for kids"},
  14: {visual:"🎤", words:["present","first","next","future","question","thank"], materials:["Presentation cue card","Peer feedback slips","Rehearsal timer"], bonus:"Record a practice presentation and notice one thing to improve.", video:"presentation skills for kids English speaking"},
  15: {visual:"🎉", words:["interview","role-play","present","listen","respond","proud"], materials:["Festival station signs","Final speaking rubric","Celebration certificates"], bonus:"Create a compliment wall: write one speaking strength for each teammate.", video:"English speaking activities for kids final presentation"}
};

resources.conversation = `<p class="dialog-kicker">Pair-work library</p><h2>Conversation cards</h2><div class="problem-card-grid">${["What makes you feel brave?","Describe your best friend.","What is your favorite day and why?","Tell three things you do before school.","Create a café order under $10.","What skill can you teach?","Give directions to a secret place.","Choose a gift and explain why.","Give two healthy tips.","Tell a 30-second story.","Suggest a fun class project.","Books or films—which is better?"].map((prompt,index)=>`<article><span>${index+1}</span><p>${prompt}</p><strong>Listen · Respond · Ask more</strong></article>`).join("")}</div>`;

const dayOneExtended = `
  <section class="dialog-section day-gallery">
    <div class="section-mini-heading"><p class="media-label">Ready-made visual materials</p><h3>Classroom English posters</h3></div>
    <div class="poster-grid">
      <figure><img src="assets/day1-classroom-english.png" alt="Classroom English poster with useful language, picture vocabulary, listening scene, speaking challenge, and mime activity"><figcaption>Useful language, vocabulary, listening scene, and speaking challenge</figcaption></figure>
      <figure><img src="assets/day1-speaking-game.png" alt="Classroom English speaking game poster with speaking wheel, listen and match, pair practice, teacher tip, and bonus game"><figcaption>Speaking wheel, listen and match, pair practice, and bonus game</figcaption></figure>
    </div>
  </section>
  <section class="dialog-section extended-pack">
    <p class="media-label">Complete teacher plan</p><h3>Day 1 lesson flow</h3>
    <div class="flow-timeline">
      <article><span>5–8 min</span><div><strong>1. Warm-up — Say it with your body</strong><p>Students respond with actions: hand near ear for “repeat,” shake head for “I don’t understand,” raise hand for “help,” thumbs up for “ready,” and one finger for “question.” Speed it up into a game.</p></div></article>
      <article><span>10 min</span><div><strong>2. Presentation — Model and repeat</strong><p>Act out a classroom problem. Repeat all six phrases in normal, whisper, happy, and robot voices.</p></div></article>
      <article><span>10–12 min</span><div><strong>3. Listening — Two focused listens</strong><p>First listen for Mia, page ten, and the word “adventure.” Second listen with actions whenever students hear repeat, please, ready, help, or question.</p></div></article>
      <article><span>8–10 min</span><div><strong>4. Speaking drill — Call and response</strong><p>Give a classroom problem; students choose and say the best survival phrase.</p></div></article>
      <article><span>10 min</span><div><strong>5. Pair practice — Help Me, Please</strong><p>Student A chooses a problem card. Student B responds with the correct classroom phrase. Switch roles.</p></div></article>
      <article><span>12–15 min</span><div><strong>6. Speaking challenge — Scavenger hunt</strong><p>Complete five real speaking tasks around the classroom and earn a star for clear communication.</p></div></article>
      <article><span>8–10 min</span><div><strong>7. Worksheet and exit phrase</strong><p>Listen and circle, complete each phrase, match problems to phrases, then choose one phrase to use tomorrow.</p></div></article>
    </div>
  </section>
  <section class="dialog-section">
    <p class="media-label">Cut-out cards</p><h3>10 classroom problem cards</h3>
    <div class="problem-card-grid">
      ${[
        ["You did not hear the teacher.","Can you repeat that, please?"],
        ["You do not know the meaning.","I don’t understand."],
        ["You need help with a word.","Can you help me?"],
        ["You finished the task.","I’m ready."],
        ["You want to ask something.","I have a question."],
        ["You want to be polite.","Please."],
        ["The teacher speaks too fast.","Can you repeat that, please?"],
        ["You do not know which page to open.","Can you help me?"],
        ["You can start now.","I’m ready."],
        ["You want the explanation again.","I don’t understand."]
      ].map((card, index) => `<article><span>${index + 1}</span><p>${card[0]}</p><strong>${card[1]}</strong></article>`).join("")}
    </div>
  </section>
  <section class="dialog-section worksheet-box">
    <p class="media-label">Student worksheet</p><h3>Complete and speak</h3>
    <div class="worksheet-columns">
      <div><h4>A. Complete the phrase</h4><ol><li>Can you ______ that, please?</li><li>I don’t ______.</li><li>Can you ______ me?</li><li>I’m ______.</li><li>I have a ______.</li></ol></div>
      <div><h4>B. Video listening check</h4><ul class="check-list"><li>☐ Can you repeat that, please?</li><li>☐ Can you help me?</li><li>☐ I don’t understand.</li><li>☐ I’m ready.</li><li>☐ I have a question.</li><li>☐ Please.</li></ul></div>
    </div>
  </section>
  <section class="dialog-section bingo-box">
    <p class="media-label">Extra game</p><h3>Teacher Instruction Bingo</h3>
    <div class="bingo-grid">${["repeat","understand","help","ready","question","please","book","page","word"].map(word => `<span>${word}</span>`).join("")}</div>
    <p>Students mark a word when they hear it in a teacher instruction. Three in a row: “Bingo! I’m ready!”</p>
  </section>`;

const demoNames = new Set(["Maya", "Adam", "Lina", "Yousef"]);
let trackedStudents = JSON.parse(localStorage.getItem("speakUpStudents") || "[]");
if (!localStorage.getItem("speakUpNoDemoMigration")) {
  trackedStudents = trackedStudents.filter(student => !demoNames.has(student.name));
  localStorage.setItem("speakUpNoDemoMigration", "1");
  localStorage.setItem("speakUpStudents", JSON.stringify(trackedStudents));
}
let signedInStudentId = sessionStorage.getItem("speakUpParentStudentId");
let teacherUnlocked = sessionStorage.getItem("speakUpTeacherUnlocked") === "yes";

const lessonGrid = document.querySelector("#lessonGrid");
const lessonDialog = document.querySelector("#lessonDialog");
const resourceDialog = document.querySelector("#resourceDialog");
let completed = new Set(JSON.parse(localStorage.getItem("speakUpProgress") || "[]"));

function saveStudents() {
  localStorage.setItem("speakUpStudents", JSON.stringify(trackedStudents));
}

function renderTeacherAccess() {
  const hasPin = Boolean(localStorage.getItem("speakUpTeacherPin"));
  document.querySelector("#teacherGate").hidden = teacherUnlocked;
  document.querySelector("#teacherPrivate").hidden = !teacherUnlocked;
  document.querySelector("#teacherGateTitle").textContent = hasPin ? "Welcome back, teacher" : "Create your teacher PIN";
  document.querySelector("#teacherGateText").textContent = hasPin
    ? "Enter your private PIN to open student records, family codes, and progress controls."
    : "Choose a private PIN to protect your teacher dashboard on this device.";
  document.querySelector("#teacherPinHelp").textContent = hasPin
    ? "Only the teacher should know this PIN."
    : "Use 4–12 digits and keep the PIN somewhere safe.";
}

function latestLesson(student) {
  return lessons[Math.max(0, Math.min(student.completed, 15) - 1)] || lessons[0];
}

function renderStudentTracker() {
  const query = document.querySelector("#studentSearch").value.trim().toLowerCase();
  const level = document.querySelector("#studentLevelFilter").value;
  const visible = trackedStudents.filter(student =>
    (level === "all" || student.level === level) &&
    `${student.name} ${student.goal}`.toLowerCase().includes(query)
  );
  document.querySelector("#studentTrackerRows").innerHTML = visible.map(student => `
    <tr>
      <td><div class="student-name-cell"><span class="mini-avatar">${student.name[0].toUpperCase()}</span><div><strong>${student.name}</strong><br><small>Age ${student.age} · <span class="level-pill">${student.level}</span></small></div></div></td>
      <td><strong>${student.completed}/15</strong><div class="table-progress"><span style="width:${student.completed / 15 * 100}%"></span></div></td>
      <td>${student.attendance}%</td><td>${student.speaking}%</td><td>${student.listening}%</td>
      <td>⭐ ${student.stars}</td><td><button class="student-action family-code" data-copy-code="${student.id}">${student.familyCode || "Create code"}</button></td><td>${student.goal}</td>
      <td><button class="student-action" data-student-progress="${student.id}">+ Lesson</button> <button class="student-action" data-student-star="${student.id}">+ Star</button></td>
    </tr>`).join("");
  const total = trackedStudents.length || 1;
  document.querySelector("#studentTotal").textContent = trackedStudents.length;
  document.querySelector("#averageProgress").textContent = `${Math.round(trackedStudents.reduce((sum,s) => sum + s.completed / 15 * 100, 0) / total)}%`;
  document.querySelector("#averageConfidence").textContent = `${Math.round(trackedStudents.reduce((sum,s) => sum + s.speaking, 0) / total)}%`;
  document.querySelector("#totalStars").textContent = trackedStudents.reduce((sum,s) => sum + s.stars, 0);
  document.querySelector(".student-table-wrap").hidden = trackedStudents.length === 0;
  document.querySelector("#emptyStudents").hidden = trackedStudents.length !== 0;
  renderParentDashboard();
}

function renderParentDashboard() {
  const student = trackedStudents.find(s => String(s.id) === String(signedInStudentId));
  document.querySelector("#parentLogin").hidden = Boolean(student);
  document.querySelector("#parentPrivate").hidden = !student;
  document.querySelector("#parentSignOut").hidden = !student;
  if (!student) return;
  const progress = Math.round(student.completed / 15 * 100);
  const lesson = latestLesson(student);
  document.querySelector("#parentAvatar").textContent = student.name[0].toUpperCase();
  document.querySelector("#parentName").textContent = student.name;
  document.querySelector("#parentLevel").textContent = `Age ${student.age} · Level ${student.level}`;
  document.querySelector("#parentProgressPercent").textContent = `${progress}%`;
  document.querySelector("#parentProgressRing").style.background = `conic-gradient(var(--coral) ${progress}%, #edf0ee ${progress}%)`;
  document.querySelector("#parentProgressText").textContent = `${student.completed} of 15 days complete`;
  [["Speaking",student.speaking],["Listening",student.listening],["Attendance",student.attendance]].forEach(([skill,value]) => {
    document.querySelector(`#parent${skill}Value`).textContent = `${value}%`;
    document.querySelector(`#parent${skill}Bar`).style.width = `${value}%`;
  });
  document.querySelector("#parentStars").textContent = `${student.stars} stars`;
  document.querySelector("#parentTeacherNote").textContent = student.note;
  document.querySelector("#parentGoal").textContent = student.goal;
  document.querySelector("#parentHomePractice").textContent = student.home;
  document.querySelector("#latestLessonTitle").textContent = `Day ${lesson.day} · ${lesson.title}`;
  document.querySelector("#latestLessonCanDo").textContent = `I can ${lesson.goal.charAt(0).toLowerCase()}${lesson.goal.slice(1)}`;
}

function renderLessons(filter = "all") {
  lessonGrid.innerHTML = "";
  lessons.filter(l => filter === "all" || String(l.unit) === filter).forEach(lesson => {
    const card = document.createElement("article");
    card.className = `lesson-card ${completed.has(lesson.day) ? "completed" : ""}`;
    const extra = dailyExtras[lesson.day];
    card.innerHTML = `
      <div class="lesson-day"><span class="day-number">Day ${lesson.day}</span><button class="complete-toggle" data-complete="${lesson.day}" aria-label="Mark day ${lesson.day} complete">${completed.has(lesson.day) ? "✓" : ""}</button></div>
      <div class="lesson-thumbnail unit-${lesson.unit}"><span>${extra.visual}</span><small>Picture prompt</small></div>
      <h3>${lesson.title}</h3><p>${lesson.goal}</p>
      <div class="lesson-meta"><span>🎤 Speaking</span><span>🎧 Video</span><span>📎 ${extra.materials.length + 3} materials</span></div>
      <button class="open-lesson" data-day="${lesson.day}">Open lesson →</button>`;
    lessonGrid.append(card);
  });
}

function updateProgress() {
  const count = completed.size;
  document.querySelector("#completedCount").textContent = count;
  document.querySelector("#courseProgress").style.width = `${count / 15 * 100}%`;
  document.querySelector("#progressMessage").textContent = count === 15 ? "You did it—your brave voice is festival-ready!" : count > 9 ? "The festival is getting close. Keep going!" : count > 4 ? "Your voice is growing stronger every day." : "Every brave voice starts with one sentence.";
  localStorage.setItem("speakUpProgress", JSON.stringify([...completed]));
}

function lessonTeachingPack(lesson, extra) {
  const firstPhrase = lesson.language.split(" · ")[0];
  return `
    <section class="dialog-section">
      <p class="media-label">Teacher-ready plan</p><h3>Learning design</h3>
      <div class="lesson-quality-grid">
        <article><span>🎯</span><strong>Outcome</strong><p>By the end, learners can ${lesson.goal.charAt(0).toLowerCase()}${lesson.goal.slice(1)}</p></article>
        <article><span>🧰</span><strong>Prepare</strong><p>${extra.materials.join(", ")} and a timer.</p></article>
        <article><span>🗣️</span><strong>Language target</strong><p>Model clearly: “${firstPhrase}”</p></article>
      </div>
    </section>
    <section class="dialog-section">
      <p class="media-label">60–75 minute sequence</p><h3>Teach it step by step</h3>
      <div class="teaching-steps">
        <article class="teaching-step"><span>5–8 min</span><div><strong>Connect & warm up</strong>Show the picture prompt. Learners notice three details, predict the topic, then share one idea with a partner.</div></article>
        <article class="teaching-step"><span>10 min</span><div><strong>Model the language</strong>Teach the six picture words with gesture and voice. Model the key phrases, then use echo, whisper, and partner repetition.</div></article>
        <article class="teaching-step"><span>12 min</span><div><strong>Listen twice</strong>First listen for the situation and speakers. Second listen for two details and one useful phrase. Pair-check before class feedback.</div></article>
        <article class="teaching-step"><span>12 min</span><div><strong>Supported speaking</strong>Learners rehearse with visible sentence starters. Change partners once and encourage one follow-up question.</div></article>
        <article class="teaching-step"><span>15 min</span><div><strong>Real communication mission</strong>${lesson.task}</div></article>
        <article class="teaching-step"><span>8 min</span><div><strong>Reflect & exit</strong>Complete the worksheet, self-rate confidence from 1–3, and say one target phrase before leaving.</div></article>
      </div>
    </section>
    <section class="dialog-section">
      <p class="media-label">Support every learner</p><h3>Differentiate with confidence</h3>
      <div class="support-grid">
        <article><strong>🌱 Extra support</strong><p>Keep picture words and sentence frames visible. Allow pointing plus speaking, partner rehearsal, and a slower second listen.</p></article>
        <article><strong>🚀 Ready for more</strong><p>Ask for a reason, extra detail, or follow-up question. Challenge learners to speak without reading the full sentence frame.</p></article>
      </div>
    </section>
    <section class="dialog-section">
      <p class="media-label">Quick assessment</p><h3>Success checklist</h3>
      <ul class="success-list"><li>I used at least two target phrases.</li><li>I listened and responded to my partner.</li><li>I spoke clearly enough to be understood.</li><li>I tried again when communication was difficult.</li></ul>
    </section>`;
}

function showLesson(day) {
  const lesson = lessons.find(l => l.day === day);
  const extra = dailyExtras[day];
  const videoUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(extra.video)}`;
  document.querySelector("#lessonContent").innerHTML = `
    <div class="lesson-cover"><span>${extra.visual}</span><div><p>Picture prompt</p><strong>What can you see? What might happen today?</strong></div></div>
    <p class="dialog-kicker">Day ${lesson.day} · 60–75 minutes</p><h2>${lesson.title}</h2>
    <p class="dialog-goal"><strong>Can-do goal:</strong> ${lesson.goal}</p>
    <div class="lesson-tabs" role="tablist">
      <button class="lesson-tab active" data-lesson-tab="student" type="button">Student</button>
      <button class="lesson-tab" data-lesson-tab="teacher" type="button">Teacher</button>
      <button class="lesson-tab" data-lesson-tab="materials" type="button">Materials</button>
      <button class="lesson-tab" data-lesson-tab="progress" type="button">Progress</button>
    </div>
    <div class="lesson-panel" data-lesson-panel="student">
      <section class="dialog-section"><h3>Useful language</h3><p>${lesson.language}</p></section>
      <section class="dialog-section"><h3>Picture vocabulary</h3><div class="vocab-chips">${extra.words.map((word, index) => `<span><b>${["🔵","🟡","🟢","🟠","🟣","🔴"][index]}</b>${word}</span>`).join("")}</div></section>
      <section class="dialog-section"><h3>Listening</h3><div class="lesson-tools"><button class="button secondary" data-play-listening="${lesson.day}" type="button">▶ Play listening</button></div><p class="script">${lesson.listen}</p></section>
      <section class="dialog-section"><h3>Speaking challenge</h3><p>${lesson.task}</p></section>
      <section class="dialog-section"><h3>Worksheet</h3><p>${lesson.worksheet}</p></section>
    </div>
    <div class="lesson-panel" data-lesson-panel="teacher" hidden>${teacherUnlocked ? lessonTeachingPack(lesson, extra) : `<section class="dialog-section"><h3>Teacher access required</h3><p>Unlock the private Teacher area first, then reopen this lesson to view timing, differentiation, and assessment guidance.</p><a class="button primary" href="#students" onclick="document.querySelector('#lessonDialog').close()">Open teacher access</a></section>`}</div>
    <div class="lesson-panel" data-lesson-panel="materials" hidden>
      <section class="dialog-section media-section"><div class="video-card"><span class="play-icon">▶</span><div><p class="media-label">Video practice</p><h3>${lesson.title} video</h3><a href="${videoUrl}" target="_blank" rel="noreferrer">Find a lesson video ↗</a></div></div><div class="materials-card"><p class="media-label">Print & play</p><h3>Lesson materials</h3><ul>${extra.materials.map(item => `<li>${item}</li>`).join("")}</ul></div></section>
      <div class="lesson-tools"><a class="button secondary" href="downloads/flashcards.html" target="_blank">Open flashcards</a><button class="button secondary" onclick="window.print()" type="button">Print worksheet</button>${day === 1 ? `<a class="button primary" href="downloads/day1-pack.html" target="_blank">Open Day 1 pack</a>` : ""}</div>
      ${day === 1 ? dayOneExtended : ""}
    </div>
    <div class="lesson-panel" data-lesson-panel="progress" hidden>
      <section class="dialog-section"><h3>My success check</h3><ul class="success-list"><li>I used two target phrases.</li><li>I listened and answered my partner.</li><li>I spoke clearly.</li><li>I tried again when it was difficult.</li></ul></section>
      <section class="dialog-section bonus-card"><h3>Extra challenge</h3><p>${extra.bonus}</p></section>
      <button class="button primary dialog-complete" data-dialog-complete="${lesson.day}">${completed.has(day) ? "Completed ✓" : "Mark day complete"}</button>
    </div>`;
  lessonDialog.showModal();
}

lessonGrid.addEventListener("click", event => {
  const complete = event.target.closest("[data-complete]");
  const open = event.target.closest("[data-day]");
  if (complete) {
    const day = Number(complete.dataset.complete);
    completed.has(day) ? completed.delete(day) : completed.add(day);
    renderLessons(document.querySelector(".filter.active").dataset.filter);
    updateProgress();
  } else if (open) showLesson(Number(open.dataset.day));
});

document.querySelectorAll(".filter").forEach(button => button.addEventListener("click", () => {
  document.querySelectorAll(".filter").forEach(b => b.classList.remove("active"));
  button.classList.add("active");
  renderLessons(button.dataset.filter);
}));

document.querySelectorAll("[data-resource]").forEach(button => button.addEventListener("click", () => {
  document.querySelector("#resourceContent").innerHTML = resources[button.dataset.resource];
  resourceDialog.showModal();
}));

document.querySelector("#studentSearch").addEventListener("input", renderStudentTracker);
document.querySelector("#studentLevelFilter").addEventListener("change", renderStudentTracker);
document.querySelector("#addStudentButton").addEventListener("click", () => document.querySelector("#studentDialog").showModal());
document.querySelector("#studentTrackerRows").addEventListener("click", event => {
  const codeButton = event.target.closest("[data-copy-code]");
  if (codeButton) {
    const student = trackedStudents.find(item => item.id === Number(codeButton.dataset.copyCode));
    if (!student.familyCode) {
      student.familyCode = `${student.name.replace(/[^a-z]/gi,"").slice(0,4).toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`;
      saveStudents();
    }
    navigator.clipboard.writeText(`Student: ${student.name}\nFamily code: ${student.familyCode}`);
    codeButton.textContent = "Copied!";
    setTimeout(() => { codeButton.textContent = student.familyCode; }, 1200);
    return;
  }
  const progressButton = event.target.closest("[data-student-progress]");
  const starButton = event.target.closest("[data-student-star]");
  if (!progressButton && !starButton) return;
  const id = Number((progressButton || starButton).dataset[progressButton ? "studentProgress" : "studentStar"]);
  const student = trackedStudents.find(item => item.id === id);
  if (progressButton) student.completed = Math.min(15, student.completed + 1);
  if (starButton) student.stars += 1;
  saveStudents(); renderStudentTracker();
});
document.querySelector("#studentForm").addEventListener("submit", event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const name = data.get("name").trim();
  trackedStudents.push({
    id: Date.now(), name, age:Number(data.get("age")), level:data.get("level"),
    completed:0, attendance:100, speaking:60, listening:60, stars:0,
    goal:data.get("goal").trim(), note:data.get("note").trim(),
    home:"Practice today’s five useful phrases together for five minutes.",
    parentEmail:data.get("parentEmail").trim(),
    familyCode:`${name.replace(/[^a-z]/gi,"").slice(0,4).toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`
  });
  saveStudents(); renderStudentTracker(); document.querySelector("#studentDialog").close(); event.currentTarget.reset();
});
document.querySelector("#copyParentUpdate").addEventListener("click", async event => {
  const student = trackedStudents.find(s => String(s.id) === String(signedInStudentId));
  if (!student) return;
  const text = `${student.name}'s Speak Up update: ${student.completed}/15 lessons complete, speaking ${student.speaking}%, listening ${student.listening}%. Teacher note: ${student.note} Next goal: ${student.goal} Home practice: ${student.home}`;
  try { await navigator.clipboard.writeText(text); event.currentTarget.textContent = "Copied ✓"; }
  catch { event.currentTarget.textContent = "Copy unavailable"; }
});
document.querySelector("#parentLogin").addEventListener("submit", event => {
  event.preventDefault();
  const name = document.querySelector("#parentLoginName").value.trim().toLowerCase();
  const code = document.querySelector("#parentLoginCode").value.trim().toUpperCase();
  const student = trackedStudents.find(item => item.name.trim().toLowerCase() === name && item.familyCode?.toUpperCase() === code);
  if (!student) {
    document.querySelector("#parentLoginError").textContent = "The name or family code is incorrect. Please ask the teacher for access details.";
    return;
  }
  document.querySelector("#parentLoginError").textContent = "";
  signedInStudentId = String(student.id);
  sessionStorage.setItem("speakUpParentStudentId", signedInStudentId);
  event.currentTarget.reset();
  renderParentDashboard();
});
document.querySelector("#parentSignOut").addEventListener("click", () => {
  signedInStudentId = null;
  sessionStorage.removeItem("speakUpParentStudentId");
  renderParentDashboard();
});
document.querySelector("#teacherLoginForm").addEventListener("submit", event => {
  event.preventDefault();
  const pin = document.querySelector("#teacherPinInput").value.trim();
  const savedPin = localStorage.getItem("speakUpTeacherPin");
  if (!/^\d{4,12}$/.test(pin)) {
    document.querySelector("#teacherLoginError").textContent = "Please use a PIN containing 4–12 digits.";
    return;
  }
  if (savedPin && pin !== savedPin) {
    document.querySelector("#teacherLoginError").textContent = "Incorrect PIN. Please try again.";
    return;
  }
  if (!savedPin) localStorage.setItem("speakUpTeacherPin", pin);
  teacherUnlocked = true;
  sessionStorage.setItem("speakUpTeacherUnlocked", "yes");
  document.querySelector("#teacherLoginError").textContent = "";
  event.currentTarget.reset();
  renderTeacherAccess();
});
document.querySelector("#teacherSignOut").addEventListener("click", () => {
  teacherUnlocked = false;
  sessionStorage.removeItem("speakUpTeacherUnlocked");
  renderTeacherAccess();
  document.querySelector("#students").scrollIntoView({behavior:"smooth"});
});

document.querySelectorAll(".dialog-close").forEach(button => button.addEventListener("click", () => button.closest("dialog").close()));
document.querySelectorAll("dialog").forEach(dialog => dialog.addEventListener("click", e => { if (e.target === dialog) dialog.close(); }));

lessonDialog.addEventListener("click", event => {
  const tab = event.target.closest("[data-lesson-tab]");
  if (tab) {
    lessonDialog.querySelectorAll("[data-lesson-tab]").forEach(button => button.classList.toggle("active", button === tab));
    lessonDialog.querySelectorAll("[data-lesson-panel]").forEach(panel => { panel.hidden = panel.dataset.lessonPanel !== tab.dataset.lessonTab; });
    return;
  }
  const audioButton = event.target.closest("[data-play-listening]");
  if (audioButton) {
    speechSynthesis.cancel();
    const lesson = lessons.find(item => item.day === Number(audioButton.dataset.playListening));
    const speech = new SpeechSynthesisUtterance(lesson.listen.replace(/\n/g, " "));
    speech.rate = .82;
    speech.lang = "en-US";
    speechSynthesis.speak(speech);
    audioButton.textContent = "🔊 Playing…";
    speech.onend = () => { audioButton.textContent = "▶ Play listening"; };
    return;
  }
  const button = event.target.closest("[data-dialog-complete]");
  if (!button) return;
  const day = Number(button.dataset.dialogComplete);
  completed.add(day); updateProgress(); renderLessons(document.querySelector(".filter.active").dataset.filter);
  button.textContent = "Completed ✓";
});

document.querySelector("#continueButton")?.addEventListener("click", () => {
  const next = lessons.find(l => !completed.has(l.day)) || lessons[14];
  showLesson(next.day);
});
document.querySelector("#startDayOne")?.addEventListener("click", () => showLesson(1));
document.querySelector("#previewDayOne")?.addEventListener("click", () => showLesson(1));

document.querySelector("#resetProgress").addEventListener("click", () => {
  if (confirm("Reset all course progress?")) { completed.clear(); updateProgress(); renderLessons(); }
});

renderLessons();
updateProgress();
renderStudentTracker();
renderTeacherAccess();

const heroVisual = document.querySelector(".hero-visual");
if (matchMedia("(pointer:fine)").matches && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
  heroVisual.addEventListener("pointermove", event => {
    const bounds = heroVisual.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - .5) * -12;
    const y = ((event.clientY - bounds.top) / bounds.height - .5) * -12;
    heroVisual.style.setProperty("--hero-x", `${x}px`);
    heroVisual.style.setProperty("--hero-y", `${y}px`);
  });
  heroVisual.addEventListener("pointerleave", () => {
    heroVisual.style.setProperty("--hero-x", "0px");
    heroVisual.style.setProperty("--hero-y", "0px");
  });
}

const revealTargets = document.querySelectorAll(".section-title, .lesson-card, .resource-card, .welcome-cards article, .quick-start a, .public-roadmap article, .about-course > *, .video-journey-copy, .video-gallery figure");
revealTargets.forEach((element, index) => {
  element.classList.add("motion-reveal");
  element.style.transitionDelay = `${Math.min(index % 5, 4) * 70}ms`;
});
if ("IntersectionObserver" in window) {
  const motionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        motionObserver.unobserve(entry.target);
      }
    });
  }, {threshold:.12});
  revealTargets.forEach(element => motionObserver.observe(element));
} else {
  revealTargets.forEach(element => element.classList.add("is-visible"));
}

document.querySelectorAll(".video-gallery video").forEach(video => {
  video.addEventListener("play", () => {
    document.querySelectorAll(".video-gallery video").forEach(other => { if (other !== video) other.pause(); });
  });
});

let installPrompt;
const installButton = document.querySelector("#installApp");
window.addEventListener("beforeinstallprompt", event => {
  event.preventDefault();
  installPrompt = event;
  installButton.hidden = false;
});
installButton.addEventListener("click", async () => {
  if (installPrompt) {
    installPrompt.prompt();
    await installPrompt.userChoice;
    installPrompt = null;
    installButton.hidden = true;
  } else {
    alert("On iPhone or iPad: tap Share, then “Add to Home Screen”. On a computer: use the install icon in the browser address bar.");
  }
});
window.addEventListener("appinstalled", () => { installButton.hidden = true; });
if (/iphone|ipad|ipod/i.test(navigator.userAgent) && !window.navigator.standalone) installButton.hidden = false;
if ("serviceWorker" in navigator) window.addEventListener("load", () => navigator.serviceWorker.register("./service-worker.js"));
