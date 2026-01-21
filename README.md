
# Dept Weatherplanner

Met de Dept weatherplanner kun je het huidige weer checken en activiteiten bekijken die je juist moet doen en moet vermijden.

## Beschrijving

Deze weatherplanner heeft alles wat je wil. Huidige weer, weer van de komende dagen, je inschrijven voor de mail over het weer, activiteiten die je kunt doen met het huidige weer en wat je juist niet moet doen! 
Door simpel te klikken op de activiteiten kan je meer informatie er over vinden zodat je je nooit meer hoeft te vervelen.

Wil je zelf ervaren wat het weer is zonder naar buiten te gaan? Vrees niet [hier](https://tjeerd-jw.github.io/the-startup-responsive-interactive-website/) kan je hem nu gebruiken!!

## Mobile

Hier kan je zien hoe de website er op mobiel uitziet. Op mobiel is er een one column layout voor makkelijk gebruik op kleinere schermen zodat mobiele gebruikers gemakkelijk door de hele pagina kunnen scrollen.

<img width="500px" height="1000px" alt="tjeerd-jw github io_the-startup-responsive-interactive-website_(Nexus 6P)" src="https://github.com/user-attachments/assets/2ced04ce-4e15-44e1-888e-ad288bd61fc6" />

## Desktop

Hier kan je zien hoe de website eruitziet op een desktop. Op desktop is er een 2 column layout om gebruik te maken van de extra ruimte op desktop zodat desktop gebruikers zo min mogelijk hoeven te scrollen om de informatie te vinden die ze nodig hebben.

<img width="1066" height="714" alt="afbeelding" src="https://github.com/user-attachments/assets/997734c6-7454-4ba8-b646-77e4334a7e56" />

<!-- In de Beschrijving staat hoe je project er uit ziet, hoe het werkt en wat je er mee kan. -->
<!-- Voeg een mooie poster visual toe 📸 -->
<!-- Voeg een link toe naar Github Pages 🌐-->

## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met JS gedaan en hoe? -->

### HTML

De HTML is zo opgebouwd dat iedereen het kan gebruiken ongeacht de situatie. Elk device kan het gebruiken met minimaale breedte van 320px op telefoon word er gebruik gemaakt van een one column layout en op desktop een 2 column. Hieronder kan je zien hoe de weersvorspelling is opgebouwd zodat hij bruikbaar is voor screenreaders.

````html
                    <tbody>
                        <tr>
                            <td>Tuesday 25th Feb</td>
                            <td>
                                <img src="svg/sun.svg" alt="sunny">
                                19° / 22°
                            </td>
                            <td>
                                <img src="svg/rain.svg" alt="amount of rain">
                                0.5mm
                            </td>
                            <td>
                                N/W
                                <img src="svg/wind.svg" alt="wind direction north west">

                            </td>
                        </tr>
````

Deze website scoort zelfs een 100 op de lighthouse test!!

<img width="1170" height="388" alt="afbeelding" src="https://github.com/user-attachments/assets/d5ff4a88-d1c5-4850-9173-08a1d545fdab" />

### Huisstijl

De website maakt gerbruik van custom variables zodat de kleuren en spacing op de pagina consisitent zijn. Al deze styling staat in een aparte stylesheet zodat het niet zomaar verandert kan worden. De kleuren worden maken gebruik van HSLA zodat ze er extra mooi uitzien.

````css
 /* colors */
    /* primary */
    --primary-color: hsla(256, 93%, 53%, 1);
    /* shade */
    --shade-darkest: hsla(0, 0%, 62%, 1);
    --shade-dark: hsla(0, 0%, 77%, 1);
    --shade-neutral: hsla(0, 0%, 85%, 1);
    --shade-light: hsla(0, 0%, 91%, 1);
    --shade-lightest: hsla(0, 0%, 96%, 1);
    /* tekst */
    --primary-text: hsla(0, 0%, 0%, 1);
    /* background */
    --primary-background: hsla(0, 0%, 0%, 1);

    /* spacing */
    --spacing-small-vertical: .5rem 0;
    --spacing-medium-vertical: 1rem 0;
    --spacing-large-vertical: 1.5rem 0;

    --spacing-small-horizontal: 0 .5rem;
    --spacing-medium-horizontal: 0 1rem;
    --spacing-large-horizontal: 0 1.5rem;

    --spacing-small: .5rem;
    --spacing-medium: 1rem;
    --spacing-large: 1.5rem;
````

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


