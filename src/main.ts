/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

let currentPopup: any = undefined;

// Waiting for the API to be ready
WA.onInit().then(() => {
    console.log('Scripting API ready');
    console.log('Player tags: ',WA.player.tags)
		currentPopup = WA.ui.openPopup("welcomePopup", "Bienvenue au casting CroisiEurope & Holidéenxlvl \r \r La présentation se déroulera en visio principalement sur le pont du bateau \r \r Un membre de la Team va venir t'accueillir \r \r Sinon, pour te rendre directement sur le pont, clique sur le premier bouton, pour une salle de casting individuel, clique sur un des boutons suivants :", [{
			label: "PONT",
			className: "primary",
			callback: () => {
				WA.player.moveTo(960, 608, 10);
				}
			},{
			label: "CASTING 1",
			className: "primary",
			callback: () => {
				WA.player.moveTo(448, 416, 10);
			}
			},{
			label: "CASTING 2",
			className: "primary",
			callback: () => {
				WA.player.moveTo(512, 1344, 10);
			}
		}]);
    WA.room.area.onLeave('welcome').subscribe(closePopup);

	WA.room.area.onEnter('welcome').subscribe(() => {
		currentPopup = WA.ui.openPopup("welcomePopup", "Bienvenue au casting CroisiEurope & Holidéenxlvl \r \r La présentation se déroulera en visio principalement sur le pont du bateau \r \r Un membre de la Team va venir t'accueillir \r \r Sinon, pour te rendre directement sur le pont, clique sur le premier bouton, pour une salle de casting individuel, clique sur un des boutons suivants :", [{
			label: "PONT",
			className: "primary",
			callback: () => {
				WA.player.moveTo(960, 608, 10);
				}
			},{
			label: "CASTING 1",
			className: "primary",
			callback: () => {
				WA.player.moveTo(448, 416, 10);
			}
			},{
			label: "CASTING 2",
			className: "primary",
			callback: () => {
				WA.player.moveTo(448, 640, 10);
			}
		}]);
	});
	
    WA.room.area.onLeave('welcome').subscribe(closePopup)

    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

}).catch(e => console.error(e));

function closePopup(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}
export {};
