import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarPlaylistComponent } from './side-bar-playlist.component';

describe('SideBarPlaylistComponent', () => {
  let component: SideBarPlaylistComponent;
  let fixture: ComponentFixture<SideBarPlaylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideBarPlaylistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBarPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
