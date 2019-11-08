import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDossierComponent } from './create-dossier.component';

describe('CreateDossierComponent', () => {
  let component: CreateDossierComponent;
  let fixture: ComponentFixture<CreateDossierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateDossierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDossierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
