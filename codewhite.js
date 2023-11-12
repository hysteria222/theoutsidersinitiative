//header
const title = document.createElement('h1');
document.querySelector('header').append(title);
title.textContent = 'The Outsiders';
const secondTitle = document.createElement('h2');
title.insertAdjacentElement('beforeend', secondTitle);
secondTitle.classList.add('outsiders-subtitle');
secondTitle.innerHTML = 'Ebixia\'s most wanted <span>heroes</span>.';
const nav = document.createElement('nav');
document.querySelector('header').appendChild(nav);
const navLink1 = document.createElement('a');
const navLink2 = document.createElement('a');
const navLink3 = document.createElement('a');
const navLink4 = document.createElement('a');
//nav1 
document.querySelector('nav').appendChild(navLink1);
navLink1.innerHTML = 'HOME';
navLink1.classList.add('navlinks');
//nav2
document.querySelector('nav').appendChild(navLink2);
navLink2.innerHTML = 'HERE';
navLink2.classList.add('navlinks');
//nav3
document.querySelector('nav').appendChild(navLink3);
navLink3.textContent = 'THERE ';
navLink3.classList.add('navlinks');
//nav4
document.querySelector('nav').appendChild(navLink4);
navLink4.textContent = 'EVERYWHERE';
navLink4.classList.add('navlinks');




//main div
const divForSymbolImg = document.createElement('div');
divForSymbolImg.classList.add('symboldiv')
document.querySelector('.mainbody').appendChild(divForSymbolImg)
const outsidersImgDiv = document.createElement('div');
outsidersImgDiv.classList.add('outsidersimgdiv');
divForSymbolImg.appendChild(outsidersImgDiv)
const outsidersImg = document.createElement('img');
outsidersImg.classList.add('outsidersimg');
outsidersImg.src = 'https://i.postimg.cc/ncC34Yx4/New-Pgfdgroject-1.png';
outsidersImgDiv.appendChild(outsidersImg);
const hoverImgDiv = document.createElement('div');
hoverImgDiv.classList.add('hoverimgdiv');
divForSymbolImg.appendChild(hoverImgDiv);
const hoverImg = document.createElement('img');
hoverImg.classList.add('hoverimg');
hoverImgDiv.appendChild(hoverImg)
hoverImg.src = 'https://iili.io/JCfaZCu.png'
const headingOne = document.createElement('h3');
document.querySelector('.mainbody').appendChild(headingOne);
headingOne.textContent = 'Inside The Outsiders';
const headingTwo = document.createElement('h4');
document.querySelector('.mainbody').appendChild(headingTwo);
headingTwo.textContent = 'who, what, and why?';


const bodyTextDiv = document.createElement('div');
document.querySelector('.mainbody').appendChild(bodyTextDiv);
bodyTextDiv.classList.add('bodyTextDiv');
const bodyText = document.createElement('p');
bodyText.classList.add('bodytext');
bodyTextDiv.appendChild(bodyText);
bodyText.textContent = 'Ebixia has a new group in town, and they\'re taking the world by storm. Alex Drake, Geddy Splintwalker, Shinzo Katetsu, Fainne Uron of the Crannach Timberlands, Hollyanna Knox, Empress Isa Tenju, and Bael Volet. Those seven people make up an organization known as The Outsiders, a name that has spread to nearly every corner of Ebixia. But who are these people? Why did they appear? Who do they answer to? Our research took us to the streets of New Ordis. Reportedly, that group arrived on the scene to fight a dragon that slept beneath the city. They fought alongside New Ordis military and were victorious. That really set the team on the map. Their symbol, recognizable to many across the lands, is a dragon to celebrate their victory. Many have said that, since that day, they\'ve appeared in other places across Ebixia to do much of the same. They fought monsters in the streets of Sanctuary and brought war to the shores of Bao. Allegedly, they are responsible for the disappearance of several government officials in the town of Ternathus including Ralion "Thunderclasp", Millor "Waterdancer", Drundarr "Earthbreaker". Eyewitness reports can confirm they were directly responsible for dethroning Emperor Shenlong Yuya.';

const headingThree = document.createElement('h5');
document.querySelector('.mainbody').appendChild(headingThree);
headingThree.textContent = 'The Outsider Agenda';
const headingFour = document.createElement('h6');
document.querySelector('.mainbody').appendChild(headingFour);
headingFour.textContent = 'what are they planning?';
const bodyText2Div = document.createElement('div');
bodyText2Div.classList.add('bodytextDiv2');
document.querySelector('.mainbody').appendChild(bodyText2Div);
const bodytext2 = document.createElement('p');
bodytext2.classList.add('bodytext2');
bodyText2Div.appendChild(bodytext2);
bodytext2.textContent = 'Reports on their mission statement varies. Many report they accept no payment for the work they do. Many others see these deeds as violent displays of power. Several world leaders such as Governor Renault of Northport and King Saxon Ordathe II of Banetrail were positive in their remarks. Queen Ordathe had this to say, "The Outsiders are noble people. They\'re the reason we have been able to uplift many of our citizens from poverty." Deljord\'s leader, Piranha, had other thoughts. "They\'re fine. Arrogant. Well-intentioned." New Ordis and Ternathus leadership declined giving any statement. The picture that has been painted for *this* reporter is that they call themselves heroes. Works of fiction, come to life, who fight for justice and freedom. They\'re stationed in the Dewdrop Glade where visitors are welcome to come and request their aid. Their secretary, Eleanor, is available to take your request. This newspaper would like to personally thank Eleanor for her help in publishing this article with her anecdotes and detailed research.';


const characterInfoHeading = document.createElement('h7');
characterInfoHeading.textContent = 'Meet the Outsiders';
const characterInfoHeadingSubtitle = document.createElement('h8');
characterInfoHeadingSubtitle.textContent = 'who, maybe not where, or why, definitely not why';
document.querySelector('.characterinfo').appendChild(characterInfoHeading);
document.querySelector('.characterinfo').appendChild(characterInfoHeadingSubtitle);
const characterInfoDiv = document.createElement('div');
document.querySelector('.characterinfo').appendChild(characterInfoDiv);
characterInfoDiv.classList.add('characterinfodiv');
const characterInfoText = document.createElement('p');
characterInfoText.classList.add('characterinfotext');
characterInfoDiv.appendChild(characterInfoText);
characterInfoText.innerHTML = 'On the subject of The Outsiders, we have many questions, the main ones being, who are these people, and what makes them tick? Well, we\'ve gathered a bit of information on each one of them just for you! Now, I\'ll warn you, some of them were <span class="characterspan"> a lot </span>more forthcoming than others, but I did my best to bring you the inside scoop on each of them, at least... what I could get.';


//alex 
const leaderDaddy = document.createElement('div');
leaderDaddy.classList.add('leaderdaddydiv');
document.querySelector('.characterinfo').appendChild(leaderDaddy);
const leaderDaddyTitle = document.createElement('h9');
leaderDaddyTitle.classList.add('leaderdaddy');
leaderDaddy.appendChild(leaderDaddyTitle);
leaderDaddyTitle.textContent = 'Alex Drake';
const leaderDaddyText = document.createElement('p');
leaderDaddyText.classList.add('alexdrake');
leaderDaddy.appendChild(leaderDaddyText);
leaderDaddyText.innerHTML = 'Alex Drake is the proclaimed leader of this rag-tag group of adventures, a bit broody for my taste, but effective and capable, nonetheless. Born in New Ordis, he is native to Ordsia, even owning a home in the town itself. His father being a pretty prominent member of the council or New Ordis means that he inherited his leadership skills honestly, not that we have any doubt... well not that we have <span class="leaderdaddyspan">that many</span> doubts. While he\'s certaintly known for his handling of the group, we also know him by his dedication to the latest fashion.';
const alexDrakeLink = document.createElement('a');
alexDrakeLink.classList.add('alexslink');
alexDrakeLink.textContent = 'Read more about Alex Drake';
leaderDaddyText.appendChild(alexDrakeLink);
alexDrakeLink.href = './alexdrake.html';

//fainne 

const weirdForestGirl = document.createElement('div');
weirdForestGirl.classList.add('forestgirldiv');
document.querySelector('.characterinfo').appendChild(weirdForestGirl);
const weirdForestGirlTitle = document.createElement('h10');
weirdForestGirlTitle.classList.add('weirdforestgirl');
weirdForestGirl.appendChild(weirdForestGirlTitle);
weirdForestGirlTitle.textContent = 'Fainne Uron';
const weirdForestGirlText = document.createElement('p');
weirdForestGirlText.classList.add('fainneuron');
weirdForestGirlTitle.appendChild(weirdForestGirlText);
weirdForestGirlText.innerHTML = 'Let me just start this by saying, and don\'t get me wrong, I have met many weird people in my time as a journalist, but my god... what an odd person. Sweet, but a little out there in terms of opinions, and dress. A druid hailing from the Crannach Timberlands, really the only surviving member of the original tribe, Fainne Uron is nothing if not talented. Whether it be changing into different creatures, or summoning the will to rebuild her tribe, Fainne has the gumption and dedication to do it all.';
const fainneUronLink = document.createElement('a');
fainneUronLink.classList.add('fainneslink');
fainneUronLink.textContent = 'Read more about Fainne Uron';
weirdForestGirlText.appendChild(fainneUronLink);
fainneUronLink.href = './fainneuron.html';

//shinzo 
const seaWitch = document.createElement('div');
seaWitch.classList.add('seawitchdiv');
document.querySelector('.characterinfo').appendChild(seaWitch);
const seaWitchTitle = document.createElement('h11');
seaWitchTitle.classList.add('seawitch');
seaWitch.appendChild(seaWitchTitle);
seaWitchTitle.textContent = 'Shinzo Katetsu';
const seaWitchText = document.createElement('p');
seaWitchText.classList.add('shinzokatetsu');
seaWitchTitle.appendChild(seaWitchText);
seaWitchText.innerHTML = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
const seaWitchLink = document.createElement('a');
seaWitchLink.classList.add('shinzoslink');
seaWitchLink.textContent = 'Read more about Shinzo Katetsu';
seaWitchText.appendChild(seaWitchLink);
seaWitchLink.href = './shinzokatetsu.html';

//holly 
const shadowWeirdo = document.createElement('div');
shadowWeirdo.classList.add('shadowweirdodiv');
document.querySelector('.characterinfo').appendChild(shadowWeirdo);
const shadowWeirdoTitle = document.createElement('h12');
shadowWeirdoTitle.classList.add('shadowweirdo');
shadowWeirdo.appendChild(shadowWeirdoTitle);
shadowWeirdoTitle.textContent = 'Hollyanna Knox';
const shadowWeirdoText = document.createElement('p');
shadowWeirdoText.classList.add('hollyannaknox');
shadowWeirdoTitle.appendChild(shadowWeirdoText);
shadowWeirdoText.innerHTML = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaa AAA A A A A AAAAAAAAAAAA A  AAAAAAAAAA AAAAAAAAAAAA'
const shadowWeirdoLink = document.createElement('a');
shadowWeirdoLink.classList.add('hollyslink');
shadowWeirdoText.appendChild(shadowWeirdoLink);
shadowWeirdoLink.textContent = 'Read more about Hollyanna Knox';
shadowWeirdoLink.href = './hollyannaknox.html'

//bael
const papercut = document.createElement('div');
papercut.classList.add('papercutdiv');
document.querySelector('.characterinfo').appendChild(papercut);
const papercutTitle = document.createElement('h13');
papercutTitle.classList.add('papercut');
papercut.appendChild(papercutTitle);
papercutTitle.textContent = 'Bael Volet';
const papercutText = document.createElement('p');
papercutText.classList.add('baelvolet');
papercutTitle.appendChild(papercutText);
papercutTitle.appendChild(papercutText);
papercutText.innerHTML = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaa AAA A A A A AAAAAAAAAAAA A  AAAAAAAAAA AAAAAAAAAAAA'
const papercutLink = document.createElement('a');
papercutLink.classList.add('baelslink');
papercutText.appendChild(papercutLink);
papercutLink.textContent = 'Read more about Bael Volet';
papercutLink.href = './baelvolet.html';
