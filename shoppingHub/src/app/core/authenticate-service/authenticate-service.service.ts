import { Injectable } from '@angular/core';
import { ServiceEndpointsService } from '../service-endpoints/service-endpoints.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private serviceEndpoint: ServiceEndpointsService) { }

  
}
