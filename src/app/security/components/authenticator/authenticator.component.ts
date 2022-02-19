import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {environment} from '../../../../environments/environment';

@Component({
    selector: 'app-authenticator',
    templateUrl: './authenticator.component.html',
    styleUrls: ['./authenticator.component.scss']
})
export class AuthenticatorComponent implements OnInit {

    private usernameBackup = '';
    username = '';
    password = '';
    invalidTrial = false;

    constructor(private readonly authService: AuthenticationService,
                private readonly modalService: NgbModal) {
    }

    ngOnInit(): void {
        this.username = sessionStorage.getItem('authenticator.username') ?? '';
    }

    get authenticated(): boolean {
        return this.authService.authenticated;
    }

    get secured(): boolean {
        return environment.secured;
    }

    open(content: any): void {
        this.usernameBackup = this.username;
        this.invalidTrial = false;
        this.reopen(content);
    }

    private reopen(content: any): void {
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'})
            .result
            .then(() => {
                this.authService.login(this.username, this.password)
                    .then(() => {
                        this.password = '';
                        sessionStorage.setItem('authenticator.username', this.username);
                    })
                    .catch(() => {
                        this.invalidTrial = true;
                        this.reopen(content);
                    });
            })
            .catch(() => { // Benutzer hat Dialog abgebrochen
                this.username = this.usernameBackup;
                this.password = '';
            });
    }

    logout(): void {
        this.authService.logout();
    }
}
