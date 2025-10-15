import { Component } from '@angular/core';
import { BasicDetail } from '../basic-detail/basic-detail';
import { WithdrawalDetail } from '../withdrawal-detail/withdrawal-detail';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-basic-account-detail',
  imports: [BasicDetail, WithdrawalDetail],
  templateUrl: './basic-account-detail.html',
  styleUrl: './basic-account-detail.css'
})
export class BasicAccountDetail {
  id: string | null = null;

  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
  }
}
