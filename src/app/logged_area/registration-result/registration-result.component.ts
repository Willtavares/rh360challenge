import { Component, OnInit } from '@angular/core';
import {
  faAddressCard,
  faCreditCard,
  faDiagramProject,
  faPencil,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-registration-result',
  templateUrl: './registration-result.component.html',
  styleUrls: ['./registration-result.component.scss'],
})
export class RegistrationResultComponent implements OnInit {
  faPencil = faPencil;
  faDiagramProject = faDiagramProject;
  faCreditCard = faCreditCard;
  faAddressCard = faAddressCard;

  companyName: string = 'Não Informado';
  cnpj: string = 'Não Informado';
  moderator: string = 'Não Informado';
  cpf: string = 'Não Informado';
  email: string = 'Não Informado';
  cellphone: string = 'Não Informado';
  cep: string = 'Não Informado';
  address: string = 'Não Informado';

  received: any;
  info: any;

  ngOnInit(): void {
    this.received = window.sessionStorage.getItem('registration');
    this.info = JSON.parse(this.received);

    if (this.info) {
      this.companyName = this.info?.companyName;
      this.cnpj = this.info?.cnpj;
      this.moderator = this.info?.moderator;
      this.cpf = this.info?.cpf;
      this.email = this.info?.email;
      this.cellphone = this.info?.cellphone;
      this.cep = this.info?.cep;
      this.address = this.info?.address;
    }
  }
}
