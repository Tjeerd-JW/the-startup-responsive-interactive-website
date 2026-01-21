Ontwerp en maak een responsive website voor een startup.

De instructies voor deze opdracht staan in: [INSTRUCTIONS.md](https://github.com/fdnd-task/the-startup-responsive-interactieve-website/blob/main/docs/INSTRUCTIONS.md)

# Dept Weatherplanner

Met de Dept weatherplanner kun je het huidige weer checken en activiteiten bekijken die je juist moet doen en moet vermijden.

## Beschrijving

Deze weatherplanner heeft alles wat je wil. Huidige weer, weer van de komende dagen, je inschrijven voor de mail over het weer, activiteiten die je kunt doen met het huidige weer en wat je juist niet moet doen! 
Door simpel te klikken op de activiteiten kan je meer informatie er over vinden zodat je je nooit meer hoeft te vervelen.

Wil je zelf ervaren wat het weer is zonder naar buiten te gaan? Vrees niet [hier](https://tjeerd-jw.github.io/the-startup-responsive-interactive-website/) kan je hem nu gebruiken!!

## Mobile

Hier kan je zien hoe de website er op mobiel uitziet.

<img width="500px" height="1000px" alt="tjeerd-jw github io_the-startup-responsive-interactive-website_(Nexus 6P)" src="https://github.com/user-attachments/assets/2ced04ce-4e15-44e1-888e-ad288bd61fc6" />

## Desktop

Hier kan je zien hoe de website eruitziet op een desktop.
<img width="1066" height="714" alt="afbeelding" src="https://github.com/user-attachments/assets/997734c6-7454-4ba8-b646-77e4334a7e56" />

<!-- In de Beschrijving staat hoe je project er uit ziet, hoe het werkt en wat je er mee kan. -->
<!-- Voeg een mooie poster visual toe 📸 -->
<!-- Voeg een link toe naar Github Pages 🌐-->

## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met JS gedaan en hoe? -->

### HTML

De HTML is zo opgebouwd dat iedereen het kan gebruiken ongeacht de situatie. Elk device kan het gebruiken met minimaale breedte van 320px op telefoon word er gebruik gemaakt van een one column layout en op desktop een 2 column.
Deze website scoort zelfs een 100 op de lighthouse test!!

<img width="1170" height="388" alt="afbeelding" src="https://github.com/user-attachments/assets/d5ff4a88-d1c5-4850-9173-08a1d545fdab" />

### Huisstijl

De website maakt gerbruik van custom variables zodat de kleuren en spacing op de pagina consisitent zijn. Al deze styling staat in een aparte stylesheet zodat het niet zomaar verandert kan worden. De kleuren worden maken gebruik van HSLA zodat ze er extra mooi uitzien.

### Animaties

Met CSS en JS zijn gebruikt om animaties te maken op de website.

Mail signup

![mail-button2026-01-21103435](https://github.com/user-attachments/assets/d1535e60-2360-4d18-8c22-ba2a51e4b337)

Hier is een snippet van de code

````css
                    &::before {
                        content: '';
                        position: absolute;
                        top: -50%;
                        left: -50%;
                        width: 200%;
                        height: 200%;
                        background: linear-gradient(0deg,
                                transparent,
                                transparent 30%,
                                var(--primary-color));
                        transform: rotate(-45deg);
                        transition: 1s ease;
                        opacity: 0;
                        pointer-events: none;
                    }

                    &:hover {
                        transform: scale(1.05);
                        box-shadow: 0 0 5px var(--primary-color);

                        &::before {
                            opacity: 1;
                            transform: rotate(-45deg) translateY(100%);
                        }
                    }
````

Modal met informatie

![modal2026-01-21103851](https://github.com/user-attachments/assets/21085125-0965-4096-9add-5046beee97fc)



## Bronnen

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).


