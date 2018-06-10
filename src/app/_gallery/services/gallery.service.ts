import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Gallery } from '../models/gallery';
import { BaseService } from '../../base.service';

@Injectable({
  providedIn: 'root'
})
export class GalleryService extends BaseService {

  public getList(): Observable<Gallery[]> {
    const endpoint = this.buildUrl(['gallery']);

    return this.get(endpoint);
  }
}
