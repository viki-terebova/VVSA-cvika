import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicAccountDetail } from './basic-account-detail';

describe('BasicAccountDetail', () => {
  let component: BasicAccountDetail;
  let fixture: ComponentFixture<BasicAccountDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicAccountDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicAccountDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
