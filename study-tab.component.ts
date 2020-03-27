import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'study-tab',
    template:`
        <ul class="nav nav-tabs" role="tablist">
            <li [permission]="{id:'tab-study-patient',param:'visible'}" role="presentation" routerLinkActive="active"><a role="tab" routerLink="/study/patient" routerLinkActive="active" i18n="@@navigation.tab.patients">Patients</a></li>
            <li [permission]="{id:'tab-study-study',param:'visible'}" role="presentation" routerLinkActive="active"><a role="tab" routerLink="/study/study" routerLinkActive="active" i18n="@@navigation.tab.studies">Studies</a></li>
        </ul>
    `
})
export class StudyTabComponent{

  constructor() { }
}
