import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ToastService} from '../../../shared/services/toast.service';

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
                private readonly modalService: NgbModal,
                private readonly toastService: ToastService) {
    }

    ngOnInit(): void {
        this.username = sessionStorage.getItem('authenticator.username') ?? '';
    }

    get isAuthenticated(): boolean {
        return this.authService.isAuthenticated();
    }

    open(content: any): void {
        this.toastService.enabled = false;
        try {
            this.usernameBackup = this.username;
            this.invalidTrial = false;
            this.reopen(content);
        } finally {
            this.toastService.enabled = true;
        }
    }

    private reopen(content: any): void {
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then(result => {
            this.authService.login(this.username, this.password).then(() => {
                this.password = '';
                sessionStorage.setItem('authenticator.username', this.username);
            }, onError => {
                this.invalidTrial = true;
                this.reopen(content);
            });
        }, onRejected => {
            this.username = this.usernameBackup;
            this.password = '';
        });
    }

    logout(): void {
        this.authService.logout();
    }
}
