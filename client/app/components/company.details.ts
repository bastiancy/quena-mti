import {Component} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {FormFieldComponent} from './form.field';
import {CompanyService, Company} from '../services/companies.service';

@Component({
  selector: 'company-details',
  directives: [ FormFieldComponent ],
  templateUrl: '/app/templates/company.details.html'
})
export class DetailsComponent {
  constructor(private service:CompanyService, private routeParams: RouteParams) {
	let companyId = this.routeParams.get('id');
	service.getCompany(companyId).subscribe(
      company => this.company = company
	);
  }
}