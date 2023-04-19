import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import jwt_decode from "jwt-decode";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    title = 'angularsubscriberqrcoderender';
    subscriber: any = {
        "SBSB_ID": "",
        "MEME_CK": "",
        "MEME_LAST_NAME": "",
        "MEME_FIRST_NAME": "",
        "MEME_SEX": "",
        "MEME_BIRTH_DT": "",
        "SBAD_ADDR1": "",
        "SBAD_ADDR2": "",
        "SBAD_CITY": "",
        "SBAD_STATE": "",
        "SBAD_ZIP": "",
        "GRGR_ID": "",
        "MEPE_ELIG_IND": "",
        "PDPD_LOB": "",
        "IN_COPAY": "",
        "PAR_COPAY": "",
        "IPA_NAME": "",
        "PCP_NAME": ""
      }

    constructor(
        private route: ActivatedRoute,
    ) { }

    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            let token: string = params['token'];
            if (token == undefined) return
            let decoded = jwt_decode(token);
            this.subscriber = decoded;
            console.log(this.subscriber)
        });
    }

}
